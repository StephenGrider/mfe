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
    refresh: "/refresh",
  },
  product: {
    getAll: "api/Products",
    getById: "api/Products/",
    create: "api/Products",
    update: "api/Products/",
    delete: "api/Products/",
  },
};
