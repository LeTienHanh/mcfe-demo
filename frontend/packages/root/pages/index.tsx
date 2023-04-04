"use client";

import UserCardRoot from "@/components/user-info";
import { Button, Grid, MantineProvider, Center, Text } from "@mantine/core";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { LogoutButton } from "@ocean-network-express/mcfe-shared/esm/components";

// @ts-ignore
const UserCardApp1 = dynamic(() => import("app1/user-info"), {
  loading: () => <p>Loading app1 user information</p>,
  ssr: false,
});

const UserCardApp2 = dynamic(() => import("app2/components/user-info"), {
  loading: () => <p>Loading app2 user information</p>,
  ssr: false,
});

export default function RootPage() {
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return (
      <Center>
        <Text>Loading...</Text>
      </Center>
    );
  }

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
        <Grid w="100%" pl={32} pr={32} pt={32}>
          <Grid.Col span={4}>
            <UserCardRoot />
          </Grid.Col>
          <Grid.Col span={4}>
            <UserCardApp1 />
          </Grid.Col>
          <Grid.Col span={4}>
            <UserCardApp2 />
          </Grid.Col>
          <Grid.Col span={12}>
            <Center>
              <LogoutButton />
            </Center>
          </Grid.Col>
        </Grid>
      )}
    </MantineProvider>
  );
}
