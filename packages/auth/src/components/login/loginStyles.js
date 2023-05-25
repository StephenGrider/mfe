import { makeStyles } from "@material-ui/core";

const loginStyles = makeStyles((theme) => ({
  root:{
    width:"50% !important",
    "@media (min-width: 992px)": {
      width: "auto !important",
      },
      },
  rootss:{
display:"none"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth:"400px",
    justifyContent: "center",
    margin: "60px auto"
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
    "@media (min-width: 992px)": {
    height: "100vh",
    },
    
    //alignItems: "center",
    //height: "100vh",
    "@media (max-width: 992px)": {
      display: "block",
      
      
    },
  },
  signinForm:{
display:"flex",
position:"relative",
"@media (min-width: 992px)": {
height:" 100vh",
},
alignContent: "flex-end",
justifyContent: "flex-end",
alignItems: "center"
  },
  layoutContainers:{
    "@media (min-width: 992px)": {
      width: "50% !important",
      margin: "0px !important",
      maxWidth: "50% !important",
    },
  },
  layoutContainer: {
    marginRight: "0 !important",
    "@media (min-width: 992px)": {
      width: "50% !important",
      margin: "0px !important",
      maxWidth: "50% !important",
    },
   // height: "100vh",
    color: "white",
    background:
      "radial-gradient(50% 50% at 50% 50%, rgb(18, 38, 71) 0%, rgb(9, 14, 35) 100%)",
    "@media (max-width: 992px)": {
      maxWidth: "100% !important",
    },
  },
  layout: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
}));

export default loginStyles;
