/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/a/**',
          },
        ],
      },
}

// /a/ACg8ocJM_14cVzZogtCo2Iya5c6j0UZgI7wNT1l2p_tWrzC6=s96-

module.exports = nextConfig
