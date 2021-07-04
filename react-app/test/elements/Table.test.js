import React from "react";
import "jest-styled-components";
import { render, screen } from "../test-utils";
import { Table } from "../../elements/Table";

describe("Table Element", () => {
  it("should render the Table styled Component", () => {
    render(<Table></Table>);

    const table = screen.getByRole("table");

    expect(table).toHaveClass("w-full");
    expect(table).toHaveClass("table-fixed");
  });
});
