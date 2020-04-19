module.exports = {
  testEnvironment: 'jest-environment-jsdom-sixteen',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/public/', '<rootDir>/node_modules/', '^.+\\.(d.ts)$'],
  testMatch: ['<rootDir>/src/**/?(*.)(test|spec).{js,jsx,ts,tsx}'],
  coverageProvider: 'v8',
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/node_modules/react-scripts/config/jest/babelTransform.js',
    '^.+\\.css$': '<rootDir>/node_modules/react-scripts/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/node_modules/react-scripts/config/jest/fileTransform.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    // Makes it so that `@import styles from './styles'` works
    // `className={styles.className} => className="className"` during tests
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
    // Fallback for loading any other src files. Ignores src/@types directory and any other directories that start with '@'
    '^src/(?!@)(.*)': '<rootDir>/src/$1',
  },
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.js'],
  roots: ['<rootDir>/src'],
};
