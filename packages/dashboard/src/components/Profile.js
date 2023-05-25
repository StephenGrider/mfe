import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import ChartTwo from './ChartTwo';
import Orders from './Orders';
import DrawerMenu from './DrawerMenu';
import {useStyles} from "./Styles"
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
} from "@material-ui/core";



export default function Profile(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const url = "https://localhost:7007/api/Users/"+sessionStorage.getItem("username");
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url,{
      headers: { "Authorization": 'Bearer '+sessionStorage.getItem("jwttoken")
    }
    })
      .then((res) => res.json())
      .then((d) => setData(d))
  }
  useEffect(() => {
    fetchInfo();
  }, []);
  console.log("data=====", Array(data))
  sessionStorage.setItem("fullnameUser", data.firstName + " " + data.lastName);
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  return (
    <div className={classes.root}>
     <DrawerMenu />
      <Container maxWidth="xxl" className={classes.content}>
        <div className={classes.appBarSpacer} />
        {/*<Paper className={classes.paper}>
      <Grid container xs={12} md={6} lg={6}>
         <Grid item xs={12} container justify="flex-start">
          <Typography variant="h5">Account Info</Typography>
        </Grid> 
        
      </Grid>
    </Paper>*/}
        <Container maxWidth="xxl" className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <form {...props} >
                <Card >
                  <CardHeader
                    subheader="Update password"
                    title="Password"
                  />
                  <Divider />
                  <CardContent>
                    <TextField
                      fullWidth
                      label="Password"
                      margin="normal"
                      name="password"
                      onChange={handleChange}
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Confirm password"
                      margin="normal"
                      name="confirm"
                      onChange={handleChange}
                      type="password"
                      value={values.confirm}
                      variant="outlined"
                    />
                  </CardContent>
                  <Divider />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      p: 2
                    }}
                  >
                    <Button
                      color="primary"
                      variant="contained"
                    >
                      Update
                    </Button>
                  </Box>
                </Card>
              </form>
            </Grid>
            <Grid item xs={12} md={6} lg={6} container className={classes.paper}>
            <Paper className={classes.paper} style={{minHeight:"350px"}}>
          {Array(data) !== null && Array(data).map((types) => (<Grid item container direction="column" align="start" spacing={1} key={types.id}>
            <Typography gutterBottom variant="h6">
              {types.firstName + types.lastName}
            </Typography>
            
            <Typography variant="body1" gutterBottom color="textSecondary">
              Phone Number: {types.phoneNumber}
            </Typography>
            <Typography variant="body1" gutterBottom color="textSecondary">
              Date Of Birth: {types.dateOfBirth}
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
            {/* <Grid item xs={12} md={5} lg={3}>
              <Paper className={fixedHeightPaper}>
                <ChartTwo />
              </Paper>
            </Grid>*/}
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