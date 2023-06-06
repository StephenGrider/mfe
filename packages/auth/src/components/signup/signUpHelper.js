import { toast } from "react-toastify";
import { signup } from "../../../services/user.service";

export const capitalizeFirstLetter = (value) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const isNumber = (value) =>
  Number(value) > -1 && value.indexOf(".") === -1 && value.indexOf("0") !== 0;

export const yesterdaysDate = () => {
  const date = new Date();
  const yesterday = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - 1,
    0,
    0,
    0,
    0
  );
  const month = yesterday.getMonth() + 1;
  const monthStr = month > 9 ? month : "0" + month;
  const yesterdayStr =
    yesterday.getFullYear() + "-" + monthStr + "-" + yesterday.getDate();
  return yesterdayStr;
};

export const IsValidate = ({
  firstname,
  lastname,
  username,
  phoneNo,
  dateOfBirth,
  password,
  confirmpassword,
}) => {
  let isproceed = true;
  let errormessage = "Please enter the value in ";

  if (firstname === null || firstname === "") {
    isproceed = false;
    errormessage += " Firstname";
  }
  if (lastname === null || lastname === "") {
    isproceed = false;
    errormessage += " Lastname";
  }
  if (username === null || username === "") {
    isproceed = false;
    errormessage += " Invalid Username";
  }
  if (phoneNo === null || phoneNo === "") {
    isproceed = false;
    errormessage += "Phone No";
  }
  if (!dateOfBirth || dateOfBirth.value === null || dateOfBirth.value === "") {
    isproceed = false;
    errormessage += "Date Of Birth";
  }
  if (password === null || password === "") {
    isproceed = false;
    errormessage += " Password";
  }
  if (
    !confirmpassword ||
    confirmpassword.value === null ||
    confirmpassword.value === ""
  ) {
    isproceed = false;
    errormessage += " Confirm Password";
  }
  if (confirmpassword.value !== password) {
    isproceed = false;
    errormessage += " Password & Confirm Password does not match.";
  }

  if (!isproceed) {
    toast.warning(errormessage);
  } else {
    return isproceed;
  }
};

export const handlesubmit = async (
  values,
  usenavigate,
  setAlert,
  setAlertType,
  setShowAlert
) => {
  signup({
    id: 0,
    firstName: values.firstName,
    lastName: values.lastName,
    role: values.role,
    email: values.userName,
    password: values.password,
    phoneNumber: values.phoneNo,
    dateOfBirth: values.dateOfBirth,
  })
    .then((res) => {
      if (res && res.status === 200) {
        setAlertType("success");
        setShowAlert(true);
        setAlert(res.data.message || "Signed up successfully.");
      } else {
        setAlertType("error");
        setShowAlert(true);
        setAlert(res.data.message || "Signed up failed.");
        usenavigate.push("/auth/signup");
      }
    })
    .catch((err) => {
      setAlertType("error");
      setShowAlert(true);
      setAlert(err.response.data.message || "Signed up failed.");
      usenavigate.push("/auth/signup");
    });
};

// const ProceedLoginusingAPI = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             ///implentation
//             // console.log('proceed');
//             let inputobj={
//               "username": username,
//               "password": password,
//               "role":"Admin"
//           };
//             fetch("https://localhost:7007/api/Users",{
//                 method:'POST',
//                 headers:{'content-type':'application/json'},
//                 body:JSON.stringify(inputobj)
//             }).then((res) => {
//                 return res.json();
//             }).then((resp) => {
//               if (Object.keys(resp).length === 0) {
//                 toast.error('Login failed, invalid credentials');
//             }else{
//                  toast.success('Success');
//                  sessionStorage.setItem('username',username);
//                  sessionStorage.setItem('jwttoken',resp.jwtToken);
// if(toast.success('Success')){
//   usenavigate.push('/dashboard')
// }else{
//   usenavigate.push('/auth/signin')
// }
//                  }
//               });
//             };
//           };
