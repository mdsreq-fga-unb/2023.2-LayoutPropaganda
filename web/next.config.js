/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "layout.learnwithpadas.com"],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
