"use strict";
// import { login as sLogin } from "./user-service";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const hooks_1 = require("@mantine/hooks");
function useLoginBiz() {
    const [loginWaiting, setLoginWaiting] = (0, react_1.useState)(false);
    const [, setUserInfo] = (0, hooks_1.useLocalStorage)({
        key: "user-info",
        defaultValue: {},
    });
    const login = (values) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        // const res = await sLogin(values);
        // const { data } = res;
        console.log(values);
        setLoginWaiting(true);
        setUserInfo(values);
    });
    return {
        login,
        loginWaiting,
    };
}
exports.default = useLoginBiz;
//# sourceMappingURL=login-biz.js.map