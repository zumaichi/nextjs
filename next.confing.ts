import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,

    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        hostname: process.env.IMAGES_DOMAIN,
      },
    ],
  },
};

export default nextConfig;
