"use client";

import { FC } from "react";
import { Dropdown, Avatar } from "antd";
import { IMainMenuProps } from "./interfaces";
import { useRouter } from "next/navigation";

export const MainMenu: FC<IMainMenuProps> = ({ items }) => {
  const router = useRouter();

  //! Add menu rendering depending on the window.location.pathname
  if (!items) {
    items = [
      {
        key: "1",
        label: "About",
        onClick: async () => {
          router.push("/about");
        },
      },
      {
        key: "2",
        label: "Blog",
        onClick: async () => {
          router.push("/blog");
        },
        disabled: true,
      },
      {
        key: "3",
        label: "Projects",
        onClick: async () => {
          router.push("projects");
        },
        disabled: true,
      },
    ];
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
