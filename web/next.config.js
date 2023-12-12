/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
