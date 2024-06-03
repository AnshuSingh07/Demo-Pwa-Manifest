import { default as withPWA } from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const pwaConfig = withPWA({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: "public",
  disable: false,
  //   runtimeCaching: true,
  //   buildExcludes: [/middleware-manifest.json$/],
  fallbacks: {
    //image: "/static/images/fallback.png",
    document: "/offline", // if you want to fallback to a custom page rather than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  },
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});

const nextConfig = {
  // ... other options you like
};

export default pwaConfig(nextConfig);
