import http from "./config";

const auth = {
  sign_up: (data) => http.post("/auth/register", data),
  verify: (data) => http.post("/auth/verify", data),
  sign_in: (data) => http.post("/auth/login", data),
  forgot_password: (data) => http.post("/auth/forgot-password", data),
  verify_forgot_password: (data) =>
    http.post("/auth/verify-forgot-password", data),
};

export default auth;
