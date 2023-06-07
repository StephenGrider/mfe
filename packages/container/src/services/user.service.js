import {
  ApiConstants as constant,
  ApiEndpoints as endpoint,
} from "./api.constant";
import { get, patch, post, put } from "./api.service";

export const signin = async (user) => {
  return await post({
    url: endpoint.user.authenticate,
    body: user,
  });
};

export const signup = async (user) => {
  return await post({
    url: endpoint.user.create,
    body: JSON.stringify(user),
  });
};

export const updateUser = async (id, user) => {
  return await put({
    url: endpoint.user.update + id,
    body: JSON.stringify(user),
  });
};

export const getAllUsers = async () => {
  return await get({
    url: endpoint.user.getAll,
  });
};

export const updatePassword = async (user, id) => {
  return await patch({
    url: endpoint.user.update + id,
    body: JSON.stringify(user),
  });
};
