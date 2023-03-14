import React from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box } from "@mantine/core";
import useLoginBiz from "./login-biz";

export interface LoginFormProps {
  style: React.CSSProperties;
  onSuccess: Function;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  style,
  onSuccess,
}: LoginFormProps) => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });
  const loginBiz = useLoginBiz();
  const { loginWaiting } = loginBiz;

  // const [user] = useLocalStorage<UserInfoType>({
  //   key: "user-info",
  // });

  // useEffect(() => {
  //   if (user && user.email) {
  //     onSuccess();
  //   }
  // }, [user]);

  return (
    <Box w={400} style={style}>
      <TextInput
        label="User"
        placeholder="User"
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
          onClick={async () => {
            await loginBiz.login(form.values);
            onSuccess();
          }}
        >
          Login
        </Button>
      </Group>
    </Box>
  );
};
