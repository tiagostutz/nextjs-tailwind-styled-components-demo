import React from "react";
import "jest-styled-components";
import { render, screen } from "../../../../test/test-utils";
import { H3 } from "../../elements/H3.style";
import { hasPositionTokens } from "../tailwindTestHelper";

describe("H3 Element", () => {
  it("should render the H3 styled Component", () => {
    render(<H3>Test Heading 3</H3>);

    const heading = screen.getByText(/Test Heading 3/i);

    // element components cannot have positioning style
    expect(hasPositionTokens(heading.className)).toBe(false);

    // according to the Design Mock/Spec, titles are basically blue, bold and
    // have some text sizing spec
    expect(heading.className).toMatch(/text-blue.*/);
    expect(heading.className).toMatch(/font-bold/);
    expect(heading.className).toMatch(/text-.*/);

    // h3 titles dont use different font, uses global font family
    expect(heading.className).not.toMatch(/font-(serif|sans|mono)$/);
  });
});
