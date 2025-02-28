import nextJest from 'next/jest.js'
import { createJsWithBabelEsmPreset } from 'ts-jest'

import type { Config } from 'jest'
import type { JsWithBabelEsmPreset } from 'ts-jest'

/**
 * Enable loading `next.config.ts` in test environment
 */
const createJestConfig = nextJest({
  dir: './',
})
/**
 * Enable writing tests in TypeScript then transform into ESM syntax with babel-jest
 */
const presetConfig: JsWithBabelEsmPreset = createJsWithBabelEsmPreset()
/**
 * Additional Jest configuration
 */
const jestConfig: Config = {
  ...presetConfig,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testRegex: ['(/__specs__/.*|(\\.|/)(test|spec))\\.[jt]sx?$'],
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  /** coverage settings */
  collectCoverageFrom: ['<rootDir>/src/**/*.?(c|m)[jt]s?(x)'],
  coverageDirectory: '<rootDir>/coverage', // need root?
  coverageProvider: 'babel',
  coverageReporters: ['text', 'lcov'],
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  // },
  // passWithNoTests: true,
}

export default createJestConfig(jestConfig)
