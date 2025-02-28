/** @type {import('jest').Config} */
const jestConfig = {
  testMatch: ['__specs__/**/*.?(e2e-){test,spec}.?(c|m)[jt]s?(x)'],
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  coverageDirectory: '.coverage',
  coverageProvider: 'babel',
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  passWithNoTests: true,
}

export default jestConfig
