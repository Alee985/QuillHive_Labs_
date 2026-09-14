import type { NextConfig } from "next";

// Set by the GitHub Pages deploy workflow to "/<repo-name>" for project
// pages (e.g. username.github.io/quillhive). Empty for local dev/builds.
const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
