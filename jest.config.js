/** @type {import('jest').Config} */
const config = {
  verbose: true,
  coverageDirectory: "<rootDir>/src/tests/reports",
  coverageReporters: ["json", ["text"]],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};

export default config;
