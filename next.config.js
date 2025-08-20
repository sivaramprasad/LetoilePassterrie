/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // tells Next.js to generate static HTML
  basePath: '', // if your app is not in subfolder, leave blank
  assetPrefix: '', // set CDN/static prefix if needed
  images: {
    unoptimized: true, // required for static export
  },
  trailingSlash: true, // helps with static hosting (adds / to URLs)
};

module.exports = nextConfig;
