import { withPigment, extendTheme } from "@pigment-css/nextjs-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPigment(nextConfig, {
  theme: extendTheme({
    colorSchemes: {
      light: {
        colors: {
          background: "white",
          foreground: "black",
        },
      },
      dark: {
        colors: {
          background: "black",
          foreground: "white",
        },
      },
    },
  }),
});
