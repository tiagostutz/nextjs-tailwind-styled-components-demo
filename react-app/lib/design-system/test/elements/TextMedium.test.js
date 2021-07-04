import React from "react";
import "jest-styled-components";
import { render, screen } from "../../../../test/test-utils";
import { TextMedium } from "../../elements/TextMedium.style";
import { hasPositionTokens } from "../tailwindTestHelper";

describe("TextMedium Element", () => {
  it("should render the TextMedium styled Component", () => {
    render(<TextMedium>Test Text Medium</TextMedium>);

    const text = screen.getByText(/Test Text Medium/i);

    // element components cannot have positioning style
    expect(hasPositionTokens(text.className)).toBe(false);

    // according to the Design Mock/Spec, medium text (price of the product)
    // have different font size and is bold
    expect(text.className).toMatch(/font-bold/);
    expect(text.className).toMatch(/text-.*/);

    // medium text dont use different font, uses global font family
    expect(text.className).not.toMatch(/font-(serif|sans|mono)$/);
  });
});
