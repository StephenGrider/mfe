import {
  ApiConstants as constant,
  ApiEndpoints as endpoint,
} from "./api.constant";
import { callApi } from "./user.service";

export const getProducts = async () => {
  return await callApi({
    url: endpoint.product.getAll,
  });
};

export const getProduct = async (id) => {
  return await callApi({
    url: endpoint.product.getById + id,
  });
};

export const createProduct = async (product) => {
  return await callApi({
    url: endpoint.product.create,
    body: JSON.stringify(product),
    method: constant.method.post,
  });
};

export const updateProduct = async (product, id) => {
  return await callApi({
    url: endpoint.product.update + id,
    body: JSON.stringify(product),
    method: constant.method.put,
  });
};

export const deleteProduct = async (id) => {
  return await callApi({
    url: endpoint.product.delete + id,
    method: constant.method.delete,
  });
};
