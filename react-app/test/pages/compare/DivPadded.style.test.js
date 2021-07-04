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
});
