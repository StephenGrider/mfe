import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Layout from "../layout/layout";
import loginForm from "./loginForm";
import styles from "./loginStyles";
import SnackbarAlert from "../notification/SnackbarAlert";
import { proceedLoginusingAPI } from "./loginHelper";

export default function SignIn() {
  const classes = styles();
  const usenavigate = useHistory();
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const formik = loginForm({
    submit: async (values) => {
      formik.isValid &&
        proceedLoginusingAPI(
          values,
          usenavigate,
          setAlert,
          setAlertType,
          setShowAlert
        );
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
      <Container
        className={classes.layoutContainers}
        style={{
          alignItems: "stretch",
          margin: "0px !important",
        }}
      >
        <div className={classes.signinForm}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              onSubmit={formik.handleSubmit}
              className={classes.form}
              noValidate
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="username"
                label="User Name"
                id="username"
                autoComplete="username"
                autoFocus
                error={!!(formik.touched.username && formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={!!(formik.touched.password && formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              {formik.errors.submit && (
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}
              <Grid container>
                <Grid item>
                  <Link to="/auth/signup">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <div className={classes.leftside}></div>
        </div>
      </Container>
      <Container
        className={classes.layoutContainer}
        style={{
          alignItems: "stretch",
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