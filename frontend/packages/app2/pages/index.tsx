"use client";

import { UserCardApp2 } from "@/components/user-info";
import { Button, Flex, MantineProvider } from "@mantine/core";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();
  const { status } = useSession();

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
      }}
    >
      {status !== "authenticated" ? (
        <Button
          onClick={() => {
            router.push("/login");
          }}
        >
          {" "}
          Login{" "}
        </Button>
      ) : (
        <Flex w="100%" align="center" pl={32} pr={32} pt={32}>
          <div style={{ flex: 1 }}>
            <UserCardApp2 />
          </div>
          <div style={{ flex: 1 }}></div>
          <div style={{ flex: 1 }}></div>
        </Flex>
      )}
    </MantineProvider>
  );
}
