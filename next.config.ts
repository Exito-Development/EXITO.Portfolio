import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // React <ViewTransition> integration: page navigations fade + shift (see globals.css).
    viewTransition: true,
  },
};

export default nextConfig;
