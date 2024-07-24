/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**", // Allow any path under i.imgur.com
      },
    ],
  },
};

export default nextConfig;
