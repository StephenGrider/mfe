import React, {useState, useEffect} from 'react';
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
import { toast } from "react-toastify";
import Layout from './layout/layout';
import styles from "./login/loginStyles";




export default function SignIn({ onSignIn }) {
  const classes = styles();
  const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate=useHistory();

//     useEffect(()=>{
// sessionStorage.clear();
//     },[]);

    // const ProceedLogin = (e) => {
    //     e.preventDefault();
    //     if (validate()) {
    //         ///implentation
    //         // console.log('proceed');
    //         fetch("https://localhost:7007/api/Users" + username).then((res) => {
    //             return res.json();
    //         }).then((resp) => {
    //             //console.log(resp)
    //             if (Object.keys(resp).length === 0) {
    //                 toast.error('Please Enter valid username');
    //             } else {
    //                 if (resp.password === password) {
    //                     toast.success('Success');
    //                     onSignIn = true;
    //                     sessionStorage.setItem('username',username);
    //                     sessionStorage.setItem('userrole',resp.role);
    //                     if(onSignIn === true){
    //                       usenavigate.push('/dashboard')
    //                     }
                        
    //                 }else{
    //                     toast.error('Please Enter valid credentials');
    //                 }
    //             }
    //         }).catch((err) => {
    //             toast.error('Login Failed due to :' + err.message);
    //         });
    //     }
    // }

    const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            let inputobj={
              "username": username,
              "password": password,
              "role":"Admin"
          };
            fetch("https://localhost:7007/api/Users/Authenticate",{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log("resp=======", resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Login failed, invalid credentials');
                }else{
                     toast.success('Success');
                     sessionStorage.setItem('username',username);
                     sessionStorage.setItem('jwttoken',resp.jwtToken);
                    if(toast.success('Success')){
                      usenavigate.push('/dashboard')
                    }else{
                      usenavigate.push('/profile')
                    }
                }
                
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }
    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }

  return (<div className={classes.container}>
    <Container maxWidth="xs" style={{alignItems: "stretch", 
     maxWidth: "50% !important", margin: "0px !important"}}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
         onSubmit={ProceedLoginusingAPI}
          className={classes.form}
          noValidate
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
    <Container  className={classes.layoutContainer} style={{alignItems: "stretch", 
     maxWidth: "50% !important", margin: "0px !important"}}>
    <div className={classes.layout}>
      <Layout />
    </div>
  </Container></div>
  );
}