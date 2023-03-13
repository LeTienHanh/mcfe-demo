"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginForm = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const form_1 = require("@mantine/form");
const core_1 = require("@mantine/core");
const login_biz_1 = tslib_1.__importDefault(require("./login-biz"));
const LoginForm = ({ style, }) => {
    const form = (0, form_1.useForm)({
        initialValues: {
            email: "",
            password: "",
        },
    });
    const loginBiz = (0, login_biz_1.default)();
    const { loginWaiting } = loginBiz;
    return (react_1.default.createElement(core_1.Box, { w: 400, style: style },
        react_1.default.createElement(core_1.TextInput, Object.assign({ label: "Email", placeholder: "Email" }, form.getInputProps("email"))),
        react_1.default.createElement(core_1.TextInput, Object.assign({ type: "password", mt: "md", label: "Password", placeholder: "Password" }, form.getInputProps("password"))),
        react_1.default.createElement(core_1.Group, { position: "center", mt: "xl" },
            react_1.default.createElement(core_1.Button, { variant: "outline", loading: loginWaiting, onClick: () => {
                    loginBiz.login(form.values);
                } }, "Login"))));
};
exports.LoginForm = LoginForm;
//# sourceMappingURL=login.js.map