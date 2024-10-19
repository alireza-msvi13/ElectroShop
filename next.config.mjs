/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'store-api-deploy.vercel.app',
          port: '',
          pathname: '/public/covers/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  