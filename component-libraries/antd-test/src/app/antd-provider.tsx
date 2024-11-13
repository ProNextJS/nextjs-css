"use client";
import { ConfigProvider, theme } from "antd";

export default function AntdProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}
