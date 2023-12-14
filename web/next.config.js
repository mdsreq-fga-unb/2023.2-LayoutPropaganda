/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "layout.learnwithpadas.com", "www.google.com.br"],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
