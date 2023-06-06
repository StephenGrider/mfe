import {
  ApiConstants as constant,
  ApiEndpoints as endpoint,
} from "./api.constant";
import { callApi, post } from "./api.service";


///added from container

export const signin = async (user) => {
  return await post({
    url: endpoint.user.authenticate,
    body: JSON.stringify(user),
  });
};

export const signup = async (user) => {
  return await post({
    url: endpoint.user.create,
    body: JSON.stringify(user),
  });
};


// export const authenticateUser = async (user) => {
//   return await callApi({
//     url: endpoint.user.authenticate,
//     method: constant.method.post,
//   });
// };

// export const refreshToken = async (tokenResponse) => {
//   return await callApi({
//     url: endpoint.user.refresh,
//     method: constant.method.post,
//   });
// };

// export const getUsers = async () => {
//   return await callApi({
//     url: endpoint.user.getAll,
//   });
// };

// export const getUser = async (id) => {
//   return await callApi({
//     url: endpoint.user.getById + id,
//   });
// };

// export const createUser = async (user) => {
//   return await callApi({
//     url: endpoint.user.create,
//     body: JSON.stringify(user),
//     method: constant.method.post,
//   });
// };

// export const updateUser = async (user, id) => {
//   return await callApi({
//     url: endpoint.user.update + id,
//     body: JSON.stringify(user),
//     method: constant.method.put,
//   });
// };

// export const deleteUser = async (id) => {
//   return await callApi({
//     url: endpoint.user.delete + id,
//     method: constant.method.delete,
//   });
// };
