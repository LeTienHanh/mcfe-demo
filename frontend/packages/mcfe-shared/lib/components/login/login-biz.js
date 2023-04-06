import { __awaiter } from "tslib";
import { useState } from "react";
import { signIn } from "next-auth/react";
export default function useLoginBiz() {
    const [loginWaiting, setLoginWaiting] = useState(false);
    const login = (values) => __awaiter(this, void 0, void 0, function* () {
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