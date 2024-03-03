export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
    },
    rootDir: 'src',
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png|jpg|css)$': '<rootDir>/test/__ mocks __/fileMock.ts',
    },
}