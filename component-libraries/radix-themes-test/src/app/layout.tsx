import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme, Container } from "@radix-ui/themes";

import "./globals.css";

import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radix Themes Implementation",
  description: "Demo of Radix Themes Toolkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark">
          <Container>{children}</Container>
        </Theme>
      </body>
    </html>
  );
}
