import React from "react";
import "jest-styled-components";
import { render, screen } from "../test-utils";
import { TD } from "../../elements/TD";
import { Table } from "../../elements/Table";
import { hasPositionTokens } from "../tailwindTestHelper";

describe("TD Element", () => {
  it("should render the TD styled Component", () => {
    render(
      <Table>
        <tbody>
          <tr>
            <TD></TD>
          </tr>
        </tbody>
      </Table>
    );

    const tdElement = screen.getByRole("cell");

    expect(hasPositionTokens(tdElement.className)).toBe(false);
    expect(tdElement).toHaveClass("border-gray-200");
    expect(tdElement).not.toHaveClass("border-t");
  });
});
