/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx$/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
