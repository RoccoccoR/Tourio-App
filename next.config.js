/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "en.wikipedia.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "surfiran.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.eventim.de",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.google.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
