import { toast } from "react-toastify";
import { signin } from "../../../../container/src/services/user.service.js";
export const validateText = (value) => {
  return value && value.length > 0 && value.length < 250;
};

export const validatePhone = (value) => {
  return value && value.length === 10;
};

export const validateDate = (value) => {
  if (typeof value === Date) {
    const systemDate = new Date();
    return (
      value && value.setHours(0, 0, 0, 0) < systemDate.setHours(0, 0, 0, 0)
    );
  }
};

export const validatePassword = (value) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}/;
  return (
    value &&
    value.length > 0 &&
    String(value).toLowerCase().match(passwordRegex)
  );
};

export const validateEmail = (value) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    value &&
    value.length > 0 &&
    value.length < 250 &&
    String(value).toLowerCase().match(emailRegex)
  );
};

export const validate = (username, password) => {
  let result = true;
  if (username === "" || username === null) {
    result = false;
    toast.warning("Please Enter Username");
  }
  if (password === "" || password === null) {
    result = false;
    toast.warning("Please Enter Password");
  }
  return result;
};

export const proceedLoginusingAPI = (
  values,
  usenavigate,
  setAlert,
  setAlertType,
  setShowAlert
) => {
  signin({
    email: values.username,
    password: values.password,
  })
    .then((res) => {
      if (res.status === 200) {
        setAlertType("success");
        setShowAlert(true);
        setAlert(res.data.message || "Logged in Successfully.");
        sessionStorage.setItem("statusCode", res.status);
        sessionStorage.setItem("username", values.username);
        sessionStorage.setItem("jwttoken", res.data.jwtToken);
      } else {
        setAlertType("error");
        setShowAlert(true);
        setAlert(res.data.message || "Logged in Failed.");
      }
    })
    .catch((err) => {
      setAlertType("error");
      setShowAlert(true);
      setAlert(err.response.data.message || "Logged in Failed.");
    });
};