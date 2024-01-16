/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  rootDir: "../../",
  clearMocks: true,
  verbose: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    ".+\\.(css|png|jpg|jpeg|ttf|woff|woff2|svg)$": "jest-transform-stub",
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
        isolatedModules: true,
      },
    ],
    ".+\\.(css|png|jpg|jpeg|ttf|woff|woff2|pdf|svg)$": "jest-transform-stub",
  },
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "ts", "jsx", "tsx"],
};

export default config;
