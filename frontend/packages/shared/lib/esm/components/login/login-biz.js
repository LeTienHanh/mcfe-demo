// import { login as sLogin } from "./user-service";
import { __awaiter } from "tslib";
import { useState } from "react";
// import { useLocalStorage } from "@mantine/hooks";
import { signIn } from "next-auth/react";
export default function useLoginBiz() {
    const [loginWaiting, setLoginWaiting] = useState(false);
    // const [, setUserInfo] = useLocalStorage({
    //   key: "user-info",
    //   defaultValue: {},
    // });
    const login = (values) => __awaiter(this, void 0, void 0, function* () {
        // const res = await sLogin(values);
        // const { data } = res;
        console.log(values);
        setLoginWaiting(true);
        const user = yield signIn("credentials", values);
        console.log(user);
    });
    return {
        login,
        loginWaiting,
    };
}
//# sourceMappingURL=login-biz.js.map