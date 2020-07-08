import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    //check if there is a token in local storage or not
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.comon["x-auth-token"];
  }
};

export default setAuthToken;
