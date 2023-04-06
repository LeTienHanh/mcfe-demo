import { createStyles, Header, Menu, Group, Center, Burger, Container, rem, Text, } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";
import React from "react";
const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: theme.fn.variant({
            variant: "filled",
            color: theme.primaryColor,
        }).background,
        borderBottom: 0,
    },
    inner: {
        height: rem(56),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    links: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },
    burger: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },
    link: {
        display: "block",
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color: theme.white,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        "&:hover": {
            backgroundColor: theme.fn.lighten(theme.fn.variant({ variant: "filled", color: theme.primaryColor })
                .background, 0.1),
        },
    },
    linkLabel: {
        marginRight: rem(5),
    },
}));
export function OneHeader({ links, title }) {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();
    const items = links.map((link) => {
        var _a;
        const menuItems = (_a = link.links) === null || _a === void 0 ? void 0 : _a.map((item) => (React.createElement(Menu.Item, { key: item.link }, item.label)));
        if (menuItems) {
            return (React.createElement(Menu, { key: link.label, trigger: "hover", transitionProps: { exitDuration: 0 }, withinPortal: true },
                React.createElement(Menu.Target, null,
                    React.createElement("a", { href: link.link, className: classes.link, onClick: (event) => event.preventDefault() },
                        React.createElement(Center, null,
                            React.createElement("span", { className: classes.linkLabel }, link.label),
                            React.createElement(IconChevronDown, { size: "0.9rem", stroke: 1.5 })))),
                React.createElement(Menu.Dropdown, null, menuItems)));
        }
        return (React.createElement("a", { key: link.label, href: link.link, className: classes.link, onClick: (event) => event.preventDefault() }, link.label));
    });
    return (React.createElement(Header, { height: 56, className: classes.header, mb: 120 },
        React.createElement(Container, null,
            React.createElement("div", { className: classes.inner },
                React.createElement(MantineLogo, { size: 28, type: "mark", inverted: true }),
                React.createElement(Text, { fw: 700, style: { paddingLeft: 20 } },
                    "MCFE DEMO - ",
                    title),
                React.createElement("div", { style: { flex: 1 } }),
                React.createElement(Group, { spacing: 5, className: classes.links }, items),
                React.createElement(Burger, { opened: opened, onClick: toggle, className: classes.burger, size: "sm", color: "#fff" })))));
}
//# sourceMappingURL=one-header.js.map