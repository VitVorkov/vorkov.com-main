"use client";

import { FC } from "react";
import { Dropdown, Avatar } from "antd";
import { IMainMenuProps } from "./interfaces";
import { useRouter } from "next/navigation";

export const MainMenu: FC<IMainMenuProps> = ({ items }) => {
  const router = useRouter();

  if (!items && typeof window !== "undefined") {
    items = [];
    let key = 1;
    if (window.location.pathname !== "/") {
      items.push({
        key: key.toString(),
        label: "Main",
        onClick: async () => {
          router.push("/");
        },
      });
      key++;
    }
    if (window.location.pathname !== "/about") {
      items.push({
        key: key.toString(),
        label: "About",
        onClick: async () => {
          router.push("/about");
        },
      });
      key++;
    }
    items.push({
      key: key.toString(),
      label: "Blog",
      onClick: async () => {
        router.push("https://blog.vorkov.com");
      },
    });
    key++;
    if (window.location.pathname !== "/projects") {
      items.push({
        key: key.toString(),
        label: "Projects",
        onClick: async () => {
          router.push("/projects");
        },
        disabled: false,
      });
      key++;
    }
  }

  return (
    <Dropdown menu={{ items }}>
      <Avatar
        src={"/logo/logo.png"}
        style={{ position: "absolute", top: "3%", right: "3%" }}
        size={48}
      />
    </Dropdown>
  );
};
