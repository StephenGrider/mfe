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
import { toast } from "react-toastify";
import Layout from "../layout/layout";
import styles from "./loginStyles";
import loginForm from "./loginForm";


export default function SignIn() {
  const classes = styles();
  //const { setAuthTokens } = useAuth();
  const [messeses, messesesupdate] = useState('');
  const [printMessesesupdated, setPrintMessesesupdated] = useState("");
  const usenavigate = useHistory();
  const formik = loginForm({
    submit: async (values) => {
      formik.isValid && proceedLoginusingAPI(values);
    },
  });
 
  const proceedLoginusingAPI = (values) => {
    let inputobj = {
      "email": values.username,
      "password": values.password
    };
    fetch("https://localhost:7007/api/Users/Authenticate", {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(inputobj)
    }).then((res) => {
      if (res.status === 200) {
        sessionStorage.setItem('statusCode', res.status);
        toast.success('Success');
        messesesupdate("success")
        usenavigate.push('/dashboard')
      } else {
        messesesupdate("error")
      }
      return res.json();
    }).then((resp) => {
      sessionStorage.setItem('username', values.username);
      sessionStorage.setItem('jwttoken', resp.jwtToken);      
      setPrintMessesesupdated(resp.message)
    }).catch((err) => {
      messesesupdate("error")
      toast.error('Login Failed due to :' + err.message);
      usenavigate.push('/auth/signin')
    });
  }

  return (<div className={classes.container}>
    <Container className={classes.layoutContainers} style={{
      alignItems: "stretch", margin: "0px !important"
    }}>
      <div className={classes.signinForm}>
      <Alert severity={messeses} style={{ 
        marginTop: "20px",
        position: "absolute",
    top: "10px",
    width: "calc(100% - 30px)",
    left: "0" }}>
        <AlertTitle>{messeses}</AlertTitle>
        {messeses === "error" ? printMessesesupdated : messeses === "success" ? "Success" : ""}
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
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          // onClick={onSignIn}
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
              <Link to="/auth/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <div className={classes.leftside}></div>
      </div>
    </Container>
    <Container className={classes.layoutContainer} style={{
      alignItems: "stretch", margin: "0px !important"
    }}>
      <div className={classes.layout}>
        <Layout />
      </div>
    </Container></div>
  );
}