"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneFooter = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@mantine/core");
const icons_react_1 = require("@tabler/icons-react");
const ds_1 = require("@mantine/ds");
const react_1 = tslib_1.__importDefault(require("react"));
const useStyles = (0, core_1.createStyles)((theme) => ({
    footer: {
        borderTop: `${(0, core_1.rem)(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]}`,
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
function OneFooter({ links }) {
    const { classes } = useStyles();
    const items = links.map((link) => (react_1.default.createElement(core_1.Anchor, { color: "dimmed", key: link.label, href: link.link, sx: { lineHeight: 1 }, onClick: (event) => event.preventDefault(), size: "sm" }, link.label)));
    return (react_1.default.createElement(core_1.Footer, { height: 60, className: classes.footer },
        react_1.default.createElement("div", { className: classes.inner },
            react_1.default.createElement(core_1.Group, null,
                react_1.default.createElement(ds_1.MantineLogo, { size: 28, type: "mark" }),
                react_1.default.createElement(core_1.Text, { fw: 700, fz: "md", style: { paddingLeft: 10 } }, "Cyberlogitec")),
            react_1.default.createElement(core_1.Group, { className: classes.links }, items),
            react_1.default.createElement(core_1.Group, { spacing: "xs", position: "right", noWrap: true },
                react_1.default.createElement(core_1.ActionIcon, { size: "lg", variant: "default", radius: "xl" },
                    react_1.default.createElement(icons_react_1.IconBrandTwitter, { size: "1.05rem", stroke: 1.5 })),
                react_1.default.createElement(core_1.ActionIcon, { size: "lg", variant: "default", radius: "xl" },
                    react_1.default.createElement(icons_react_1.IconBrandYoutube, { size: "1.05rem", stroke: 1.5 })),
                react_1.default.createElement(core_1.ActionIcon, { size: "lg", variant: "default", radius: "xl" },
                    react_1.default.createElement(icons_react_1.IconBrandInstagram, { size: "1.05rem", stroke: 1.5 }))))));
}
exports.OneFooter = OneFooter;
//# sourceMappingURL=one-footer.js.map