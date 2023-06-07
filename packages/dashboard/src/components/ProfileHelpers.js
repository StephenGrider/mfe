import { useFormik } from "formik";
import * as Yup from "yup";
import { updatePassword } from "../../../container/src/services/user.service";

export const handlePasswordUpdate = (
  values,
  data,
  history,
  resetForm,
  setShowAlert,
  setAlertType,
  setAlert
) => {
  const requestBody = {
    password: values.oldPassword,
    newPassword: values.newPassword,
  };
  fetch("https://localhost:7007/api/Users/"+data.id, {
    method: "PATCH",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(requestBody)
})
.then(res=>res.json())
    .then((response) => {
      if (response.code === 200) {
        setShowAlert(true);
        setAlertType("success");
        setAlert(response.message);
        resetForm();
      } else if (response.code === 400) {
        setShowAlert(true);
        setAlertType("error");
        setAlert(response.message);
        resetForm();
      } else {
        setShowAlert(true);
        setAlertType("error");
        setAlert(response.message);
        resetForm();
      }
    })
    .catch((error) => {
      setShowAlert(true);
      setAlertType("error");
      setAlert("Update password failed");
      resetForm();
    });
};

const ProfileHelpers = (props) => {
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}/;

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirm: "",
    },
    validationSchema: Yup.object().shape({
      oldPassword: Yup.string()
        .required("Old Password is required.")
        .matches(
          passwordRegExp,
          "Old Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character."
        ),

      newPassword: Yup.string()
        .required("New Password is required.")
        .matches(
          passwordRegExp,
          "New Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character."
        )
        .notOneOf(
          [Yup.ref("oldPassword")],
          "New Password must be different from Old Password."
        ),

      confirm: Yup.string()
        .required("Confirm Password is required.")
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match.")
        .matches(
          passwordRegExp,
          "Confirm Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character."
        ),
    }),
    onSubmit: async (values) => {
      props.submit(values);
    },
  });

  return formik;
};
export default ProfileHelpers;

export const handleLogout = (history) => {
  sessionStorage.removeItem("jwttoken");
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("statusCode");
  sessionStorage.removeItem("fullnameUser");
  history.push("/auth/signin");
};