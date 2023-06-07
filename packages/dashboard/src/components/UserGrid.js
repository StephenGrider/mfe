import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Register from "./signup/Register";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from "@material-ui/core";
import SnackbarAlert from "../../../auth/src/components/notification/SnackbarAlert";

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const UserGrid = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const classes = useStyles();
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "role", headerName: "Role", width: 150 },
    { field: "email", headerName: "Username", width: 200 },
    { field: "phoneNumber", headerName: "Phone Number", width: 190 },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      width: 200,
      renderCell: (params) => (
        <div>{params.value && params.value.split("T")[0]}</div>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <div>
          <IconButton
            className={classes.icon}
            color="secondary"
            onClick={() => handleDeleteDialogOpen(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            className={classes.icon}
            color="primary"
            onClick={() => handleEdit(params.row.id)}
          >
            <EditIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  const refreshGrid = () => {
    fetch("https://localhost:7007/WeatherForecast")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    refreshGrid();
  }, []);

  const fetchUserData = (id) => {
    const url = `${process.env.REACT_APP_API_URL}/Users/${id}:int`;
    fetch(url, {
      headers: { Authorization: sessionStorage.getItem("jwttoken") },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        setOpenModal(true);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const handleEdit = (id) => {
    setSelectedUserId(id);
    fetchUserData(id);
  };
  const handleDeleteDialogOpen = (id) => {
    setDeleteId(id);
    setOpenDeleteDialog(true);
  };

  const handleDeleteDialogClose = () => {
    setOpenDeleteDialog(false);
  };

  const handleDelete = () => {
    const id = deleteId;
    fetch(`${process.env.REACT_APP_API_URL}/Users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        setShowAlert(true);
        setAlertType("success");
        setAlert(response.message);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch((error) => {
        setShowAlert(true);
        setAlertType("error");
        setAlert(error.message);
      })
      .finally(() => {
        setOpenDeleteDialog(false);
      });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setUserData(null);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <SnackbarAlert
        title={alertType}
        message={alert}
        showAlert={showAlert}
        handleClose={() => {
          setShowAlert(false);
        }}
      />
      <Dialog
        open={openDeleteDialog}
        onClose={handleDeleteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this record?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} color="primary">
            No
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <h1>User Data</h1>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          pagination
          autoHeight
          renderCell={(params) => (
            <div>
              <IconButton
                color="primary"
                onClick={() => handleEdit(params.row.id)}
              >
                <EditIcon />
              </IconButton>
            </div>
          )}
        />
      </div>

      <Modal
        className={classes.modalContainer}
        open={openModal}
        onClose={handleCloseModal}
      >
        <div className={classes.modalContent}>
          <Register
            userData={userData}
            selectedUserId={selectedUserId}
            handleClose={handleClose}
            refreshGrid={refreshGrid}
          />
        </div>
      </Modal>
    </>
  );
};

export default UserGrid;
