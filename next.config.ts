// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {

// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aplombsoft.com',
        pathname: '/public/images/blogs/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/insights/:slug',
        destination: '/blogs/:slug',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;