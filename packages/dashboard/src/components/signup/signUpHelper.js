import { updateUser } from "../../../../container/src/services/user.service";

export const IsValidate = ({
  firstname,
  lastname,
  username,
  phoneNo,
  dateOfBirth,
  role,
  password,
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
  if (role === null || role === "") {
    isproceed = false;
    errormessage += " role";
  }
  if (password === null || password === "") {
    isproceed = false;
    errormessage += " Password";
  }
  if (!isproceed) {
    toast.warning(errormessage);
  } else {
    return isproceed;
  }
};

export const handlesubmit = async (
  values,
  setMessage,
  setMessageTitle,
  selectedUserId,
  refreshGrid
) => {
  if (!IsValidate(values)) {
    return;
  }
  try {
    updateUser(selectedUserId, {
      firstName: values.firstName,
      lastName: values.lastName,
      role: values.role,
      phoneNumber: values.phoneNo,
      dateOfBirth: values.dateOfBirth,
      password: values.password,
    })
      .then((res) => {
        if (res && res.status === 200) {
          refreshGrid();
          setMessageTitle("success");
          setMessage("Record updated successfully");
        } else {
          setMessageTitle("error");
          setMessage("Failed to update record");
        }
      })
      .catch((err) => {
        setMessageTitle("error");
        setMessage("Failed to update record");
      });
  } catch (error) {}
};
