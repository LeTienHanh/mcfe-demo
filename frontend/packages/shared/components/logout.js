import { Button } from "@mantine/core";
import React from "react";
import { signOut } from "next-auth/react";
export const LogoutButton = () => {
    return (React.createElement(Button, { onClick: () => {
            signOut();
        } },
        " ",
        "Logout",
        " "));
};
//# sourceMappingURL=logout.js.map