import React from "react";
import "jest-styled-components";
import { render, screen } from "../test-utils";
import { TextLight } from "../../elements/TextLight.style";
import { hasPositionTokens } from "../tailwindTestHelper";

describe("TextLight Element", () => {
  it("should render the TextLight styled Component", () => {
    render(<TextLight>Test Text Medium</TextLight>);

    const text = screen.getByText(/Test Text Medium/i);

    // element components cannot have positioning style
    expect(hasPositionTokens(text.className)).toBe(false);

    // according to the Design Mock/Spec, light text (almost transparent text)
    // is not bold and is gray shadded
    expect(text.className).toMatch(/text-gray.*/);
    expect(text.className).not.toMatch(/font-bold/);

    // medium text dont use different font, uses global font family
    expect(text.className).not.toMatch(/font-(serif|sans|mono)$/);
  });
});
