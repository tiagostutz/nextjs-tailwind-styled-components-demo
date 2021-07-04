import { H1 } from "../../elements/H1";
import { Table } from "../../elements/Table";
import { TD } from "../../elements/TD";
import Content from "../../layout/content";
export default function Compare() {
  return (
    <>
      <Content>
        <H1 className="mt-4 pb-6">Hallo!</H1>

        {/* Product Comparision Table */}
        <Table>
          <tbody>
            <tr>
              <TD></TD>
            </tr>
          </tbody>
        </Table>
      </Content>
    </>
  );
}
