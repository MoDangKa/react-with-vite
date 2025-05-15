import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true, // Allows global testing functions like `describe` and `it`
    environment: "jsdom", // Simulates a DOM for React component testing
    setupFiles: "./src/configs/test-setup.ts", // Optional setup file for test configurations
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
