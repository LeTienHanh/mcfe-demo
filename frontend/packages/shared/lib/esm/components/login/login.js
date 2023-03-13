import React from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box } from "@mantine/core";
import useLoginBiz from "./login-biz";
export const LoginForm = ({ style, }) => {
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },
    });
    const loginBiz = useLoginBiz();
    const { loginWaiting } = loginBiz;
    return (React.createElement(Box, { w: 400, style: style },
        React.createElement(TextInput, Object.assign({ label: "Email", placeholder: "Email" }, form.getInputProps("email"))),
        React.createElement(TextInput, Object.assign({ type: "password", mt: "md", label: "Password", placeholder: "Password" }, form.getInputProps("password"))),
        React.createElement(Group, { position: "center", mt: "xl" },
            React.createElement(Button, { variant: "outline", loading: loginWaiting, onClick: () => {
                    loginBiz.login(form.values);
                } }, "Login"))));
};
//# sourceMappingURL=login.js.map