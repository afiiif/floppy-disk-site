/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: 'lf',
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  bracketSpacing: true,
  useTabs: false,
  tabWidth: 2,
  printWidth: 100,
  arrowParens: 'always',
  trailingComma: 'all',
  embeddedLanguageFormatting: 'off',
  plugins: ['prettier-plugin-tailwindcss'],
};
