/** @type {import('next').NextConfig} */
import stylexPlugin from "@stylexjs/nextjs-plugin";

const nextConfig = {
  transpilePackages: ["@stylexjs/open-props"],
};

const __dirname = new URL(".", import.meta.url).pathname;
export default stylexPlugin({
  rootDir: __dirname,
})(nextConfig);
