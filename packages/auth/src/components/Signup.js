import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';
import { toast } from "react-toastify";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="/">Your Website</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({ onSignIn }) {
  const classes = useStyles();
  const [id, idchange] = useState("");
  const [username, usernamechange] = useState("");
  const [firstname, firstnamechange] = useState("");
  const [lastname, lastnamechange] = useState("");
  const [password, passwordchange] = useState("");
  const [phoneNo, phoneNochange] = useState("");
  const [email, emailchange] = useState("");
  const usenavigate=useHistory();
 // const navigate = useNavigate();

  const IsValidate = () => {
      let isproceed = true;
      let errormessage = 'Please enter the value in ';
      // if (id === null || id === '') {
      //     isproceed = false;
      //     errormessage += ' Username';
      // }
      if (username === null || username === '') {
        isproceed = false;
        errormessage += ' Username';
    }
      if (firstname === null || firstname === '') {
          isproceed = false;
          errormessage += ' Firstname';
      }
      if (lastname === null || lastname === '') {
        isproceed = false;
        errormessage += ' Lastname';
    }
      if (password === null || password === '') {
          isproceed = false;
          errormessage += ' Password';
      }
      if (email === null || email === '') {
          isproceed = false;
          errormessage += ' Email';
      }
      if (phoneNo === null || phoneNo === '') {
        isproceed = false;
        errormessage += 'Phone No';
    }

      if(!isproceed){
          toast.warning(errormessage)
      }else{
          if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

          }else{
              isproceed = false;
              toast.warning('Please enter the valid email')
          }
      }
      return isproceed;
  } 

  const handlesubmit = (e) => {
          e.preventDefault();
          let regobj = { "username": username, "password": password,"role":"Admin"};
          if (IsValidate()) {
          //console.log(regobj);
          fetch("https://localhost:7007/api/Users", {
              method: "POST",
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(regobj)
          }).then((res) => {
              toast.success('Registered successfully.')
              if(toast.success('Success')){
                usenavigate.push('/auth/signin')
              }else{
                usenavigate.push('/auth/signup')
              } 
              //navigate('/login');
          }).catch((err) => {
              toast.error('Failed :' + err.message);
          });
      }
  }
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          onSubmit={handlesubmit}
          className={classes.form}
          noValidate
        >
          <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                autoFocus
                value={username} onChange={e => usernamechange(e.target.value)} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="firstname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="First Name"
                autoFocus
                value={firstname} onChange={e => firstnamechange(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lastName"
                value={lastname} onChange={e => lastnamechange(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email} onChange={e => emailchange(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNo"
                label="Phone No"
                name="phoneNo"
                autoComplete="phoneNo"
                value={phoneNo} onChange={e => phoneNochange(e.target.value)}
              />
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
                value={password} onChange={e => passwordchange(e.target.value)} t
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            //onClick={onSignIn}
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
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
