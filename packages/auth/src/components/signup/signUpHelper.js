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
  e,
  { firstname, lastname, username, password, phoneNo, dateOfBirth },
  usenavigate
) => {
  e.preventDefault();
  if (
    IsValidate({
      firstname,
      lastname,
      username,
      phoneNo,
      dateOfBirth,
      password,
      confirmpassword,
    })
  ) {
    let user = {
      id: 0,
      firstName: firstname,
      lastName: lastname,
      role: "admin",
      email: username,
      password: password,
      phoneNumber: Number(phoneNo),
      //dateOfBirth: dateOfBirth,
      dateOfBirth: "2023-05-23T10:26:17.545Z",
    };

    createUser(user)
      .then((res) => {
        console.log(res);
        if (res && res.code === 200) {
          alert("Registered successfully.");
          // toast.success("Registered successfully.");
          usenavigate.push("/auth/signin");
        } else if (res && res.code === 406) {
          alert("Failed :" + res.message);
          // toast.success("Registered successfully.");
        } else {
          alert("Failed :" + err.title);
          // toast.error("Failed :" + err.title);
        }
        //navigate('/login');
      })
      .catch((err) => {
        if (err && err.code === 406) {
          alert("Failed :" + err.message);
          // toast.success("Registered successfully.");
        } else {
          alert("Failed :" + err.title);
        }
        // toast.error("Failed :" + err.message);
      });
  }
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
