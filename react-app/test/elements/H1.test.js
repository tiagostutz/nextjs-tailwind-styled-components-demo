import React from "react";
import "jest-styled-components";
import { render, screen } from "../test-utils";
import { H1 } from "../../elements/H1";
import { hasPositionTokens } from "../tailwindTestHelper";

describe("H1 Element", () => {
  it("should render the H1 styled component with basic design spec", () => {
    render(<H1>Test Heading</H1>);

    const heading = screen.getByText(/Test Heading/i);

    // element components cannot have positioning style
    expect(hasPositionTokens(heading.className)).toBe(false);

    // according to the Design Mock/Spec, titles are basically blue, bold and
    // have some text sizing spec
    expect(heading.className).toMatch(/text-blue.*/);
    expect(heading.className).toMatch(/font-bold/);
    expect(heading.className).toMatch(/text-.*/);

    // titles dont use different font, uses global font family
    expect(heading.className).not.toMatch(/font-(serif|sans|mono)$/);
  });
});
