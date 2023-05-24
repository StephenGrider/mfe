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
  },
};

export const ApiEndpoints = {
  user: {
    getAll: "api/Users",
    getById: "api/Users/",
    create: "api/Users",
    update: "api/Users/",
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
