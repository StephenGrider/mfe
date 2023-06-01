import axios from "axios";
import { ApiConstants as constant } from "./api.constant";

// export const callApi = async (apiObject) => {
//   try {
//     const res = await fetch(constant.baseUrl + apiObject.url, {
//       method: apiObject.method || constant.method.get, // default method = get
//       headers: apiObject.headers || constant.defaultHeader, // default headers
//       body: apiObject.body,
//     });
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error(constant.errorMsg, error);
//   }
// };

// export const callApiWOData = async (apiObject) => {
//   try {
//     const res = await fetch(constant.baseUrl + apiObject.url, {
//       method: apiObject.method || constant.method.get, // default method = get
//       headers: apiObject.headers || constant.defaultHeader, // default headers
//       body: apiObject.body,
//     });
//     return res;
//   } catch (error) {
//     console.error(constant.errorMsg, error);
//   }
// };

export const client = axios.create({
  baseURL: constant.baseUrl,
  timeout: 1000,
  headers: {
    "Content-type": "application/json",
  },
});

export const get = ({ url, params = null }) => {
  return client.get(url, params && { params: params });
};

export const post = ({ url, body }) => {
  return client.post(url, body);
};

export const put = ({ url, body, params = null }) => {
  return client.post(url, body, params && { params: params });
};

export const delete_ = ({ url, params = null }) => {
  return client.delete(url, params && { params: params });
};

export const patch = ({ url, params = null }) => {
  return client.patch(url, body, params && { params: params });
};
