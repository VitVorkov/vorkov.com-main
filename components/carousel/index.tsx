"use client";

import { FC } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import styles from "./carousel.module.css";

export const MainCarousel: FC = () => {
  return (
    <Carousel className={styles.carousel}>
      <div>
        <Image src={"/carousel/childhood.png"} fill alt="Childhood" />
        <h2 className={styles.childhood}>
          Tolyatti (Russia) <br></br> 1986 - 2003
        </h2>
      </div>
      <div>
        <Image src={"/carousel/university.png"} fill alt="University" />
        <h2 className={styles.university}>
          Samara (Russia) <br></br> 2003 - 2013
        </h2>
      </div>
      <div>
        <Image src={"/carousel/phd.png"} fill alt="PhD" />
        <h2 className={styles.phd}>
          Leuven (Belgium) <br></br> 2013 - 2020
        </h2>
      </div>
      <div>
        <Image src={"/carousel/respiq.png"} fill alt="RespiQ" />
        <h2 className={styles.respiq}>
          Leiden (Holland) <br></br> 2019 - 2023
        </h2>
      </div>
      <div>
        <Image src={"/carousel/future.png"} fill alt="Future" />
        <h2 className={styles.future}>
          To be defined <br></br> 2023 onwards
        </h2>
      </div>
    </Carousel>
  );
};
