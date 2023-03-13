// import { login as sLogin } from "./user-service";
import { __awaiter } from "tslib";
import { useState } from "react";
export default function useLoginBiz() {
    const [loginWaiting, setLoginWaiting] = useState(false);
    const login = (values) => __awaiter(this, void 0, void 0, function* () {
        // const res = await sLogin(values);
        // const { data } = res;
        console.log(values);
        setLoginWaiting(true);
    });
    return {
        login,
        loginWaiting,
    };
}
//# sourceMappingURL=login-biz.js.map