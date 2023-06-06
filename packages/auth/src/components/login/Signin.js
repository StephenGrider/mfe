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
import  {handlesubmit}  from "./loginHelper";
import Layout from "../layout/layout";
import loginStyles from "./loginStyles";
import loginForm from "./loginForm";

export default function SignUp() {
  const classes = loginStyles();
  const usenavigate = useHistory();
  const [messageTitle, setMessageTitle] = useState("");
  const [message, setMessage] = useState("");
  
  const capitalizeFirstLetter = (value) =>
  
    value.charAt(0).toUpperCase() + value.slice(1);
  const formik = loginForm({
    submit: async (values) => {
      formik.isValid &&
      handlesubmit(values, usenavigate, setMessage, setMessageTitle);
    },
  });

  return (
    <div className={classes.container}>
          <Container className={classes.layoutContainers} style={{
      alignItems: "stretch", margin: "0px !important"
    }}>
      <div className={classes.signinForm}>
        <Alert severity={messageTitle} style={{ 
        marginTop: "20px",
        position: "absolute",
    top: "10px",
    width: "calc(100% - 30px)",
    left: "0" }}>
          <AlertTitle>{capitalizeFirstLetter(messageTitle)}</AlertTitle>
          {message}
        </Alert>
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
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
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/auth/signup">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
        </div>
      <div className={classes.leftside}></div>
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
