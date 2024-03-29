/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lean-meditation.s3.ap-southeast-2.amazonaws.com",
      "images-na.ssl-images-amazon.com",
      "avatars.githubusercontent.com",
    ],
    minimumCacheTTL:15
  },
  env: {
    sessionKey: "accessToken",
    user: "user",
  },
};

module.exports = nextConfig;
