"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@mantine/core");
const react_1 = tslib_1.__importDefault(require("react"));
const swr_1 = tslib_1.__importDefault(require("swr"));
//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const UserInfo = ({ url = "/api/profile" }) => {
    const { data, error, isLoading } = (0, swr_1.default)(url, fetcher);
    if (isLoading) {
        return react_1.default.createElement(core_1.Text, null, "User Loading");
    }
    if (error) {
        return react_1.default.createElement(core_1.Text, null, "Load user error");
    }
    return (react_1.default.createElement(core_1.Paper, { radius: "md", withBorder: true, p: "lg", sx: (theme) => ({
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        }) },
        react_1.default.createElement(core_1.Avatar, { src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80", size: 120, radius: 120, mx: "auto" }),
        react_1.default.createElement(core_1.Text, { ta: "center", fz: "lg", weight: 500, mt: "md" }, data.username),
        react_1.default.createElement(core_1.Text, { ta: "center", c: "dimmed", fz: "sm" }, "Developer"),
        react_1.default.createElement(core_1.Button, { variant: "default", fullWidth: true, mt: "md" }, "Send message")));
};
exports.UserInfo = UserInfo;
//# sourceMappingURL=one-user-info-card.js.map