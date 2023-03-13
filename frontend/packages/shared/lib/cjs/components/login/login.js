"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginForm = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const form_1 = require("@mantine/form");
const core_1 = require("@mantine/core");
const LoginForm = ({ style, }) => {
    const form = (0, form_1.useForm)({
        initialValues: {
            email: "",
            password: "",
        },
    });
    return (react_1.default.createElement(core_1.Box, { w: 400, style: style },
        react_1.default.createElement(core_1.TextInput, Object.assign({ label: "Email", placeholder: "Email" }, form.getInputProps("name"))),
        react_1.default.createElement(core_1.TextInput, Object.assign({ type: "password", mt: "md", label: "Password", placeholder: "Password" }, form.getInputProps("password"))),
        react_1.default.createElement(core_1.Group, { position: "center", mt: "xl" },
            react_1.default.createElement(core_1.Button, { variant: "outline" }, "Login"))));
};
exports.LoginForm = LoginForm;
//# sourceMappingURL=login.js.map