import React from "react";
import "jest-styled-components";
import { render, screen } from "../../../../test/test-utils";
import { Table } from "../../elements/Table.style";
import { hasPositionTokens } from "../tailwindTestHelper";

describe("Table Element", () => {
  it("should render the Table styled Component", () => {
    render(<Table></Table>);

    const table = screen.getByRole("table");

    // element components cannot have positioning style
    expect(hasPositionTokens(table.className)).toBe(false);

    // tables should be fixed and full for IE11 compatibility
    expect(table).toHaveClass("w-full");
    expect(table).toHaveClass("table-fixed");
  });
});
