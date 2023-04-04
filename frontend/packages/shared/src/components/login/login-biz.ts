import { useState } from "react";
import { signIn } from "next-auth/react";

export default function useLoginBiz() {
  const [loginWaiting, setLoginWaiting] = useState(false);

  const login = async (values: { username: string; password: string }) => {
    setLoginWaiting(true);
    const user = await signIn("credentials", values);
    console.log(user);
  };

  return {
    login,
    loginWaiting,
  };
}
