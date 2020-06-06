module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js)$': require.resolve('react-native/jest/preprocessor.js'),
  },
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
};
