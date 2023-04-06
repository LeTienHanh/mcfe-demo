import { createStyles, Anchor, Group, ActionIcon, rem, Footer, Text, } from "@mantine/core";
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, } from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";
import React from "react";
const useStyles = createStyles((theme) => ({
    footer: {
        borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]}`,
    },
    inner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `${theme.spacing.md} ${theme.spacing.md}`,
        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
        },
    },
    links: {
        [theme.fn.smallerThan("sm")]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
        },
    },
}));
export function OneFooter({ links }) {
    const { classes } = useStyles();
    const items = links.map((link) => (React.createElement(Anchor, { color: "dimmed", key: link.label, href: link.link, sx: { lineHeight: 1 }, onClick: (event) => event.preventDefault(), size: "sm" }, link.label)));
    return (React.createElement(Footer, { height: 60, className: classes.footer },
        React.createElement("div", { className: classes.inner },
            React.createElement(Group, null,
                React.createElement(MantineLogo, { size: 28, type: "mark" }),
                React.createElement(Text, { fw: 700, fz: "md", style: { paddingLeft: 10 } }, "Cyberlogitec")),
            React.createElement(Group, { className: classes.links }, items),
            React.createElement(Group, { spacing: "xs", position: "right", noWrap: true },
                React.createElement(ActionIcon, { size: "lg", variant: "default", radius: "xl" },
                    React.createElement(IconBrandTwitter, { size: "1.05rem", stroke: 1.5 })),
                React.createElement(ActionIcon, { size: "lg", variant: "default", radius: "xl" },
                    React.createElement(IconBrandYoutube, { size: "1.05rem", stroke: 1.5 })),
                React.createElement(ActionIcon, { size: "lg", variant: "default", radius: "xl" },
                    React.createElement(IconBrandInstagram, { size: "1.05rem", stroke: 1.5 }))))));
}
//# sourceMappingURL=one-footer.js.map