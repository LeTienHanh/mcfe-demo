"use client";

import { MantineProvider, Text, Flex, Space } from "@mantine/core";
import { LoginForm } from "@ocean-network-express/mcfe-shared";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

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
        <Text fw={700}>APP1 APP LOGIN</Text>
        <Space h="sm" />
        <LoginForm
          style={{ flex: 1 }}
          onSuccess={() => {
            router.push("/");
          }}
        />
        <div style={{ flex: 1 }}></div>
      </Flex>
    </MantineProvider>
  );
}
