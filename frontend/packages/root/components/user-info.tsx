import { Card, Text } from "@mantine/core";
import { UserInfo } from "@ocean-network-express/mcfe-shared/esm";
import { useSession } from "next-auth/react";
import React from "react";

export const UserCardRoot: React.FC = () => {
  const { status } = useSession();

  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding>
        <Text>This is Root App Component: 3000 Port</Text>
      </Card.Section>

      {status !== "authenticated" ? (
        <Text> User is not logged</Text>
      ) : (
        <UserInfo />
      )}
    </Card>
  );
};

export default UserCardRoot;
