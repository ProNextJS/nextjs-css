/** @type {import('next').NextConfig} */
const { withPigment, extendTheme } = require("@pigment-css/nextjs-plugin");
const nextConfig = {};

module.exports = withPigment(nextConfig, {
  theme: extendTheme({
    colors: {
      background: "white",
      foreground: "black",
    },
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
