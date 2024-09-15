import axios from "axios";
import ApiService from "./apiService";
const instance = axios.create({

  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(
  (config) => {
    const token = ApiService.getLocalAccessToken();
    if (token) {
      config.headers["authorizationToken"] = token;
    }
    return config;
  },
  (error) => {
    console.log(error)
    // return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    return Promise.reject(err);
    
  }
);

export default instance;
