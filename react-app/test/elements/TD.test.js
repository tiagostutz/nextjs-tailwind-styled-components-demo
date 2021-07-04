import React from "react";
import "jest-styled-components";
import { render, screen } from "../test-utils";
import { TD } from "../../elements/TD";
import { Table } from "../../elements/Table";

describe("TD Element", () => {
  it("should render the TD styled Component", () => {
    render(
      <Table>
        <tbody>
          <tr>
            <TD className="border-r border-b"></TD>
          </tr>
        </tbody>
      </Table>
    );

    const tdElement = screen.getByRole("cell");

    expect(tdElement).toHaveClass("border-gray-200");
    expect(tdElement).not.toHaveClass("border-t");
    expect(tdElement).toHaveClass("border-r border-b");
    expect(tdElement.className).toBe("border-gray-200 border-r border-b");
  });
});
