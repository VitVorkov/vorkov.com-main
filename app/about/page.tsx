"use client";

import { useState, useEffect } from "react";
import { Avatar, Dropdown, Typography } from "antd";
import { useRouter } from "next/navigation";
import type { MenuProps } from "antd";
import { MainMenu } from "../../components/menu";

const { Text, Link } = Typography;

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const router = useRouter();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Main",
      onClick: async () => {
        router.push("/");
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            textAlign: "left",
            maxWidth: "400px",
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <div
            style={{
              paddingTop: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar src={"/avatars/Vitalii.png"} size={128} />
          </div>
          <br></br>{" "}
          <Text>
            {" "}
            Hi there! My name is Vitalii Vorkov and I am a software and hardware
            engineer who is in a constant search for innovation. This is my
            personal page and, as an experiment, I decided to make all pictures
            for it using Midjourney. Some (if any) of my projects you can find{" "}
            <Link href={"/projects"}>here</Link>, and I write approximately once
            in a decade a blog post that you can read{" "}
            <Link href={"/blog"}>here</Link>, however, the posts are in Russian.{" "}
          </Text>{" "}
          <br></br> <br></br>
          <Text>
            More information about myself can be found on{" "}
            <Link href="https://www.linkedin.com/in/vitaliivorkov/">
              LinkedIn
            </Link>{" "}
            and <Link href="https://github.com/VitVorkov">Github</Link>.{" "}
          </Text>{" "}
          <br></br> <br></br>
          <Text>
            On a personal level, I am a happy husband of Kate and a proud father
            of Alex and Ilya. Please meet their Midjourney generated avatars
            below.
          </Text>{" "}
          <br></br>
          <div
            style={{
              paddingTop: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar src={"/avatars/Kate.png"} size={100} />
            <Avatar src={"/avatars/Alex.png"} size={100} />
            <Avatar src={"/avatars/Ilya.png"} size={100} />
          </div>
        </div>
        <MainMenu items={items}></MainMenu>
      </div>
    </div>
  );
}
