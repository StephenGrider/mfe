// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import { Alert, AlertTitle } from "@material-ui/lab";
// import { handlesubmit } from "./signUpHelper";
// import Layout from "../layout/layout";
// import signUpStyles from "./signUpStyles";
// import signupForm from "./signupForm";
// import {  Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
// import Register from "./Register";


// export default function SignUp() {
//   const classes = signUpStyles();
//   const usenavigate = useHistory();
//   const [messageTitle, setMessageTitle] = useState("");
//   const [message, setMessage] = useState("");
//   const isNumber = (value) =>
//     Number(value) > -1 && value.indexOf(".") === -1 && value.indexOf("0") !== 0;
//   const capitalizeFirstLetter = (value) =>
//     value.charAt(0).toUpperCase() + value.slice(1);
//   const formik = signupForm({
//     submit: async (values) => {
//       formik.isValid &&
//         handlesubmit(values, usenavigate, setMessage, setMessageTitle);
//     },
//   });
  
//   const validateDateOfBirth = (date) => {
//     const currentDate = new Date();
//     const selectedDate = new Date(date);
//     const minDate = new Date();
//     minDate.setFullYear(currentDate.getFullYear() - 18);
//     if (selectedDate >= currentDate) {
//       return false;
//     }
//     // Check if the selected date is less than the minimum age date (18 years)
//     if (selectedDate > minDate) {
//       return false;
//     }
//     return true;
//   };

//   const handleDateChange = (e) => {
//     const { value } = e.target;
//     formik.handleChange(e);
//     const isValid = validateDateOfBirth(value);
//     if (!isValid) {
//       formik.setFieldError(
//         "dateOfBirth",
//         "Invalid date of birth. You must be at least 18 years old."
//       );
//     } else {
//       formik.setFieldError("dateOfBirth", "");
//     }
//   };
  
//   return (
//     <div className={classes.container}>
//       <Register />
//       <Container
//         className={classes.layoutContainer}
//         style={{
//           alignItems: "stretch",
//           maxWidth: "50% !important",
//           margin: "0px !important",
//         }}
//       >
//         <div className={classes.layout}>
//           <Layout />
//         </div>
//       </Container>
//     </div>
//   );
// }