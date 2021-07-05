import React from "react";
import "jest-styled-components";
import { render, screen } from "../../../../test/test-utils";
import { DivTopPadded } from "../../elements/DivPadded.style";

describe("DivPadded Element", () => {
  it("should render the DivPadded styled Component", () => {
    render(<DivTopPadded>Test Padded</DivTopPadded>);

    const div = screen.getByText(/Test Padded/i);

    expect(div).toHaveClass("pt-8 px-4");
  });
});
