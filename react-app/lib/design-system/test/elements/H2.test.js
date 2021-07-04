import React from "react";
import "jest-styled-components";
import { render, screen } from "../../../../test/test-utils";
import { H2 } from "../../elements/H2.style";
import { hasPositionTokens } from "../tailwindTestHelper";

describe("H2 Element", () => {
  it("should render the H2 styled Component", () => {
    render(<H2>Test Heading 2</H2>);

    const heading = screen.getByText(/Test Heading 2/i);

    // element components cannot have positioning style
    expect(hasPositionTokens(heading.className)).toBe(false);

    // according to the Design Mock/Spec, titles are basically blue, bold and
    // have some text sizing spec
    expect(heading.className).toMatch(/text-blue.*/);
    expect(heading.className).toMatch(/font-bold/);
    expect(heading.className).toMatch(/text-.*/);

    // h2 titles dont use different font, uses global font family
    expect(heading.className).not.toMatch(/font-(serif|sans|mono)$/);
  });
});
