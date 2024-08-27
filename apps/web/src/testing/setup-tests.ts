import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { afterAll, afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
});

afterAll(() => {
  vi.restoreAllMocks();
});
