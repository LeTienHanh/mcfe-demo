import { Text } from "@mantine/core";
import React from "react";

export const UserInfo: React.FC<any> = ({ user }) => {
  return <Text>User: {user.name} </Text>;
};
