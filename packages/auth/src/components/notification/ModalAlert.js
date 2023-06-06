import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Alert, AlertTitle } from "@material-ui/lab";
import { capitalizeFirstLetter } from "../signup/signUpHelper";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
}));

const modalStyle = {
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "0",
  border: "none",
  width: "75%",
};

export default function ModalAlert({ title, message, open, handleClose }) {
  const classes = useStyles();
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <Alert severity={title}>
            <AlertTitle>{capitalizeFirstLetter(title)}</AlertTitle>
            {message}
          </Alert>
        </div>
      </Modal>
    </div>
  );
}
