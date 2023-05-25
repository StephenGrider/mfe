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
import { isAfter } from "date-fns";
import {
  validateEmail,
  validatePhone,
  validateText,
  validateText2,
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
  const classes = signUpStyles();
  const [username, usernamechange] = useState("");
  const [firstname, firstnamechange] = useState("");
  const [lastname, lastnamechange] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const systemDate = new Date().setHours(0, 0, 0, 0);
  const minimumDate = new Date("01-01-1970").setHours(0, 0, 0, 0);
  const date = new Date();
  const month = Number(date.getMonth()) + 1;
  const monthStr = month > 9 ? month.toString() : "0" + month.toString();
  const dateStr = date.getFullYear() + "-" + monthStr + "-" + date.getDate();
  const passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
  const usenavigate = useHistory();
  const [phoneNo, setPhoneNo] = useState("");
  const [touched, setTouched] = useState(false);
  const isInvalid = touched && (!phoneNo || !validatePhone(phoneNo));
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOfBirthError, setDateOfBirthError] = useState(false);

  const dateOfBirthchange = (value) => {
    const selectedDate = new Date(value);
    const currentDate = new Date();
    const minDate = new Date();
    minDate.setFullYear(currentDate.getFullYear() - 18);
    const isDateValid = !isAfter(selectedDate, systemDate) && !isAfter(selectedDate, minDate);
  setDateOfBirth(value);
  setDateOfBirthError(!isDateValid);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setPhoneNo(numericValue);
   };
    const handleInputBlur = () => {
      setTouched(true);
     };
      
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
                  confirmPassword,
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
                error={!validateText(firstname) || (firstname.length > 0 && firstname.length > 10)}
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
                  helperText=
                  {
                    !validateText(firstname)
                    ? "Please enter a valid first name without digits or special characters."
                    : firstname.length > 10
                    ? "First name should not exceed 10 characters."
                    : ""
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  error={!validateText(lastname) || (lastname.length > 0 && lastname.length > 10)}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="lastName"
                  value={lastname}
                  onChange={(e) => lastnamechange(e.target.value)}
                  helperText=
                  {
                    !validateText(lastname)
                    ? "Please enter a valid last name without digits or special characters."
                    : lastname.length > 10
                    ? "Last name should not exceed 10 characters."
                    : ""
                  }
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
              error={isInvalid}
              variant="outlined"
              required
              fullWidth
              id="phoneNo"
              label="Phone No"
              name="phoneNo"
              type="text"
              autoComplete="phoneNo"
              value={phoneNo}
              style={{ outlineColor: isInvalid ? 'red' : 'inherit' }}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              inputProps={{
                pattern: '[0-9]*',
                inputMode: 'numeric',
                maxLength: 10,
              }}
              helperText=
              {
                (isInvalid && 'Please enter a valid phone number.') ||
                (touched && phoneNo.length !== 10 && 'Phone number should be 10 digits.')
              }
            />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={dateOfBirthError}
                  variant="outlined"
                  fullWidth
                  id="dateOfBirth"
                  label=""
                  name="dateOfBirth"
                  type="date"
                  autoComplete="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => dateOfBirthchange(e.target.value)}
                  helperText={dateOfBirthError && "Please select a valid date of birth."}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!validateText2(password)}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(!passwordPattern.test(e.target.value));
                  }}
                  helperText=
                  {
                    (passwordError && "Password should contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters.") ||
                    (password.includes(" ") && "Password should not contain spaces.")
                  }
                />

              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!validateText2(confirmPassword)}
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  value={confirmPassword}
                  onChange={(e) => 
                    {
                    setConfirmPassword(e.target.value);
                    setPasswordError(e.target.value !== password);
                  }}
                />
                  {passwordError && (
                    <Typography variant="body2" color="error">
                      Passwords do not match or do not meet the requirements.
                    </Typography>
                    )}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control=
                  {
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
