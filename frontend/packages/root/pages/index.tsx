"use client";

import { UserInfoType } from "mcfeshared";
import { MantineProvider, Button, Grid } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import UserCardRoot from "@/components/user-info";

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
        </Grid>
      )}
    </MantineProvider>
  );
}
