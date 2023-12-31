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
          {
            protocol: 'https',
            hostname: 'i.imgur.com',
            port: '',
            pathname: '/WbQnbas.png/**',
          },
          {
            protocol: 'https',
            hostname: 'rukminim1.flixcart.com',
            port: '',
            pathname: '/fk-p-flap/**',
          },
        ],
      },
}
module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};

// /a/ACg8ocJM_14cVzZogtCo2Iya5c6j0UZgI7wNT1l2p_tWrzC6=s96-

module.exports = nextConfig
