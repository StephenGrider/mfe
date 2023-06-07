export const ApiConstants = {
  baseUrl: process.env.REACT_APP_API_URL,
  defaultHeader: {
    "Content-Type": "application/json",
  },
  errorMsg: "Something went wrong.",
  method: {
    get: "GET",
    post: "POST",
    put: "PUT",
    delete: "DELETE",
  },
};

export const ApiEndpoints = {
  user: {
    getAll: "/Users",
    getById: "/Users/",
    create: "/Users",
    update: "/Users/",
    delete: "/Users/",
    authenticate: "/Authenticate",
    refresh: "/Users/refresh",
  },
  product: {
    getAll: "api/Products",
    getById: "api/Products/",
    create: "api/Products",
    update: "api/Products/",
    delete: "api/Products/",
  },
  subMenu: {
    getAll: "api/subMenus",
    getById: "api/subMenus/",
    create: "api/subMenus",
    update: "api/subMenus/",
    delete: "api/subMenus/",
  },
};

export const ApiStatusCodesMessage = {
  200: "Successfully Completed.",
  400: "Failed due to Bad Request",
  401: "Unauthorized",
  404: "Not Found",
  406: "Not Acceptable",
  500: "Internal Server Error",
};

// export const ApiStatusCodes = {
//   ok: 200,
//   badRequest: 400,
//   unauthorized: 401,
//   notFound: 404,
//   notAcceptable: 406,
//   internalServerError: 500,
// };
