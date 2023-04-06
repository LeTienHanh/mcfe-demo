"use client";

import {
  Button,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst } from "@mantine/hooks";
import React from "react";
import useLoginBiz from "./login-biz";

export interface LoginFormProps {
  style?: React.CSSProperties;
  onSuccess: Function;
}

export const OneLoginForm: React.FC<LoginFormProps> = ({
  onSuccess,
}: LoginFormProps) => {
  const loginBiz = useLoginBiz();

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },

    validate: {
      password: (val) => (!val.length ? "Password is required" : null),
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder>
      <Text size="lg" weight={500}>
        Welcome to MCFE, login with
      </Text>

      <Divider my="lg" />

      <form
        onSubmit={form.onSubmit(async () => {
          await loginBiz.login(form.values);
          onSuccess();
        })}
      >
        <Stack>
          <TextInput
            required
            label="Username"
            placeholder="dev1"
            value={form.values.username}
            onChange={(event) =>
              form.setFieldValue("username", event.currentTarget.value)
            }
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={form.errors.password && "Password is required"}
            radius="md"
          />
        </Stack>

        <Group position="apart" mt="xl">
          <Button type="submit" radius="xl">
            {upperFirst("login")}
          </Button>
        </Group>
      </form>
    </Paper>
  );
};
