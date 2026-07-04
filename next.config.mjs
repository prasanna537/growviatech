/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    VITE_WEB3FORMS_KEY: process.env.VITE_WEB3FORMS_KEY,
  },
  turbopack: {},
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'import.meta.env.VITE_WEB3FORMS_KEY': JSON.stringify(process.env.VITE_WEB3FORMS_KEY),
      })
    );
    return config;
  },
}

export default nextConfig
