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
    getAll: "/api/Users",
    getById: "/api/Users/",
    create: "/api/Users",
    update: "/api/Users/",
    delete: "/api/Users/",
    authenticate: "/Authenticate",
    refresh: "/refresh",
  },

};
