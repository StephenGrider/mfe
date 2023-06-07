import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import ChartTwo from './ChartTwo';
import Orders from './Orders';
import DrawerMenu from './DrawerMenu';
import { useStyles } from './Styles';
import ProfileHelpers, { handlePasswordUpdate } from './ProfileHelpers';
import { useHistory } from 'react-router-dom';


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
import UserGrid from './UserGrid';

export default function Profile(props) {
  const classes = useStyles();
  const history = useHistory();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const url = "https://localhost:7007/api/Users/"+sessionStorage.getItem("username"); // Update the URL with the correct endpoint
  // const url = 'https://localhost:7007/api/Users/5:int';
  const [data, setData] = useState([]);
 

  const formik = ProfileHelpers({
    submit: async (values) => {
      formik.isValid && handlePasswordUpdate(values, data, history, formik.resetForm);
    },
    // data, // Pass data as a prop to ProfileHelpers
  });
  
  
  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = () => {
    return fetch(url,{
        headers: { "Authorization": 'Bearer '+sessionStorage.getItem("jwttoken")
      }
    })
      .then((res) => res.json())
      .then(
        (d) => 
        {
      
          setData(d)
        }
        );
  };

  console.log('data=====', Array(data));
  sessionStorage.setItem('fullnameUser', data.firstName + ' ' + data.lastName);




  return (
    <div className={classes.root}>
      <DrawerMenu />
      <Container style={{width:"100%"}} className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container style={{width:"100%"}} className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <form onSubmit={formik.handleSubmit}
            className={classes.form}
            noValidate>
                <Card>
                  <CardHeader subheader="Update password" title="Password" />
                  <Divider />
                  <CardContent>
                    <TextField
                      fullWidth
                      required
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
                      required
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
                      required
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
                    <Button color="primary" variant="contained" type="submit" >
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
              <UserGrid />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}
