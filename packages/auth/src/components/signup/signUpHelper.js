import { toast } from "react-toastify";
import { createUser } from "../../../services/user.service";

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
  setMessage,
  setMessageTitle
) => {
  let user = {
    id: 0,
    firstName: values.firstName,
    lastName: values.lastName,
    role: "A",
    email: values.userName,
    password: values.password,
    phoneNumber: values.phoneNo,
    dateOfBirth: values.dateOfBirth,
  };

  createUser(user)
    .then((res) => {
      console.log(res);
      if (res && res.code === 200) {
        setMessageTitle("success");
        setMessage(res.message);
        usenavigate.push("/auth/signin");
      } else if (res && res.code === 406) {
        setMessageTitle("error");
        setMessage(res.message);
      } else {
        setMessageTitle("error");
        setMessage(res.message);
      }
    })
    .catch((err) => {
      if (err && err.code === 406) {
        setMessageTitle("error");
        setMessage(err.message);
      } else {
        setMessageTitle("error");
        setMessage(err.title || err.message);
      }
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
