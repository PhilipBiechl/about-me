import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: '/about-me/',
  basePath: '/about-me',
  output: 'export'
};

export default nextConfig;