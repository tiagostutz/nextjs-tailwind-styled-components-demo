import React from "react";
import "jest-styled-components";
import { render, screen } from "../../test-utils";
import { DivPadded } from "../../../pages/compare/DivPadded.style";

describe("DivPadded Element", () => {
  it("should render the DivPadded styled Component", () => {
    render(<DivPadded>Test Padded</DivPadded>);

    const div = screen.getByText(/Test Padded/i);

    expect(div).toHaveClass("pt-8 px-4");
  });

  it("should render the DivPadded styled Component with additional CSS classes", () => {
    render(<DivPadded className="pl-0 pr-4">Test Padded</DivPadded>);

    const div = screen.getByText(/Test Padded/i);

    expect(div).toHaveClass("pt-8 px-4");
    expect(div).toHaveClass("pl-0 pr-4");
    expect(div).not.toHaveClass("pl-4");

    expect(div.className).toBe("pt-8 px-4 text-left pl-0 pr-4");
  });
});
