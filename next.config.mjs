import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: process.env.NODE_ENV === "production" ? "/beauty-salon" : "",
  // output: "export",
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
