import { ApiConstants as constant } from "./api.constant";

export const callApi = async (apiObject) => {
  try {
    const res = await fetch(constant.baseUrl + apiObject.url, {
      method: apiObject.method || constant.method.get, // default method = get
      headers: apiObject.headers || constant.defaultHeader, // default headers
      body: apiObject.body,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(constant.errorMsg, error);
  }
};
