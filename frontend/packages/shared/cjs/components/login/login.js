"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginForm = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const form_1 = require("@mantine/form");
const core_1 = require("@mantine/core");
const login_biz_1 = tslib_1.__importDefault(require("./login-biz"));
const LoginForm = ({ style, onSuccess, }) => {
    const form = (0, form_1.useForm)({
        initialValues: {
            username: "",
            password: "",
        },
    });
    const loginBiz = (0, login_biz_1.default)();
    const { loginWaiting } = loginBiz;
    // const [user] = useLocalStorage<UserInfoType>({
    //   key: "user-info",
    // });
    // useEffect(() => {
    //   if (user && user.email) {
    //     onSuccess();
    //   }
    // }, [user]);
    return (react_1.default.createElement(core_1.Box, { w: 400, style: style },
        react_1.default.createElement(core_1.TextInput, Object.assign({ label: "User", placeholder: "User" }, form.getInputProps("username"))),
        react_1.default.createElement(core_1.TextInput, Object.assign({ type: "password", mt: "md", label: "Password", placeholder: "Password" }, form.getInputProps("password"))),
        react_1.default.createElement(core_1.Group, { position: "center", mt: "xl" },
            react_1.default.createElement(core_1.Button, { variant: "outline", loading: loginWaiting, onClick: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                    yield loginBiz.login(form.values);
                    onSuccess();
                }) }, "Login"))));
};
exports.LoginForm = LoginForm;
//# sourceMappingURL=login.js.map