import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Completely disable all development indicators
  devIndicators: false,
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react']
  }
};

export default nextConfig;
