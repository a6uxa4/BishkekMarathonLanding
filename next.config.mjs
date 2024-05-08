import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      "@nextui-org/react",
      "react-intersection-observer",
    ],
  },
};

export default withNextIntl(nextConfig);
