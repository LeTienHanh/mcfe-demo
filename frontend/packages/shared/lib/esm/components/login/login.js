import { __awaiter } from "tslib";
import React from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box } from "@mantine/core";
import useLoginBiz from "./login-biz";
export const LoginForm = ({ style, onSuccess, }) => {
    const form = useForm({
        initialValues: {
            username: "",
            password: "",
        },
    });
    const loginBiz = useLoginBiz();
    const { loginWaiting } = loginBiz;
    // const [user] = useLocalStorage<UserInfoType>({
    //   key: "user-info",
    // });
    // useEffect(() => {
    //   if (user && user.email) {
    //     onSuccess();
    //   }
    // }, [user]);
    return (React.createElement(Box, { w: 400, style: style },
        React.createElement(TextInput, Object.assign({ label: "User", placeholder: "User" }, form.getInputProps("username"))),
        React.createElement(TextInput, Object.assign({ type: "password", mt: "md", label: "Password", placeholder: "Password" }, form.getInputProps("password"))),
        React.createElement(Group, { position: "center", mt: "xl" },
            React.createElement(Button, { variant: "outline", loading: loginWaiting, onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                    yield loginBiz.login(form.values);
                    onSuccess();
                }) }, "Login"))));
};
//# sourceMappingURL=login.js.map