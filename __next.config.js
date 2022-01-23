/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  rewrites: async () => [
    {
      source: '/api/auth/:path*',
      destination: '/api/auth/:path*',
    },
    {
      source: `/api/:path*`,
      destination: `${process.env.API_URL}/:path*`,
    },
  ],
};
