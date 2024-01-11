import "./globals.css";

import { globalTokens as $ } from "./globalTokens.stylex";
import * as stylex from "@stylexjs/stylex";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html {...stylex.props(styles.html, styles.reset)} lang="en">
      <body {...stylex.props(styles.reset, styles.body)}>{children}</body>
    </html>
  );
}

const styles = stylex.create({
  html: {
    colorScheme: "dark",
  },
  reset: {
    minHeight: "100%",
    margin: 0,
    padding: 0,
  },
  body: {
    color: "white",
    backgroundColor: "black",
  },
});