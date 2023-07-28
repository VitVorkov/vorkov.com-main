"use client";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
  const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;
  return (
    <div
      style={{
        minHeight: "100vh",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Spin indicator={antIcon}></Spin>
    </div>
  );
}
