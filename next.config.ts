import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      // REPLACE: add your image CDN domain when using real screenshots
    ],
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig
