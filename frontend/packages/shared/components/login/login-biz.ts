// import { login as sLogin } from "./user-service";

import { useState } from "react";
// import { useLocalStorage } from "@mantine/hooks";
import { signIn } from "next-auth/react";

export default function useLoginBiz() {
  const [loginWaiting, setLoginWaiting] = useState(false);
  // const [, setUserInfo] = useLocalStorage({
  //   key: "user-info",
  //   defaultValue: {},
  // });

  const login = async (values: { username: string; password: string }) => {
    // const res = await sLogin(values);
    // const { data } = res;
    console.log(values);
    setLoginWaiting(true);
    const user = await signIn("credentials", values);
    console.log(user);
  };

  return {
    login,
    loginWaiting,
  };
}
