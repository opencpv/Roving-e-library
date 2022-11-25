/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["192.168.8.112"],
  },
};

module.exports = nextConfig;
