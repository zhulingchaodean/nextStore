import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript:{
    // will still allow production build with type errors 
    ignoreBuildErrors:true,
  }
  /* config options here */
};

export default nextConfig;
