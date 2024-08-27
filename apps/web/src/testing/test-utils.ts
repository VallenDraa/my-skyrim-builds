import * as React from "react";
import userEvent from "@testing-library/user-event";
import { RenderOptions, render as rtlRender } from "@testing-library/react";

const render = (ui: React.ReactNode, options: RenderOptions = {}) => {
  return rtlRender(ui, {
    ...options,
  });
};

export function doNothingForMsFn<T>(ms: number) {
  return (..._args: T[]) => new Promise<void>(res => setTimeout(res, ms));
}

export * from "@testing-library/react";
// override React Testing Library's render with our own
export { render, userEvent };
