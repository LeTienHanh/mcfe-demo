import { Text } from "@mantine/core";
import React from "react";
import useSWR from "swr";

//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export interface UserInfoProps {
  url?: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({ url = "/api/profile" }) => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <Text>User Loading</Text>;
  }

  if (error) {
    return <Text>Load user error</Text>;
  }

  return <Text>User: {data.username} </Text>;
};
