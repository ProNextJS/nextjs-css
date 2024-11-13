import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";

import AntdProvider from "./antd-provider";
import "./globals.css";

import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AntD Implementation",
  description: "Demo of AntD Toolkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <AntdProvider>
            <Layout className={styles.layout}>{children}</Layout>
          </AntdProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
