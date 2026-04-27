import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const isUserSite = repoName?.endsWith(".github.io") ?? false;
const githubPagesBasePath = isGithubPages && repoName && !isUserSite ? `/${repoName}` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
