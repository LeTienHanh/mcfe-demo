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
    return react_1.default.createElement(core_1.Text, null,
        "User: ",
        data.username,
        " ");
};
exports.UserInfo = UserInfo;
//# sourceMappingURL=user-info.js.map