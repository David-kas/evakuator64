import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  turbopack: {
    root,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 85],
  },
};

export default nextConfig;
