import { useFormik } from "formik";
import * as Yup from "yup";

const loginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      props.submit(values, helpers);
    },
  });
  return formik;
};

export default loginForm;
