import { Button } from "@mantine/core";
import React from "react";
import { signOut } from "next-auth/react";

export const OneLogoutButton: React.FC = () => {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
    >
      {" "}
      Logout{" "}
    </Button>
  );
};
