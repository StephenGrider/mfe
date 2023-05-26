import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import ChartTwo from './ChartTwo';
import Orders from './Orders';
import DrawerMenu from './DrawerMenu';
import { useStyles } from './Styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Grid,
  Typography,
  Button,
  Paper,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@material-ui/core';

export default function Profile(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const url = 'https://localhost:7007/api/Users/5:int'; // Update the URL with the correct endpoint
  const [data, setData] = useState([]);
  const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}/;
  
  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  console.log('data=====', Array(data));
  sessionStorage.setItem('fullnameUser', data.firstName + ' ' + data.lastName);

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirm: '',
    },
    validationSchema: Yup.object().shape({
      oldPassword: Yup.string().required('Old Password is required.')
      .matches(passwordRegExp, 'New Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.'),
      
      newPassword: Yup.string()
        .required('New Password is required.')
        .matches(passwordRegExp, 'New Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.')
        .notOneOf([Yup.ref('oldPassword')], 'New Password must be different from Old Password.'),
      
        confirm: Yup.string()
        .required('Confirm Password is required.')
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match.')
        .matches(passwordRegExp, 'Confirm Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.'),
    }),
    onSubmit: async (values) => {
      await handlePasswordUpdate(values);
    },
  });
  

  const handlePasswordUpdate = (values) => {
    const updateUrl = `https://localhost:7007/api/Users/${data.id}`; // Update the URL with the correct endpoint

    // Create a request body with the old and new password
    const requestBody = {
      //oldPassword: values.oldPassword,
      password: values.newPassword,
    };

    // Make a PATCH request to the API endpoint to update the password
    fetch(updateUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((response) => {
        debugger
        // Check the response for success or error
        if (response.code===200) {
          // Password update successful
          alert(response.message);
          // Clear the input fields
          formik.resetForm();
        } 
        else if(response.code===400) {
          // Password update failed
          alert(response.message);
          console.error(response.error);
        }
        
        else {
          // Password update failed
          alert('Failed to update password.');
          console.error(response.error);
        }
      })
      .catch((error) => {
        // Error occurred during the request
        alert('Failed to update password.');
        console.error(error);
      });
  };

  return (
    <div className={classes.root}>
      <DrawerMenu />
      <Container maxWidth="xxl" className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="xxl" className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <form onSubmit={formik.handleSubmit}>
                <Card>
                  <CardHeader subheader="Update password" title="Password" />
                  <Divider />
                  <CardContent>
                    <TextField
                      fullWidth
                      label="Old Password"
                      margin="normal"
                      name="oldPassword"
                      type="password"
                      variant="outlined"
                      error={formik.touched.oldPassword && formik.errors.oldPassword}
                      helperText={formik.touched.oldPassword && formik.errors.oldPassword}
                      value={formik.values.oldPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    <TextField
                      fullWidth
                      label="New Password"
                      margin="normal"
                      name="newPassword"
                      type="password"
                      variant="outlined"
                      error={formik.touched.newPassword && formik.errors.newPassword}
                      helperText={formik.touched.newPassword && formik.errors.newPassword}
                      value={formik.values.newPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    <TextField
                      fullWidth
                      label="Confirm Password"
                      margin="normal"
                      name="confirm"
                      type="password"
                      variant="outlined"
                      error={formik.touched.confirm && formik.errors.confirm}
                      helperText={formik.touched.confirm && formik.errors.confirm}
                      value={formik.values.confirm}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </CardContent>
                  <Divider />
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                    <Button color="primary" variant="contained" type="submit">
                      Update
                    </Button>
                  </Box>
                </Card>
              </form>
            </Grid>
            <Grid item xs={12} md={6} lg={6} container className={classes.paper}>
              <Paper className={classes.paper}>
                {Array(data) !== null &&
                  Array(data).map((types) => (
                    <Grid item container direction="column" align="start" spacing={1} key={types.id}>
                      <Typography gutterBottom variant="h6">
                        {types.firstName + types.lastName}
                      </Typography>

                      <Typography variant="body1" gutterBottom color="textSecondary">
                        Phone Number: {types.phoneNumber}
                      </Typography>
                      <Typography variant="body1" gutterBottom color="textSecondary">
                        Date Of Birth: {new Date(types.dateOfBirth).toLocaleDateString('en-GB')}
                      </Typography>

                      <Typography variant="body2" color="textSecondary">
                        Role: {types.role}
                      </Typography>

                      <Typography variant="body2" color="textSecondary">
                        Email: {types.email}
                      </Typography>
                    </Grid>
                  ))}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}
