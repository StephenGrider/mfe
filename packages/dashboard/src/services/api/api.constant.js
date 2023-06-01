export const ApiConstants = {
  baseUrl: "https://localhost:7007/",
  defaultHeader: {
    "Content-Type": "application/json",
  },
  errorMsg: "Something went wrong.",
  method: {
    get: "GET",
    post: "POST",
    put: "PUT",
    delete: "DELETE",
    patch :"PATCH",
  },
};

export const ApiEndpoints = {
  user: {
    getAll: "api/Users",
    getById: "api/Users/",
    create: "api/Users",
    update: "api/Users/",
    patch: "api/Users/",
    delete: "api/Users/",
    authenticate: "api/Users/Authenticate",
    refresh: "api/Users/refresh",
  },
  product: {
    getAll: "api/Products",
    getById: "api/Products/",
    create: "api/Products",
    update: "api/Products/",
    delete: "api/Products/",
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
