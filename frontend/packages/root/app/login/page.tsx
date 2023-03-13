"use client";

import { MantineProvider } from "@mantine/core";
import { Center, Flex } from "@mantine/core";
import { LoginForm } from "mcfeshared";
import "./login.css";

export default function Login() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
      }}
    >
      <Flex direction="column" align="center" h="100%">
        <div style={{ flex: 1 }}></div>
        <LoginForm style={{ flex: 1 }} />
        <div style={{ flex: 1 }}></div>
      </Flex>
    </MantineProvider>
  );
}
