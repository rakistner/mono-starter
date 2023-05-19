/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  poweredByHeader: false,
  publicRuntimeConfig: {
    CLIENT_VERSION: process.env.npm_package_version,
    LOG_LEVEL: process.env.LOG_LEVEL,
  },
};

module.exports = nextConfig;
