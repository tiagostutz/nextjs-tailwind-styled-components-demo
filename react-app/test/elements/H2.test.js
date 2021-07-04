import React from "react";
import "jest-styled-components";
import { render, screen } from "../test-utils";
import { H2 } from "../../elements/H2";
import { hasPositionTokens } from "../tailwindTestHelper";

describe("H2 Element", () => {
  it("should render the H2 styled Component", () => {
    render(<H2>Test Heading 2</H2>);

    const heading = screen.getByText(/Test Heading 2/i);

    expect(heading).toHaveClass("text-lg text-blue-700 font-bold");
  });

  it("should render the H2 styled Component with additional CSS classes", () => {
    render(<H2>Test Heading 2</H2>);

    const heading = screen.getByText(/Test Heading 2/i);

    expect(hasPositionTokens(heading.className)).toBe(false);
    expect(heading).toHaveClass("text-lg text-blue-700 font-bold");
  });
});
