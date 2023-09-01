const nextra = require('nextra');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
};

/** @type {import('nextra').NextraConfig} */
const nextraConfig = {
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  flexsearch: { codeblocks: false },
  defaultShowCopyCode: true,
};

module.exports = nextra(nextraConfig)(nextConfig);
