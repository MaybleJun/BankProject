module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transformIgnorePatterns: ['node_modules'],
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
      '\\.(png|jpg|jpeg|gif|webp|svg|pdf)$': '<rootDir>/__mocks__/fileMock.js',
    },
  };
  