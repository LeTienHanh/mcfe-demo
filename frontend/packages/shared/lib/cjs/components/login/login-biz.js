"use strict";
// import { login as sLogin } from "./user-service";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
function useLoginBiz() {
    const [loginWaiting, setLoginWaiting] = (0, react_1.useState)(false);
    const login = (values) => tslib_1.__awaiter(this, void 0, void 0, function* () {
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
exports.default = useLoginBiz;
//# sourceMappingURL=login-biz.js.map