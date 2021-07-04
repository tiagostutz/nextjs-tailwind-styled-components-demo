import React from "react";
import "jest-styled-components";
import { render, screen } from "../test-utils";
import { H1 } from "../../elements/H1";
import { hasPositionTokens } from "../tailwindTestHelper";

describe("H1 Element", () => {
  it("should render the H1 styled Component", () => {
    render(<H1>Test Heading</H1>);

    const heading = screen.getByText(/Test Heading/i);

    expect(heading).toHaveClass("text-3xl text-blue-700 font-bold");
  });

  it("should render the H1 styled Component with additional CSS classes", () => {
    render(<H1>Test Heading</H1>);

    const heading = screen.getByText(/Test Heading/i);

    expect(hasPositionTokens(heading.className)).toBe(false);
    expect(heading).toHaveClass("text-3xl text-blue-700 font-bold");
  });
});
