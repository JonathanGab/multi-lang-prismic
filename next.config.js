const prismic = require('@prismicio/client');
const sm = require('./sm.json');

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);

  const repository = await client.getRepository();
  // for multilingual content
  const locales = repository.languages.map((lang) => lang.id);
  return {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
      locales,
      defaultLocale: locales[0],
    },
  };
};

module.exports = nextConfig;
