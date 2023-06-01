import {
  ApiConstants as constant,
  ApiEndpoints as endpoint,
} from "./api/api.constant";
import { post,patch } from "./api/api.service";

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



  export const updatePassword = async (user, id) => {
    return await patch({
      url: endpoint.user.patch + id,
      body: user,
      //method: constant.method.patch,
    });
  };


