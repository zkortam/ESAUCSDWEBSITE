/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ESAUCSDWEBSITE',
  images: {
    unoptimized: true,
  },
  // This is needed for GitHub Pages deployment
  assetPrefix: '/ESAUCSDWEBSITE/',
}

module.exports = nextConfig 