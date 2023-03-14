import React from "react";
import { Card, Text } from "@mantine/core";
import { UserInfo, UserInfoType } from "mcfeshared";
import { useLocalStorage } from "@mantine/hooks";

export const UserCardApp1: React.FC = () => {
  const [user] = useLocalStorage<UserInfoType>({
    key: "user-info",
  });

  if (!user) {
    return null;
  }

  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding>
        <Text>App1 User Information </Text>
      </Card.Section>

      <UserInfo user={user} />
    </Card>
  );
};

export default UserCardApp1;
