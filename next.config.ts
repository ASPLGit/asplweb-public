// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {

// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
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