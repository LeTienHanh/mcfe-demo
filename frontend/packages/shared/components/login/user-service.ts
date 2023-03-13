import { axios } from "../../apis";

export const login = (params = {}) => {
  return axios.post("/login", params);
};

export const getUserInfo = (params = {}) => {
  return axios.get("/userinfo", {
    params: {
      ...params,
    },
  });
};
