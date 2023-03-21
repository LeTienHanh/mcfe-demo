import { Button } from "@mantine/core";
import React from "react";
import { signOut } from "next-auth/react";

export const LogoutButton: React.FC = () => {
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
