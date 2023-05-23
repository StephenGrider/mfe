import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link, useHistory } from "react-router-dom";
import { handlesubmit } from "./signUpHelper";
import Layout from "../layout/layout";
import signUpStyles from "./signUpStyles";
import {
  validateEmail,
  validatePhone,
  validateText,
} from "../login/loginHelper";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/">Your Website</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  // const classes = useStyles();
  const classes = signUpStyles();
  const [username, usernamechange] = useState("");
  const [firstname, firstnamechange] = useState("");
  const [lastname, lastnamechange] = useState("");
  const [password, passwordchange] = useState("");
  const [confirmpassword, confirmpasswordchange] = useState("");

  const systemDate = new Date().setHours(0, 0, 0, 0);
  const minimumDate = new Date("01-01-1970").setHours(0, 0, 0, 0);
  const date = new Date();
  const month = Number(date.getMonth()) + 1;
  const monthStr = month > 9 ? month.toString() : "0" + month.toString();
  const dateStr = date.getFullYear() + "-" + monthStr + "-" + date.getDate();
  const [dateOfBirth, dateOfBirthchange] = useState(dateStr);
  const [phoneNo, phoneNochange] = useState("");
  const usenavigate = useHistory();

  return (
    <div className={classes.container}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            onSubmit={(e) => {
              handlesubmit(
                e,
                {
                  firstname,
                  lastname,
                  username,
                  phoneNo,
                  dateOfBirth,
                  password,
                  confirmpassword,
                },
                usenavigate
              );
            }}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  error={!validateText(firstname)}
                  autoComplete="firstname"
                  name="firstname"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  autoFocus
                  value={firstname}
                  onChange={(e) => firstnamechange(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  error={!validateText(lastname)}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="lastName"
                  value={lastname}
                  onChange={(e) => lastnamechange(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={!validateEmail(username)}
                  autoComplete="username"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Email Address"
                  autoFocus
                  value={username}
                  onChange={(e) => usernamechange(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!validatePhone(phoneNo)}
                  variant="outlined"
                  required
                  fullWidth
                  id="phoneNo"
                  label="Phone No"
                  name="phoneNo"
                  autoComplete="phoneNo"
                  value={phoneNo}
                  onChange={(e) => phoneNochange(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!dateOfBirth}
                  variant="outlined"
                  fullWidth
                  id="dateOfBirth"
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  autoComplete="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => dateOfBirthchange(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!validateText(password)}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => passwordchange(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!validateText(confirmpassword)}
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  value={confirmpassword}
                  onChange={(e) => confirmpasswordchange(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
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
