/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },

  i18n: {
    locales: ["de-de", "en-us"],
    defaultLocale: "de-de",
  },
};

module.exports = nextConfig;
