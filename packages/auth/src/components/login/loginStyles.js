import { makeStyles } from "@material-ui/core";

const loginStyles = makeStyles((theme) => ({
  rootss:{
display:"none"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    display: "flex",
    // position: "fixed",
    width: "100%",
    height: "100vh",
    
    //alignItems: "center",
    //height: "100vh",
    "@media (max-width: 992px)": {
      display: "block",
    },
  },
  layoutContainer: {
    maxWidth: "50%",
    marginRight: 0,
   // height: "100vh",
    color: "white",
    background:
      "radial-gradient(50% 50% at 50% 50%, rgb(18, 38, 71) 0%, rgb(9, 14, 35) 100%)",
    "@media (max-width: 992px)": {
      maxWidth: "100%",
    },
  },
  layout: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
}));

export default loginStyles;
