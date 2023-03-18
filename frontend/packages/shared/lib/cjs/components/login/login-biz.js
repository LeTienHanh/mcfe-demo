"use strict";
// import { login as sLogin } from "./user-service";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
// import { useLocalStorage } from "@mantine/hooks";
const react_2 = require("next-auth/react");
function useLoginBiz() {
    const [loginWaiting, setLoginWaiting] = (0, react_1.useState)(false);
    // const [, setUserInfo] = useLocalStorage({
    //   key: "user-info",
    //   defaultValue: {},
    // });
    const login = (values) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        // const res = await sLogin(values);
        // const { data } = res;
        console.log(values);
        setLoginWaiting(true);
        const user = yield (0, react_2.signIn)("credentials", values);
        console.log(user);
    });
    return {
        login,
        loginWaiting,
    };
}
exports.default = useLoginBiz;
//# sourceMappingURL=login-biz.js.map