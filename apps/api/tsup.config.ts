import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: ["src/index.ts"],
  noExternal: ["@repo"],
  clean: true,
  format: ["cjs"],
  ...options,
}));
