/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: [
      'res.cloudinary.com', 
      'localhost',
      '127.0.0.1',
      'http://localhost:1337/admin/plugins/content-type-builder/content-types/api::blog.blog', 
      'gtmlabs.xyz',
    ],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;