/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
