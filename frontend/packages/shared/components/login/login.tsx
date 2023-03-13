import React from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box } from "@mantine/core";
import useLoginBiz from "./login-biz";

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
  const loginBiz = useLoginBiz();
  const { loginWaiting } = loginBiz;

  return (
    <Box w={400} style={style}>
      <TextInput
        label="Email"
        placeholder="Email"
        {...form.getInputProps("email")}
      />
      <TextInput
        type="password"
        mt="md"
        label="Password"
        placeholder="Password"
        {...form.getInputProps("password")}
      />

      <Group position="center" mt="xl">
        <Button
          variant="outline"
          loading={loginWaiting}
          onClick={() => {
            loginBiz.login(form.values);
          }}
        >
          Login
        </Button>
      </Group>
    </Box>
  );
};
