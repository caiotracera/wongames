module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    // '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
  },
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/utils/apollo.ts',
    '!src/utils/apolloCache.ts',
    '!src/types/**/*.d.ts',
    '!src/graphql/**/*.ts',
    '!src/**/mock.ts',
  ],
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '@/utils/(.*)': '<rootDir>/src/utils/$1',
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/styles/(.*)': '<rootDir>/src/styles/$1',
  },
};
