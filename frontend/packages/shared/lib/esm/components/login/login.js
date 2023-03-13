import React from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box } from "@mantine/core";
export const LoginForm = ({ style, }) => {
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },
    });
    return (React.createElement(Box, { w: 400, style: style },
        React.createElement(TextInput, Object.assign({ label: "Email", placeholder: "Email" }, form.getInputProps("name"))),
        React.createElement(TextInput, Object.assign({ type: "password", mt: "md", label: "Password", placeholder: "Password" }, form.getInputProps("password"))),
        React.createElement(Group, { position: "center", mt: "xl" },
            React.createElement(Button, { variant: "outline" }, "Login"))));
};
//# sourceMappingURL=login.js.map