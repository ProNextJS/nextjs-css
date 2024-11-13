import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bootstrap Implementation",
  description: "Demo of Bootstrap Toolkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
