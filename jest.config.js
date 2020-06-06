module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js)$': require.resolve('react-native/jest/preprocessor.js'),
  },
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/src/Game.js',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/node_modules/@react-navigation/stack/lib/commonjs/views/assets/back-icon',
  },
};
