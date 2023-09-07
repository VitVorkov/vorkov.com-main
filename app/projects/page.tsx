"use client";

import { useState, useEffect } from "react";
import { Typography } from "antd";
import { MainMenu } from "../../components/menu";
import { ProjectsList } from "../../components/projects";

const { Title, Paragraph } = Typography;

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

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
          <Typography>
            <Title level={3} style={{ textAlign: "center" }}>
              Projects
            </Title>
            <Paragraph>
              Explore my portfolio of self-crafted and collaborative projects
              below.
            </Paragraph>
          </Typography>
          <ProjectsList></ProjectsList>
        </div>
      </div>
      <MainMenu></MainMenu>
    </div>
  );
}
