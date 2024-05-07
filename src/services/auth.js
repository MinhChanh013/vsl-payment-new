import { message } from "antd";
import { poster } from "./BaseService";
import { Content } from "antd/es/layout/layout";

const endPointUser = "/sa/user";

const cpathUser = (action) => {
  return `${endPointUser}/${action}`;
};

export const Login = async (value) => {
  let result;
  try {
    const res = await poster(cpathUser("login"), {
      username: value.username,
      password: value.password,
    });
    console.log(res.user_info);
    result = res.ok;
    if (result) {
      const jsonString = JSON.stringify(res.user_info);
      message.success(res.statusText);
      localStorage.setItem("token", res.access_token);
      localStorage.setItem("refesh_token", res.refresh_token);
      localStorage.setItem("user", jsonString);
    }
    return result;
  } catch (error) {
    result = error.response.data.ok;
    message.error(error.response.data.message);
    console.log(error);
    return result;
  }
};
