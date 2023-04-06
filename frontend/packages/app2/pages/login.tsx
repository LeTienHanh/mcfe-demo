"use client";

import { Text, Flex, Space, Container } from "@mantine/core";
import { OneLoginForm } from "@ocean-network-express/mcfe-shared";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <Flex direction="column" align="center" h="100%">
      <div style={{ flex: 0.5 }}></div>
      <Text fw={700}>APP 2 LOGIN</Text>
      <Space h="sm" />
      <div style={{ flex: 1, width: 500 }}>
        <OneLoginForm
          onSuccess={() => {
            router.push("/");
          }}
        />
      </div>
      <div style={{ flex: 1 }}></div>
    </Flex>
  );
}
