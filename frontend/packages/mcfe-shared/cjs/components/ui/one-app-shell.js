"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneAppShell = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@mantine/core");
const react_1 = tslib_1.__importDefault(require("react"));
const one_footer_1 = require("./one-footer");
const one_header_1 = require("./one-header");
const one_navbar_1 = require("./one-navbar");
const OneAppShell = ({ children, title, }) => {
    const theme = (0, core_1.useMantineTheme)();
    return (react_1.default.createElement(core_1.AppShell, { styles: {
            main: {
                background: theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
            },
        }, navbarOffsetBreakpoint: "sm", asideOffsetBreakpoint: "sm", navbar: react_1.default.createElement(one_navbar_1.OneNavbar, null), footer: react_1.default.createElement(one_footer_1.OneFooter, { links: [
                { label: "Contact" },
                { label: "Privacy" },
                { label: "Store" },
            ] }), header: react_1.default.createElement(one_header_1.OneHeader, { title: title, links: [
                {
                    label: "Features",
                    link: "",
                },
                {
                    label: "Learn",
                    link: "",
                    links: [
                        {
                            label: "Documentation",
                            link: "",
                        },
                        {
                            label: "Resources",
                            link: "",
                        },
                    ],
                },
                {
                    label: "About",
                    link: "",
                },
                {
                    label: "Pricing",
                    link: "",
                },
                {
                    label: "Support",
                    link: "",
                    links: [
                        {
                            label: "FAQ",
                            link: "",
                        },
                    ],
                },
            ] }) }, children));
};
exports.OneAppShell = OneAppShell;
//# sourceMappingURL=one-app-shell.js.map