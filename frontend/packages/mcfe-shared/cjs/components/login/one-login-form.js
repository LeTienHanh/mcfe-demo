"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneLoginForm = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@mantine/core");
const form_1 = require("@mantine/form");
const hooks_1 = require("@mantine/hooks");
const react_1 = tslib_1.__importDefault(require("react"));
const login_biz_1 = tslib_1.__importDefault(require("./login-biz"));
const OneLoginForm = ({ onSuccess, }) => {
    const loginBiz = (0, login_biz_1.default)();
    const form = (0, form_1.useForm)({
        initialValues: {
            username: "",
            password: "",
        },
        validate: {
            password: (val) => (!val.length ? "Password is required" : null),
        },
    });
    return (react_1.default.createElement(core_1.Paper, { radius: "md", p: "xl", withBorder: true },
        react_1.default.createElement(core_1.Text, { size: "lg", weight: 500 }, "Welcome to MCFE, login with"),
        react_1.default.createElement(core_1.Divider, { my: "lg" }),
        react_1.default.createElement("form", { onSubmit: form.onSubmit(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                yield loginBiz.login(form.values);
                onSuccess();
            })) },
            react_1.default.createElement(core_1.Stack, null,
                react_1.default.createElement(core_1.TextInput, { required: true, label: "Username", placeholder: "dev1", value: form.values.username, onChange: (event) => form.setFieldValue("username", event.currentTarget.value), radius: "md" }),
                react_1.default.createElement(core_1.PasswordInput, { required: true, label: "Password", placeholder: "Your password", value: form.values.password, onChange: (event) => form.setFieldValue("password", event.currentTarget.value), error: form.errors.password && "Password is required", radius: "md" })),
            react_1.default.createElement(core_1.Group, { position: "apart", mt: "xl" },
                react_1.default.createElement(core_1.Button, { type: "submit", radius: "xl" }, (0, hooks_1.upperFirst)("login"))))));
};
exports.OneLoginForm = OneLoginForm;
//# sourceMappingURL=one-login-form.js.map