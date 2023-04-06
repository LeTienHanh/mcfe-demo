"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneLogoutButton = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@mantine/core");
const react_1 = tslib_1.__importDefault(require("react"));
const react_2 = require("next-auth/react");
const OneLogoutButton = () => {
    return (react_1.default.createElement(core_1.Button, { onClick: () => {
            (0, react_2.signOut)();
        } },
        " ",
        "Logout",
        " "));
};
exports.OneLogoutButton = OneLogoutButton;
//# sourceMappingURL=one-logout-button.js.map