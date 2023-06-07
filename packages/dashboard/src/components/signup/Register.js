import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Alert, AlertTitle } from "@material-ui/lab";
import signUpStyles from "./signUpStyles";
import signupForm from "./signupForm";
import { handlesubmit } from "./signUpHelper";
import {  Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";

function Register({userData, selectedUserId,handleClose,refreshGrid}) {
    const classes = signUpStyles();
    const usenavigate = useHistory();
    const [messageTitle, setMessageTitle] = useState("");
    const [message, setMessage] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const isNumber = (value) =>
      Number(value) > -1 && value.indexOf(".") === -1 && value.indexOf("0") !== 0;
    const capitalizeFirstLetter = (value) =>
      value.charAt(0).toUpperCase() + value.slice(1);
      
    const formik = signupForm({
        submit: async (values) => {
          formik.isValid &&
            handlesubmit(values, setMessage, setMessageTitle,selectedUserId,refreshGrid);
        },
        user: userData
      });
      const handleDateChange = (e) => {
        const { value } = e.target;
        formik.handleChange(e);
        const isValid = validateDateOfBirth(value);
        if (!isValid) {
          formik.setFieldError(
            "dateOfBirth",
            "Invalid date of birth. You must be at least 18 years old."
          );
        } else {
          formik.setFieldError("dateOfBirth", "");
        }
      };
     
  return (
    <Container component="main" maxWidth="xs">
       <div onClick={handleClose}  className={classes.closeButton} style={{display:"flex",justifyContent:"flex-end"}}>
          <CloseIcon />
        </div>
    <Alert severity={messageTitle} style={{ marginTop: "20px" }}>
      <AlertTitle>{capitalizeFirstLetter(messageTitle)}</AlertTitle>
      {message}
    </Alert>
   
    <div className={classes.paper} style={{margin:"0"}}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Update 
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        className={classes.form}
        noValidate
      >
        <Grid container spacing={2}>
          <Grid item  xs={6} >
            <TextField
              autoComplete="firstName"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              autoFocus
              id="firstName"
              label="First Name"
              error={
                !!(formik.touched.firstName && formik.errors.firstName)
              }
              helperText={
                formik.touched.firstName && formik.errors.firstName
              }
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              autoComplete="lastName"
              name="lastName"
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              error={!!(formik.touched.lastName && formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              autoComplete="userName"
              name="userName"
              variant="outlined"
              required
              fullWidth
              disabled="true"
              id="userName"
              label="Username"
              error={!!(formik.touched.userName && formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
              value={formik.values.userName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              autoComplete="role"
              name="role"
              id="role"
              select
              label="Role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!(formik.touched.role && formik.errors.role)}
              helperText={formik.touched.role && formik.errors.role}
              fullWidth
              variant="outlined"
              required
            >
              <MenuItem value="">Select a role</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="User">User</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6} >
          <TextField
              variant="outlined"
              required
              fullWidth
              id="phoneNo"
              label="Phone No"
              name="phoneNo"
              autoComplete="phoneNo"
              error={!!(formik.touched.phoneNo && formik.errors.phoneNo)}
              helperText={formik.touched.phoneNo && formik.errors.phoneNo}
              value={formik.values.phoneNo}
              onBlur={formik.handleBlur}
              onChange={(e) => {
                isNumber(e.target.value) && formik.handleChange(e);
              }}
            />
          </Grid>
          <Grid item xs={6} >
          <TextField
            variant="outlined"
            fullWidth
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            label="Date of Birth"
            error={
              !!(formik.touched.dateOfBirth && formik.errors.dateOfBirth)
            }
            helperText={
              formik.touched.dateOfBirth && formik.errors.dateOfBirth
            }
            value={formik.values.dateOfBirth}
            onBlur={formik.handleBlur}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              max: new Date().toISOString().split("T")[0], 
            }}
         />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              hidden="true"
              style={{display:"none"}}
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              style={{display:"none"}}
              type="password"
              id="confirmPassword"
              error={
                !!(
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                )
              }
              helperText={
                formik.touched.confirmPassword &&
                formik.errors.confirmPassword
              }
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </Grid>
                   
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to="/auth/signin">Already have an account? Sign in</Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
  );
}

export default Register