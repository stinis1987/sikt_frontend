import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces a minimal standalone build (only required files/deps) for Docker.
  output: "standalone",
};

export default nextConfig;
