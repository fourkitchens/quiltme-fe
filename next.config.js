/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    })
    return config;
  },
}

module.exports = nextConfig
