"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneNavbar = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const core_1 = require("@mantine/core");
const icons_react_1 = require("@tabler/icons-react");
const ds_1 = require("@mantine/ds");
const useStyles = (0, core_1.createStyles)((theme) => ({
    link: {
        width: (0, core_1.rem)(50),
        height: (0, core_1.rem)(50),
        borderRadius: theme.radius.md,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.white,
        opacity: 0.85,
        "&:hover": {
            opacity: 1,
            backgroundColor: theme.fn.lighten(theme.fn.variant({ variant: "filled", color: theme.primaryColor })
                .background, 0.1),
        },
    },
    active: {
        opacity: 1,
        "&, &:hover": {
            backgroundColor: theme.fn.lighten(theme.fn.variant({ variant: "filled", color: theme.primaryColor })
                .background, 0.15),
        },
    },
}));
function NavbarLink({ icon: Icon, label, active, onClick }) {
    const { classes, cx } = useStyles();
    return (react_1.default.createElement(core_1.Tooltip, { label: label, position: "right", transitionProps: { duration: 0 } },
        react_1.default.createElement(core_1.UnstyledButton, { onClick: onClick, className: cx(classes.link, { [classes.active]: active }) },
            react_1.default.createElement(Icon, { size: "1.2rem", stroke: 1.5 }))));
}
const mockdata = [
    { icon: icons_react_1.IconHome2, label: "Home" },
    { icon: icons_react_1.IconGauge, label: "Dashboard" },
    { icon: icons_react_1.IconDeviceDesktopAnalytics, label: "Analytics" },
    { icon: icons_react_1.IconCalendarStats, label: "Releases" },
    { icon: icons_react_1.IconUser, label: "Account" },
    { icon: icons_react_1.IconFingerprint, label: "Security" },
    { icon: icons_react_1.IconSettings, label: "Settings" },
];
function OneNavbar() {
    const [active, setActive] = (0, react_1.useState)(2);
    const links = mockdata.map((link, index) => (react_1.default.createElement(NavbarLink, Object.assign({}, link, { key: link.label, active: index === active, onClick: () => setActive(index) }))));
    return (react_1.default.createElement(core_1.Navbar, { width: { base: 80 }, p: "md", sx: (theme) => ({
            backgroundColor: theme.fn.variant({
                variant: "filled",
                color: theme.primaryColor,
            }).background,
        }) },
        react_1.default.createElement(core_1.Center, null,
            react_1.default.createElement(ds_1.MantineLogo, { type: "mark", inverted: true, size: 30 })),
        react_1.default.createElement(core_1.Navbar.Section, { grow: true, mt: 50 },
            react_1.default.createElement(core_1.Stack, { justify: "center", spacing: 0 }, links)),
        react_1.default.createElement(core_1.Navbar.Section, null,
            react_1.default.createElement(core_1.Stack, { justify: "center", spacing: 0 },
                react_1.default.createElement(NavbarLink, { icon: icons_react_1.IconSwitchHorizontal, label: "Change account" }),
                react_1.default.createElement(NavbarLink, { icon: icons_react_1.IconLogout, label: "Logout" })))));
}
exports.OneNavbar = OneNavbar;
//# sourceMappingURL=one-navbar.js.map