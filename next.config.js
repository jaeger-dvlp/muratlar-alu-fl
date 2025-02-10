/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const subPathPrefix = process.env.NEXT_PUBLIC_APP_SUBPATH_PREFIX || '';

module.exports = {
  i18n,
  reactStrictMode: true,
  basePath: subPathPrefix,
};
