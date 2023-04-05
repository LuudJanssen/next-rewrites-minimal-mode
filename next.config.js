/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    appDir: true,
  },

  trailingSlash: true,

  rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        {
          source: "/",
          destination: "/en-US/",
        },
        {
          source: "/page-source",
          destination: "/en-US/page-destination",
        },
        {
          source: "/:slug",
          destination: "/en-US/:slug",
        },
        {
          source: "/nl/:slug",
          destination: "/nl-NL/:slug",
        },
      ],
      fallback: [],
    };
  },
};

module.exports = nextConfig;
