const path = require('path');

const APP_URL =
  process.env.APP_URL ||
  (process.env.VERCEL && `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`) ||
  `${process.env.PROTOCOL || "http"}://${process.env.HOST || "localhost"}:${process.env.PORT || 3000}`;

/**
 * @type {import("next").NextConfig}
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const nextConfig = {
  env: {
    APP_URL,
  },
  reactStrictMode: true,
  redirects: async () => {
    const arr = [
      { source: '/contact', destination: '/', permanent: false },
      { source: '/social.png', destination: '/api/opengraph/article', permanent: false },
    ];

    if (process.env.NEXT_PUBLIC_REDIRECT_HOST) {
      arr.push({
        source: '/',
        has: [{ type: 'host', value: process.env.NEXT_PUBLIC_REDIRECT_HOST }],
        destination: APP_URL,
        permanent: false,
      });
    }

    return arr;
  },
  rewrites: async () => [
    {
      source: '/.well-known/security.txt',
      destination: '/security.txt',
    },
  ],
  swcMinify: true,
  trailingSlash: false,
  webpack: (config, { isServer }) => {
    config.cache = false;
    config.module.rules.push(
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      }
    );

    // Ensure that the resolve object has fullySpecified set to false for Next.js 12+
    if (!isServer) {
      config.resolve.fullySpecified = false;
    }

    return config;
  },
};

module.exports = nextConfig;
