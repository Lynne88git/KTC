import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  roots: ['<rootDir>/test', '<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  preset: 'ts-jest',
  // transformIgnorePatterns: ['node_modules/(?!axios)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/identity-obj-proxy',
    '^axios$': require.resolve('axios'),
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
}

export default config
// /** @type {import('ts-jest').JestConfigWithTsJest} */
// module.exports = {
//   preset: 'ts-jest',
//   setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
// }
