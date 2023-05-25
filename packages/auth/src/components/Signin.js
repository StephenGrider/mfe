import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast, TypeOptions } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import Layout from './layout/layout';
import styles from "./login/loginStyles";
import { Alert, AlertTitle } from '@material-ui/lab';


export default function SignIn() {
  const classes = styles();
  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');
  const [messeses, messesesupdate] = useState('');
  const [printMessesesupdated, setPrintMessesesupdated] = useState("");
  const usenavigate = useHistory();

 
  const proceedLoginusingAPI = (e) => {
    e.preventDefault();
    let inputobj = {
      "email": username,
      "password": password
    };
    fetch("https://localhost:7007/api/Users/Authenticate", {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(inputobj)
    }).then((res) => {
      
      
      if (res.status === 200) {
       
        toast.success('Success');
        messesesupdate("success")
        usenavigate.push('/dashboard')
      } else {
        messesesupdate("error")
      }
      return res.json();
    }).then((resp) => {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('jwttoken', resp.jwtToken);
      sessionStorage.setItem('statusCode', resp.message);
      setPrintMessesesupdated(resp.message)
    }).catch((err) => {
      messesesupdate("error")
      toast.error('Login Failed due to :' + err.message);
      usenavigate.push('/auth/signin')
    });
  }

  return (<div className={classes.container}>
    <Container  maxWidth="xxl" style={{
      alignItems: "stretch", margin: "0px !important"
    }}>
      <Alert severity={messeses} style={{ marginTop: "20px" }}>
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
          onSubmit={proceedLoginusingAPI}
          className={classes.form}
          validate
        >
          <TextField
            error={!username}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={e => usernameupdate(e.target.value)}
          />
          <TextField
            error={!password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => passwordupdate(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
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
          <Grid container>
            <Grid item>
              <Link to="/auth/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <div className={classes.leftside}></div>
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