import { useFormik } from "formik";
import * as Yup from "yup";

const loginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required")
        .max(255)
        .email("Must be a valid email"),
      password: Yup.string()
        .required("Password is required")
        .max(255)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}/,
          "Minimum eight characters, at least one upper case, one lower case, one number and one special character."
        ),
    }),
    onSubmit: async (values) => {
      props.submit(values);
    },
  });
  return formik;
};

export default loginForm;
