import { FlatCompat } from '@eslint/eslintrc'
import pluginJest from 'eslint-plugin-jest'
import pluginJestDom from 'eslint-plugin-jest-dom'
import pluginTestingLibrary from 'eslint-plugin-testing-library'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

import type { Linter } from 'eslint'

const __filename: string = fileURLToPath(import.meta.url)
const __dirname: string = dirname(__filename)

const compat: FlatCompat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig: Linter.Config[] = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  pluginJest.configs['flat/recommended'],
  pluginJestDom.configs['flat/recommended'],
  pluginTestingLibrary.configs['flat/react'],
  {
    files: ['__specs__/**/*.?(e2e-){test,spec}.?(c|m)[jt]s?(x)'],
    rules: {
      'jest/consistent-test-it': ['error', { fn: 'test' }],
      'jest/valid-title': 'error',
      'jest/no-done-callback': 'error',
      'jest/expect-expect': 'off',
    },
  },
]

export default eslintConfig
