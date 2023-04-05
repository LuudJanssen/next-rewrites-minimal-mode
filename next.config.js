/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    appDir: true,
  },

  rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        {
          source: "/page-source",
          destination: "/page-destination",
        },
        {
          source: "/:slug",
          destination: "/:slug",
        },
      ],
      fallback: [],
    };
  },
};

module.exports = nextConfig;
