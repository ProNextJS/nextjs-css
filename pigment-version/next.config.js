/** @type {import('next').NextConfig} */
const { withPigment, extendTheme } = require("@pigment-css/nextjs-plugin");
const nextConfig = {};

module.exports = withPigment(nextConfig, {
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
