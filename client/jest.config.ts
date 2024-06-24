
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
    "\\.(jpg|jpeg|png|gif|webp)$": "<rootDir>/fileMock.ts",
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};