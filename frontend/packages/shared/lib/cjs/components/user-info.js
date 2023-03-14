"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@mantine/core");
const react_1 = tslib_1.__importDefault(require("react"));
const UserInfo = ({ user }) => {
    return react_1.default.createElement(core_1.Text, null,
        "User: ",
        user.email,
        " ");
};
exports.UserInfo = UserInfo;
//# sourceMappingURL=user-info.js.map