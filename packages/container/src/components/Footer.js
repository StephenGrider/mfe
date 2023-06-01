import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://kyanite360.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  rootss: {
    display: 'flex',
    flexDirection: 'column',
    position:"relative",
    clear:"both"
    
  },
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
  },
  footer: {
    padding: theme.spacing(1, 1),
    marginTop: 'auto',
    textAlign:"center",
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[100],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.rootss}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          {/* <Typography variant="body1">My sticky footer can be found here.</Typography> */}
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}