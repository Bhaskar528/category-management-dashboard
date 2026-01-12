// import API from "./api";

// export const loginUser = async (data) => {
//   const res = await API.post("/api/auth/login", data);
//   localStorage.setItem("token", res.data.token);
// };

// export const signupUser = (data) =>
//   API.post("/api/auth/register", data);

import API from "./api";

export const loginUser = (data) => {
  return API.post("/api/auth/login", data);
};

export const registerUser = (data) => {
  return API.post("/api/auth/register", data);
};
