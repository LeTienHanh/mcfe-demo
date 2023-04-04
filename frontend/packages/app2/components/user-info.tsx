import { Card, Text } from "@mantine/core";
import { UserInfo } from "@ocean-network-express/mcfe-shared";
import { useSession } from "next-auth/react";
import React from "react";

export const UserCardApp2: React.FC = () => {
  const { status } = useSession();

  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding>
        <Text>This is App2 Component: 3002 Port</Text>
      </Card.Section>

      {status !== "authenticated" ? (
        <Text> User is not logged</Text>
      ) : (
        <UserInfo url="/app2/api/profile" />
      )}
    </Card>
  );
};

export default UserCardApp2;
