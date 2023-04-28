/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    incrementalCacheHandlerPath: process.env.CUSTOM_CACHE_HANDLER
      ? require.resolve('./cache-handler.js')
      : undefined,
  },
  images: {
    domains: ['cdn.discordapp.com'],
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
}

module.exports = nextConfig
