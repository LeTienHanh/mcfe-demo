import { Card, Text } from "@mantine/core";
import { UserInfo } from "@ocean-network-express/mcfe-shared/esm";
import { useSession } from "next-auth/react";
import React from "react";

export const UserCardApp1: React.FC = () => {
  const { status } = useSession();

  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding>
        <Text>This is App1 Component: 3001 Port</Text>
      </Card.Section>

      {status !== "authenticated" ? (
        <Text> User is not logged</Text>
      ) : (
        <UserInfo url="/app1/api/profile" />
      )}
    </Card>
  );
};

export default UserCardApp1;
