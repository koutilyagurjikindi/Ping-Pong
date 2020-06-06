module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js)$$': 'babel-jest',
    '^.+\\.(js)$': require.resolve('react-native/jest/preprocessor.js'),
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  transformIgnorePatterns: ['<rootDir>/node_modules/react-native'],
  moduleNameMapper: {
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
};
