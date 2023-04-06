import { Text, Paper, Avatar, Button } from "@mantine/core";
import React from "react";
import useSWR from "swr";
//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const UserInfo = ({ url = "/api/profile" }) => {
    const { data, error, isLoading } = useSWR(url, fetcher);
    if (isLoading) {
        return React.createElement(Text, null, "User Loading");
    }
    if (error) {
        return React.createElement(Text, null, "Load user error");
    }
    return (React.createElement(Paper, { radius: "md", withBorder: true, p: "lg", sx: (theme) => ({
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        }) },
        React.createElement(Avatar, { src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80", size: 120, radius: 120, mx: "auto" }),
        React.createElement(Text, { ta: "center", fz: "lg", weight: 500, mt: "md" }, data.username),
        React.createElement(Text, { ta: "center", c: "dimmed", fz: "sm" }, "Developer"),
        React.createElement(Button, { variant: "default", fullWidth: true, mt: "md" }, "Send message")));
};
//# sourceMappingURL=one-user-info-card.js.map