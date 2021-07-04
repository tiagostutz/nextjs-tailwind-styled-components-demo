import React from "react";
import "jest-styled-components";
import { render, screen } from "../test-utils";
import { H2 } from "../../elements/H2";

describe("H2 Element", () => {
  it("should render the H2 styled Component", () => {
    render(<H2>Test Heading 2</H2>);

    const heading = screen.getByText(/Test Heading 2/i);

    expect(heading).toHaveClass("text-lg text-blue-700 font-bold");
  });

  it("should render the H2 styled Component with additional CSS classes", () => {
    render(<H2 className="mb-2">Test Heading 2</H2>);

    const heading = screen.getByText(/Test Heading 2/i);

    expect(heading).toHaveClass("text-lg text-blue-700 font-bold");
    expect(heading).toHaveClass("mb-2");

    expect(heading.className).toBe("text-lg text-blue-700 font-bold mb-2");
  });
});
