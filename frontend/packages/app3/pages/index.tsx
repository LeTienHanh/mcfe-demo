"use client";

import App1UserInfo from "@/components/user-info";
import {
  Button,
  Grid,
  AppShell,
  Center,
  Text,
  useMantineTheme,
  Navbar,
  MediaQuery,
  Aside,
  Footer,
  Header,
  Burger,
} from "@mantine/core";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import {
  OneLogoutButton,
  OneAppShell,
} from "@ocean-network-express/mcfe-shared";

// @ts-ignore
// const UserCardApp1 = dynamic(() => import("app1/user-info"), {
//   loading: () => <p>Loading app1 user information</p>,
//   ssr: false,
// });

const App2LineChart = dynamic(() => import("app2/components/app2-line-chart"), {
  loading: () => <p>Loading app2 component</p>,
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

  if (status !== "authenticated") {
    return (
      <Button
        onClick={() => {
          router.push("/login");
        }}
      >
        {" "}
        Login{" "}
      </Button>
    );
  }

  return (
    <OneAppShell title={"APP 3"}>
      <Grid w="100%" pl={32} pr={32} pt={32}>
        <Grid.Col span={2}>
          <App1UserInfo />
        </Grid.Col>
        <Grid.Col span={6}>{<App2LineChart />}</Grid.Col>
        <Grid.Col span={4}>{/* <UserCardApp2 /> */}</Grid.Col>
        <Grid.Col span={12}>
          <Center>
            <OneLogoutButton />
          </Center>
        </Grid.Col>
      </Grid>
    </OneAppShell>
  );
}
