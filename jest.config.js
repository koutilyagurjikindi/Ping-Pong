module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js)$': require.resolve('react-native/jest/preprocessor.js'),
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/src/Game.js',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
};
