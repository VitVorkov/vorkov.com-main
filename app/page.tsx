"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { MenuProps } from "antd";
import { MainMenu } from "../components/menu";
import { MainCarousel } from "../components/carousel";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const router = useRouter();

  const items: MenuProps["items"] = [
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

  return (
    <div
      style={{
        visibility: !mounted ? "hidden" : "visible",
        minHeight: "100vh",
      }}
    >
      <MainCarousel></MainCarousel>
      <MainMenu items={items}></MainMenu>
    </div>
  );
}
