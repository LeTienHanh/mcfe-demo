import React from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box } from "@mantine/core";

export interface LoginFormProps {
  style: React.CSSProperties;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  style,
}: LoginFormProps) => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Box w={400} style={style}>
      <TextInput
        label="Email"
        placeholder="Email"
        {...form.getInputProps("name")}
      />
      <TextInput
        type="password"
        mt="md"
        label="Password"
        placeholder="Password"
        {...form.getInputProps("password")}
      />

      <Group position="center" mt="xl">
        <Button variant="outline">Login</Button>
      </Group>
    </Box>
  );
};
