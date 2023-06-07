import {
  ApiConstants as constant,
  ApiEndpoints as endpoint,
} from "./api.constant";
import { get, post } from "./api.service";

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

export const getAllUsers = async () => {
  return await get({
    url: endpoint.user.getAll,
  });
};
