"use client";

import { useState, useEffect } from "react";
import { Avatar, Dropdown, Typography } from "antd";
import { useRouter } from "next/navigation";
import type { MenuProps } from "antd";
import { MainMenu } from "../../components/menu";

const { Title, Text, Link, Paragraph } = Typography;

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const router = useRouter();

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
              paddingTop: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar src={"/avatars/Vitalii.png"} size={128} />
          </div>
          <Typography>
            <Title level={4}>Welcome!</Title>
            <Paragraph>
              I am Vitalii Vorkov, a passionate software and hardware engineer
              constantly driven by the pursuit of innovative ideas. This website
              is a personal experiment where I've taken the creative step of
              using Midjourney to create all visuals you'll see here.
            </Paragraph>
            <Paragraph>
              Feel free to explore some (if any) of my
              <Link href={"/projects"}>projects</Link>. Also, I don't frequently
              delve into personal stories, you can find my occasional{" "}
              <Link href={"/blog"}>posts</Link> in Russian, giving you a glimpse
              into my life beyond the engineering projects.
            </Paragraph>
            <Paragraph>
              For a more in-depth look at my professional journey feel free to
              connect with me on{" "}
              <Link href="https://www.linkedin.com/in/vitaliivorkov/">
                LinkedIn
              </Link>{" "}
              or explore my contributions on{" "}
              <Link href="https://github.com/VitVorkov">Github</Link>.{" "}
            </Paragraph>
            <Paragraph>
              On a personal note, I am a happy husband of Kate and a proud
              father of Alex and Ilya. Here are their charming
              Midjourney-generated avatars:
            </Paragraph>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "10px",
              }}
            >
              <Avatar src={"/avatars/Kate.png"} size={100} />
              <Avatar src={"/avatars/Alex.png"} size={100} />
              <Avatar src={"/avatars/Ilya.png"} size={100} />
            </div>
            <Paragraph>
              Thank you for visiting my personal page! Let's make exciting
              things together!
            </Paragraph>
          </Typography>
        </div>
        <MainMenu></MainMenu>
      </div>
    </div>
  );
}
