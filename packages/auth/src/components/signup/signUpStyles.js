import { makeStyles } from "@material-ui/core/styles";

const signUpStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  rootss: {
    display: "none",
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
    width: "100%",
    marginTop: theme.spacing(3),
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
    maxWidth: "50% !important",
    marginRight: "0 !important",
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

export default signUpStyles;
