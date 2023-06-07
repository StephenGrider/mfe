import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { handlesubmit, isNumber, yesterdaysDate } from "./signUpHelper";
import Layout from "../layout/layout";
import signUpStyles from "./signUpStyles";
import signupForm from "./signupForm";
import SnackbarAlert from "../notification/SnackbarAlert";

export default function SignUp() {
  const classes = signUpStyles();
  const usenavigate = useHistory();
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const formik = signupForm({
    submit: async (values) => {
      formik.isValid &&
        handlesubmit(values, usenavigate, setAlert, setAlertType, setShowAlert);
    },
  });

  return (
    <div className={classes.container}>
      <SnackbarAlert
        title={alertType}
        message={alert}
        showAlert={showAlert}
        handleClose={() => {
          setShowAlert(false);
          if (alertType === 'success') {
            usenavigate.push("/dashboard");
          }
        }}
      />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            onSubmit={formik.handleSubmit}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
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
              <Grid item xs={12} md={6}>
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
                  id="userName"
                  label="Username"
                  error={!!(formik.touched.userName && formik.errors.userName)}
                  helperText={formik.touched.userName && formik.errors.userName}
                  value={formik.values.userName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
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
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  autoComplete="dateOfBirth"
                  label="Date Of Birth"
                  className={classes.textField}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ inputProps: { max: yesterdaysDate() } }}
                  error={
                    !!(formik.touched.dateOfBirth && formik.errors.dateOfBirth)
                  }
                  helperText={
                    formik.touched.dateOfBirth && formik.errors.dateOfBirth
                  }
                  value={formik.values.dateOfBirth}
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
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
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
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/auth/signin">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Container
        className={classes.layoutContainer}
        style={{
          alignItems: "stretch",
          maxWidth: "50% !important",
          margin: "0px !important",
        }}
      >
        <div className={classes.layout}>
          <Layout />
        </div>
      </Container>
    </div>
  );
}