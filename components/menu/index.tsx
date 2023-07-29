"use client";

import { FC } from "react";
import { Dropdown, Avatar } from "antd";
import { IMainMenuProps } from "./interfaces";
import { useRouter } from "next/navigation";

export const MainMenu: FC<IMainMenuProps> = ({ items }) => {
  const router = useRouter();

  if (!items) {
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
    if (window.location.pathname !== "/blog") {
      items.push({
        key: key.toString(),
        label: "Blog",
        onClick: async () => {
          router.push("/blog");
        },
        disabled: true,
      });
      key++;
    }
    if (window.location.pathname !== "/projects") {
      items.push({
        key: key.toString(),
        label: "Projects",
        onClick: async () => {
          router.push("/projects");
        },
        disabled: true,
      });
      key++;
    }
  }

  return (
    <Dropdown menu={{ items }}>
      <Avatar
        src={"/logo/logo.png"}
        style={{ position: "absolute", top: "3%", right: "3%" }}
      />
    </Dropdown>
  );
};
