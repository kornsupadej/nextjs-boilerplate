import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJest from 'eslint-plugin-jest'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ...pluginJest.configs['flat/recommended'],
    files: ['__specs__/**/*.?(e2e-){test,spec}.?(c|m)[jt]s?(x)'],
    rules: {
      ...pluginJest.configs['flat/recommended'].rules,
      'jest/consistent-test-it': ['error', { fn: 'test' }],
      'jest/valid-title': 'error',
      'jest/no-done-callback': 'error',
      'jest/expect-expect': 'off',
    },
  },
]

export default eslintConfig
