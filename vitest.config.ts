import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Allows global testing functions like `describe` and `it`
    environment: "jsdom", // Simulates a DOM for React component testing
    setupFiles: "./src/test/setup.ts", // Optional setup file for test configurations
  },
});
