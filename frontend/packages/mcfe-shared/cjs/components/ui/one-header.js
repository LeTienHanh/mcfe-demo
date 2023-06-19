"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneHeader = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@mantine/core");
const hooks_1 = require("@mantine/hooks");
const icons_react_1 = require("@tabler/icons-react");
const ds_1 = require("@mantine/ds");
const react_1 = tslib_1.__importDefault(require("react"));
const useStyles = (0, core_1.createStyles)((theme) => ({
    header: {
        backgroundColor: theme.fn.variant({
            variant: "filled",
            color: theme.primaryColor,
        }).background,
        borderBottom: 0,
    },
    inner: {
        height: (0, core_1.rem)(56),
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
        padding: `${(0, core_1.rem)(8)} ${(0, core_1.rem)(12)}`,
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
        marginRight: (0, core_1.rem)(5),
    },
}));
function OneHeader({ links, title }) {
    const [opened, { toggle }] = (0, hooks_1.useDisclosure)(false);
    const { classes } = useStyles();
    const items = links.map((link) => {
        var _a;
        const menuItems = (_a = link.links) === null || _a === void 0 ? void 0 : _a.map((item) => (react_1.default.createElement(core_1.Menu.Item, { key: item.link }, item.label)));
        if (menuItems) {
            return (react_1.default.createElement(core_1.Menu, { key: link.label, trigger: "hover", transitionProps: { exitDuration: 0 }, withinPortal: true },
                react_1.default.createElement(core_1.Menu.Target, null,
                    react_1.default.createElement("a", { href: link.link, className: classes.link, onClick: (event) => event.preventDefault() },
                        react_1.default.createElement(core_1.Center, null,
                            react_1.default.createElement("span", { className: classes.linkLabel }, link.label),
                            react_1.default.createElement(icons_react_1.IconChevronDown, { size: "0.9rem", stroke: 1.5 })))),
                react_1.default.createElement(core_1.Menu.Dropdown, null, menuItems)));
        }
        return (react_1.default.createElement("a", { key: link.label, href: link.link, className: classes.link, onClick: (event) => event.preventDefault() }, link.label));
    });
    return (react_1.default.createElement(core_1.Header, { height: 56, className: classes.header, mb: 120 },
        react_1.default.createElement(core_1.Container, null,
            react_1.default.createElement("div", { className: classes.inner },
                react_1.default.createElement(ds_1.MantineLogo, { size: 28, type: "mark", inverted: true }),
                react_1.default.createElement(core_1.Text, { fw: 700, style: { paddingLeft: 20 } },
                    "MCFE DEMO - ",
                    title),
                react_1.default.createElement("div", { style: { flex: 1 } }),
                react_1.default.createElement(core_1.Group, { spacing: 5, className: classes.links }, items),
                react_1.default.createElement(core_1.Burger, { opened: opened, onClick: toggle, className: classes.burger, size: "sm", color: "#fff" })))));
}
exports.OneHeader = OneHeader;
//# sourceMappingURL=one-header.js.map