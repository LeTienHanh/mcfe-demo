"use client";

import { UserInfoType } from "mcfeshared";
import { UserCardApp2 } from "@/components/user-info";
import { MantineProvider, Button, Flex } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();
  const [user] = useLocalStorage<UserInfoType>({
    key: "user-info",
  });

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
      }}
    >
      {!user ? (
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
