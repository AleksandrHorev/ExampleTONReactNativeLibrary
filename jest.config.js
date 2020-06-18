// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/*.[jt]s?(x)'],
  preset: 'react-native',
  globalSetup: './jestSetup.js',
  transformIgnorePatterns: [
      'node_modules/(?!(react-native|react-navigation|@react-navigation|@react-native-community|@react-native-firebase|rn-fetch-blob|react-native-fs|ton-client-react-native-js|react-redux))',
  ],
  moduleFileExtensions: ['js', 'json', 'json5', 'jsx'],
  transform: {
      '^.+\\.json5$': 'json5-jest',
  },
  testTimeout: 10000, // 30 000
  restoreMocks: true,
  clearMocks: true,
  resetMocks: true
};
