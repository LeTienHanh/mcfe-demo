import { Text } from "@mantine/core";
import React from "react";
import { UserInfoType } from "../types";

export interface UserInfoProps {
  user: UserInfoType;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return <Text>User: {user.email} </Text>;
};
