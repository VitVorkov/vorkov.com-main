"use client";

import { useRouter } from "next/navigation";
import type { MenuProps } from "antd";
import { Avatar, Dropdown, Carousel } from "antd";
import Image from "next/image";
import styles from "./carousel.module.css";
import { useState, useEffect } from "react";

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
      <Carousel className={styles.carousel}>
        <div>
          <Image src={"/images/00_Childhood.png"} fill alt="Childhood" />
          <h2 className={styles.childhood}>
            Tolyatti (Russia) <br></br> 1986 - 2003
          </h2>
        </div>
        <div>
          <Image src={"/images/01_University.png"} fill alt="University" />
          <h2 className={styles.university}>
            Samara (Russia) <br></br> 2003 - 2013
          </h2>
        </div>
        <div>
          <Image src={"/images/02_PhD.png"} fill alt="PhD" />
          <h2 className={styles.phd}>
            Leuven (Belgium) <br></br> 2013 - 2020
          </h2>
        </div>
        <div>
          <Image src={"/images/03_RespiQ.png"} fill alt="RespiQ" />
          <h2 className={styles.respiq}>
            Leiden (Holland) <br></br> 2019 - 2023
          </h2>
        </div>
        <div>
          <Image src={"/images/04_Future.png"} fill alt="Future" />
          <h2 className={styles.future}>
            To be defined <br></br> 2023 onwards
          </h2>
        </div>
      </Carousel>

      <Dropdown menu={{ items }}>
        <Avatar
          src={"/images/05_Vitalii_midjourney.png"}
          style={{ position: "absolute", top: "3%", right: "3%" }}
        />
      </Dropdown>
    </div>
  );
}
