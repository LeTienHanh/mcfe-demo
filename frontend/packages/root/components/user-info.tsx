import { Card, Text } from "@mantine/core";
import { UserInfo } from "mcfeshared";
import { useSession } from "next-auth/react";
import React from "react";

export const UserCardRoot: React.FC = () => {
  const { data: session, status } = useSession();

  if (status !== "authenticated") {
    return null;
  }

  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding>
        <Text>Root User Information </Text>
      </Card.Section>

      <UserInfo user={session.user} />
    </Card>
  );
};

export default UserCardRoot;
