import Home from "./page";
import { render, screen } from "@/testing/test-utils";
import { expect, it } from "vitest";

it("should pass", () => {
  render(<Home />);

  const p = screen.getByText("hello");

  expect(p).toBeInTheDocument();
});
