import { useState } from "react";
import { H1 } from "../../elements/H1.style";
import { H2 } from "../../elements/H2.style";
import { Table } from "../../elements/Table.style";
import { TD, TDTopAligned } from "../../elements/TD.style";
import Content from "../../layout/content";
import { DivPadded } from "./DivPadded.style";
export default function Compare() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const title =
    selectedProducts.length > 0
      ? selectedProducts.length + " " + "Producten Vergelijken"
      : "Selecteer de producten";

  return (
    <>
      <Content>
        <H1 className="mt-4 pb-6">{title}</H1>

        {/* Product Comparision Table */}
        <Table>
          <tbody>
            <tr>
              <TDTopAligned className="border-r">
                <DivPadded>
                  <ul>
                    <li>
                      <H2>Je selectie</H2>
                    </li>
                  </ul>
                </DivPadded>
              </TDTopAligned>
              {selectedProducts.map((product) => (
                <TD>
                  <DivPadded>A</DivPadded>
                </TD>
              ))}
            </tr>
          </tbody>
        </Table>
      </Content>
    </>
  );
}
