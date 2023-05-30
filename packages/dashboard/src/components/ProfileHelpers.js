import { useFormik } from "formik";
import * as Yup from "yup";

export  const handlePasswordUpdate = (values,data,history, resetForm) => {


    const updateUrl = `https://localhost:7007/api/Users/${data.id}`; // Update the URL with the correct endpoint
    

    // Create a request body with the old and new password
    const requestBody = {
      
      password: values.oldPassword,
      newPassword:values.newPassword
    };

    // Make a PATCH request to the API endpoint to update the password
    fetch(updateUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((response) => {
        // Check the response for success or error
        if (response.code===200) {
          // Password update successful
          alert(response.message);
          //usenavigate.push("/auth/signin");
          handleLogout(history)
          // Clear the input fields
        //   formik.resetForm();
        } 
        else if(response.code===400) {
          // Password update failed
          alert(response.message);
          console.error(response.error);
          resetForm();
        }
        
        else {
          // Password update failed
          alert('Failed to update password.');
          console.error(response.error);
          resetForm();
        }
      })
      .catch((error) => {
        // Error occurred during the request
        alert('Failed to update password.');
        console.error(error);
        resetForm();
      });
  };

const ProfileHelpers = (props) => {
   
  
    const passwordRegExp =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}/;

  
const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirm: '',
    },
    validationSchema: Yup.object().shape({
      oldPassword: Yup.string().required('Old Password is required.')
      .matches(passwordRegExp, 'Old Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.'),
      
      newPassword: Yup.string()
        .required('New Password is required.')
        .matches(passwordRegExp, 'New Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.')
        .notOneOf([Yup.ref('oldPassword')], 'New Password must be different from Old Password.'),
      
        confirm: Yup.string()
        .required('Confirm Password is required.')
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match.')
        .matches(passwordRegExp, 'Confirm Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.'),
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
