import { Text } from "@mantine/core";
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
    return React.createElement(Text, null,
        "User: ",
        data.username,
        " ");
};
//# sourceMappingURL=user-info.js.map