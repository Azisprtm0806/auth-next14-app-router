/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "adidas.co.id",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
