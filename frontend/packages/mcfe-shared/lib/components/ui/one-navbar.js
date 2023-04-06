import React, { useState } from "react";
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem, } from "@mantine/core";
import { IconHome2, IconGauge, IconDeviceDesktopAnalytics, IconFingerprint, IconCalendarStats, IconUser, IconSettings, IconLogout, IconSwitchHorizontal, } from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";
const useStyles = createStyles((theme) => ({
    link: {
        width: rem(50),
        height: rem(50),
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
    return (React.createElement(Tooltip, { label: label, position: "right", transitionProps: { duration: 0 } },
        React.createElement(UnstyledButton, { onClick: onClick, className: cx(classes.link, { [classes.active]: active }) },
            React.createElement(Icon, { size: "1.2rem", stroke: 1.5 }))));
}
const mockdata = [
    { icon: IconHome2, label: "Home" },
    { icon: IconGauge, label: "Dashboard" },
    { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
    { icon: IconCalendarStats, label: "Releases" },
    { icon: IconUser, label: "Account" },
    { icon: IconFingerprint, label: "Security" },
    { icon: IconSettings, label: "Settings" },
];
export function OneNavbar() {
    const [active, setActive] = useState(2);
    const links = mockdata.map((link, index) => (React.createElement(NavbarLink, Object.assign({}, link, { key: link.label, active: index === active, onClick: () => setActive(index) }))));
    return (React.createElement(Navbar, { width: { base: 80 }, p: "md", sx: (theme) => ({
            backgroundColor: theme.fn.variant({
                variant: "filled",
                color: theme.primaryColor,
            }).background,
        }) },
        React.createElement(Center, null,
            React.createElement(MantineLogo, { type: "mark", inverted: true, size: 30 })),
        React.createElement(Navbar.Section, { grow: true, mt: 50 },
            React.createElement(Stack, { justify: "center", spacing: 0 }, links)),
        React.createElement(Navbar.Section, null,
            React.createElement(Stack, { justify: "center", spacing: 0 },
                React.createElement(NavbarLink, { icon: IconSwitchHorizontal, label: "Change account" }),
                React.createElement(NavbarLink, { icon: IconLogout, label: "Logout" })))));
}
//# sourceMappingURL=one-navbar.js.map