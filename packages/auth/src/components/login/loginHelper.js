import { toast } from "react-toastify";
import { authenticateUser } from "../../../services/user.service";
//import { authenticateUser } from "../../../services/user.service";

export const validateText = (value) => {
  return value && value.length > 0 && value.length < 250;
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
export const handlesubmit = async (
  values,
  usenavigate,
  setMessage,
  setMessageTitle
) => {
  let user = {   
    email: values.username,
    password: values.password,
  };
 
  authenticateUser(user)
    .then((res) => {  
      if (res && res.code === 200) {
        setMessageTitle("success");
        setMessage(res.message);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("jwttoken", res.jwtToken);
        alert(res.message)
        usenavigate.push("/dashboard");
      } else if (res && res.code === 406) {
        setMessageTitle("error");
        setMessage(res.message);
        alert(res.message)
      } else {
        setMessageTitle("error");       
        setMessage(res.message);  
        alert(res.message)     
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
// export const ProceedLoginusingAPI = (e, username, password) => {
//   e.preventDefault();
//   if (validate(username, password)) {
//     ///implentation
//     // console.log('proceed');
//     let inputobj = {
//       username: username,
//       password: password,
//       role: "Admin",
//     };
//     fetch("https://localhost:7007/api/Users/Authenticate", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(inputobj),
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((resp) => {
//         console.log("resp=======", resp);
//         if (Object.keys(resp).length === 0) {
//           toast.error("Login failed, invalid credentials");
//         } else {
//           toast.success("Success");
//           sessionStorage.setItem("username", username);
//           sessionStorage.setItem("jwttoken", resp.jwtToken);
//           if (toast.success("Success")) {
//             usenavigate.push("/dashboard");
//           } else {
//             usenavigate.push("/profile");
//           }
//         }
//       })
//       .catch((err) => {
//         toast.error("Login Failed due to :" + err.message);
//       });
//   }
// };
