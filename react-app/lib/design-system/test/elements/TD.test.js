import React from "react";
import "jest-styled-components";
import { render, screen } from "../../../../test/test-utils";
import { TD, TDTopAligned } from "../../elements/TD.style";
import { Table } from "../../elements/Table.style";
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

    // element components cannot have positioning style
    expect(hasPositionTokens(tdElement.className)).toBe(false);

    // according to the Design Mock/Spec, td's that has borders are gray colored
    expect(tdElement.className).toMatch(/border-gray.*$/);
    expect(tdElement).not.toHaveClass("border-t border-b border-r border-l");
  });

  it("should render the TDTopAligned styled Component", () => {
    render(
      <Table>
        <tbody>
          <tr>
            <TDTopAligned></TDTopAligned>
          </tr>
        </tbody>
      </Table>
    );

    const tdElement = screen.getByRole("cell");

    // element components cannot have positioning style
    expect(hasPositionTokens(tdElement.className)).toBe(false);
    expect(tdElement.className).toMatch(/align-top.*$/);
  });

  it("should render the TDTopAligned styled Component with border provided", () => {
    render(
      <Table>
        <tbody>
          <tr>
            <TDTopAligned className="border-2"></TDTopAligned>
          </tr>
        </tbody>
      </Table>
    );

    const tdElement = screen.getByRole("cell");
    expect(tdElement.className).toMatch(/border-2/);
  });
});
