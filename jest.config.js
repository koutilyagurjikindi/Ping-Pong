module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js)$': require.resolve('react-native/jest/preprocessor.js'),
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve(
      '<rootDir>/fileTransformer.js',
    ),
  },
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/src/Game.js',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
};
