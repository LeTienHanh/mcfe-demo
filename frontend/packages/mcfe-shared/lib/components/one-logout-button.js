import { Button } from "@mantine/core";
import React from "react";
import { signOut } from "next-auth/react";
export const OneLogoutButton = () => {
    return (React.createElement(Button, { onClick: () => {
            signOut();
        } },
        " ",
        "Logout",
        " "));
};
//# sourceMappingURL=one-logout-button.js.map