/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8010/api/:path*', // Proxy to Backend
      },
    ]
  },
}

module.exports = nextConfig
