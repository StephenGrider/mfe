import { ApiEndpoints as endpoint } from "./api.constant";
import { delete_, get, post, put } from "./api.service";

export const getAllSubMenus = async () => {
  return await get({
    url: endpoint.subMenu.getAll,
  });
};

export const getSubMenu = async (id) => {
  return await get({
    url: endpoint.subMenu.getById + id,
  });
};

export const createSubMenu = async (user) => {
  return await post({
    url: endpoint.subMenu.create,
    body: JSON.stringify(user),
  });
};

export const updateSubMenu = async (id, user) => {
  return await put({
    url: endpoint.subMenu.update + id,
    body: JSON.stringify(user),
  });
};

export const deleteSubMenu = async (id) => {
  return await delete_({
    url: endpoint.subMenu.delete + id,
  });
};
