"use client";
import { __awaiter } from "tslib";
import { Button, Group, Paper, PasswordInput, Stack, Text, TextInput, Divider, } from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst } from "@mantine/hooks";
import React from "react";
import useLoginBiz from "./login-biz";
export const OneLoginForm = ({ onSuccess, }) => {
    const loginBiz = useLoginBiz();
    const form = useForm({
        initialValues: {
            username: "",
            password: "",
        },
        validate: {
            password: (val) => (!val.length ? "Password is required" : null),
        },
    });
    return (React.createElement(Paper, { radius: "md", p: "xl", withBorder: true },
        React.createElement(Text, { size: "lg", weight: 500 }, "Welcome to MCFE, login with"),
        React.createElement(Divider, { my: "lg" }),
        React.createElement("form", { onSubmit: form.onSubmit(() => __awaiter(void 0, void 0, void 0, function* () {
                yield loginBiz.login(form.values);
                onSuccess();
            })) },
            React.createElement(Stack, null,
                React.createElement(TextInput, { required: true, label: "Username", placeholder: "dev1", value: form.values.username, onChange: (event) => form.setFieldValue("username", event.currentTarget.value), radius: "md" }),
                React.createElement(PasswordInput, { required: true, label: "Password", placeholder: "Your password", value: form.values.password, onChange: (event) => form.setFieldValue("password", event.currentTarget.value), error: form.errors.password && "Password is required", radius: "md" })),
            React.createElement(Group, { position: "apart", mt: "xl" },
                React.createElement(Button, { type: "submit", radius: "xl" }, upperFirst("login"))))));
};
//# sourceMappingURL=one-login-form.js.map