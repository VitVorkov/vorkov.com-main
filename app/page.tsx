"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MainMenu } from "../components/menu";
import { MainCarousel } from "../components/carousel";

export default function Home() {
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
      <MainCarousel></MainCarousel>
      <MainMenu></MainMenu>
    </div>
  );
}
