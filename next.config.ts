import type { NextConfig } from "next";

const oldLanguages =
  "ar|be|bg|ca|cs|da|de|el|es|et|fa|fi|fr|ga|gl|hi|hr|hu|id|is|it|iw|ja|ko|lt|lv|mk|ms|mt|nl|no|pl|pt|ro|ru|sk|sl|sq|sr|sv|th|tl|tr|uk|vi|zh-CN|zh-TW";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/hero-flyover.mp4",
        headers: [
          { key: "Content-Type", value: "video/mp4" },
          { key: "Accept-Ranges", value: "bytes" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/casa-la-playa-chef-menus.pdf", destination: "/sample-menu", permanent: true },
      { source: "/weddings", destination: "/about", permanent: true },
      { source: "/floorplan", destination: "/gallery", permanent: true },
      { source: "/blueprints", destination: "/gallery", permanent: true },
      { source: "/ical", destination: "/rates", permanent: true },
      { source: "/gallery/page/:n", destination: "/gallery", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: `/:lang(${oldLanguages})`, destination: "/", permanent: true },
      { source: `/:lang(${oldLanguages})/:path*`, destination: "/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
