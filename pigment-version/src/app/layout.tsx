import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { css } from "@pigment-css/react";

import "@pigment-css/react/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const DARK = "@media (prefers-color-scheme: dark)";

const htmlClass = css((theme) => ({
  backgroundColor: "white",
  color: "black",
  [DARK]: {
    backgroundColor: "black",
    color: "white",
  },
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${htmlClass}`}>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
