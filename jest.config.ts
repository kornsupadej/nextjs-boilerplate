import nextJest from 'next/jest.js'
import { createJsWithTsEsmPreset } from 'ts-jest'

import type { Config } from 'jest'
import type { JsWithTsEsmPreset } from 'ts-jest'

/**
 * Enable loading `next.config.ts` in test environment
 */
const createJestConfig = nextJest({
  dir: './',
})
/**
 * Enable writing tests in TypeScript then transform into ESM syntax
 */
const presetConfig: JsWithTsEsmPreset = createJsWithTsEsmPreset()
/**
 * Additional Jest configuration
 */
const jestConfig: Config = {
  ...presetConfig,
  rootDir: 'src',
  setupFilesAfterEnv: ['../jest.setup.ts'],
  testMatch: ['../__specs__/**/?(*.)+(spec|test).?(c|m)[jt]s?(x)'],
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  passWithNoTests: true,
}

export default createJestConfig(jestConfig)
