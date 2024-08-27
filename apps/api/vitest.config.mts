import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    poolOptions: {
      forks: { execArgv: ["--env-file=.env.test.local"] },
    },
    globalSetup: "./src/testing/global-setup-tests.ts",
    setupFiles: "./src/testing/setup-tests.ts",
  },
});
