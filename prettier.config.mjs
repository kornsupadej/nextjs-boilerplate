/** @type {import('prettier').Config} */
const prettierConfig = {
  /**
   * Base options
   */
  printWidth: 80,
  tabWidth: 2,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'es5',
  semi: false,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  /**
   * Plugin option
   */
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrderParserPlugins: ['typescript', 'jsx'],
  importOrder: [
    '^(react/.*)$|^(react$)',
    '<THIRD_PARTY_MODULES>',
    '<THIRD_PARTY_TS_TYPES>',
    '<TS_TYPES>',
    '^@/hoc/(.*)$',
    '^@/lib/(.*)$',
    '^@/app/(.*)$',
    '^@/pages/(.*)$',
    '^@/components/(.*)$',
    '^@/hooks/(.*)$',
    '^./(.*)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}

export default prettierConfig
