import { AppShell, useMantineTheme } from "@mantine/core";
import React from "react";
import { OneFooter } from "./one-footer";
import { OneHeader } from "./one-header";
import { OneNavbar } from "./one-navbar";

export interface OneAppShellProps {
  children: React.ReactNode;
  title?: String;
}

export const OneAppShell: React.FC<OneAppShellProps> = ({
  children,
  title,
}: OneAppShellProps) => {
  const theme = useMantineTheme();

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<OneNavbar />}
      footer={
        <OneFooter
          links={[
            { label: "Contact" },
            { label: "Privacy" },
            { label: "Store" },
          ]}
        />
      }
      header={
        <OneHeader
          title={title}
          links={[
            {
              label: "Features",
              link: "",
            },
            {
              label: "Learn",
              link: "",
              links: [
                {
                  label: "Documentation",
                  link: "",
                },
                {
                  label: "Resources",
                  link: "",
                },
              ],
            },
            {
              label: "About",
              link: "",
            },
            {
              label: "Pricing",
              link: "",
            },
            {
              label: "Support",
              link: "",
              links: [
                {
                  label: "FAQ",
                  link: "",
                },
              ],
            },
          ]}
        />
      }
    >
      {children}
    </AppShell>
  );
};
