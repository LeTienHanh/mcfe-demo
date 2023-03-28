"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const react_2 = require("next-auth/react");
function useLoginBiz() {
    const [loginWaiting, setLoginWaiting] = (0, react_1.useState)(false);
    const login = (values) => tslib_1.__awaiter(this, void 0, void 0, function* () {
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