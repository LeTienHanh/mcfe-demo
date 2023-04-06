import { Text, Paper, Avatar, Button } from "@mantine/core";
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

  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar
        src={
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
        }
        size={120}
        radius={120}
        mx="auto"
      />
      <Text ta="center" fz="lg" weight={500} mt="md">
        {data.username}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        Developer
      </Text>

      <Button variant="default" fullWidth mt="md">
        Send message
      </Button>
    </Paper>
  );
};
