"use client";

import { App2LineChart } from "@/components/line-chart";
import { Button, Flex, Center } from "@mantine/core";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  OneLogoutButton,
  OneAppShell,
} from "@ocean-network-express/mcfe-shared";

export default function RootPage() {
  const router = useRouter();
  const { status } = useSession();

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
    <OneAppShell title={"APP 2"}>
      <Flex w="100%" align="center" h={400} pl={32} pr={32} pt={32}>
        <div style={{ flex: 1, height: "100%" }}>
          <App2LineChart />
        </div>

        <div style={{ flex: 1 }}></div>
      </Flex>

      <Center pt={40}>
        <OneLogoutButton />
      </Center>
    </OneAppShell>
  );
}
