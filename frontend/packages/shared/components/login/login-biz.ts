// import { login as sLogin } from "./user-service";

import { useState } from "react";
import { useLocalStorage } from "@mantine/hooks";

export default function useLoginBiz() {
  const [loginWaiting, setLoginWaiting] = useState(false);
  const [userInfo, setUserInfo] = useLocalStorage({
    key: "user-info",
    defaultValue: {},
  });

  const login = async (values: { email: string; password: string }) => {
    // const res = await sLogin(values);
    // const { data } = res;
    console.log(values);
    setLoginWaiting(true);
    setUserInfo(values);
  };

  return {
    login,
    loginWaiting,
  };
}
