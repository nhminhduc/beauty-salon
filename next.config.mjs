import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/beauty-salon",
  output: "export",
  reactStrictMode: true,
};

module.exports = withNextIntl(nextConfig);
