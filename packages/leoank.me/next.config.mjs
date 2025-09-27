import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "ts", "js", "jsx", "md", "mdx"],
};

const withMDX = createMDX();

export default withMDX(nextConfig);
