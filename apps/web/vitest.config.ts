import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    poolOptions: {
      forks: { execArgv: ["--env-file=.env.test.local"] },
    },
    environment: "jsdom",
    globalSetup: "./src/testing/global-setup-tests.ts",
    setupFiles: "./src/testing/setup-tests.ts",
  },
});
