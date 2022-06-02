/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },

  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
  },
};

module.exports = nextConfig;
