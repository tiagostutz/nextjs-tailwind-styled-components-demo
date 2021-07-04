import { useState } from "react";
import {
  H1,
  H2,
  Table,
  TD,
  TDTopAligned,
  TDLined,
  TextSmall,
  ResilientImage,
  CheckboxSideText,
} from "../../lib/design-system";

import Content from "../../layout/content";
import { DivPadded } from "./DivPadded.style";

import ProductBasicInfo from "./ProductBasicInfo";
/**
 *
 * @returns ProductCompare React component
 */
export default function ProductCompare() {
  const [productsSelection, setProductsSelection] = useState([]);

  // -------
  // Ideally, those functions could be somewhere else, but
  // as this is a simple component with just a few actions we can leave it here

  /** removes a product from the comparision selection */
  const unselectProduct = (sku) => {};

  /** removes a product from the comparision selection */
  const selectProduct = (sku) => {};

  /** toggle (add/remove) a product from the comparision selection */
  const toggleProductSelected = (sku) => {};

  /**
   * This transforms the attributes of the products in a tabular way
   * to be presented in the table above.
   * Each row corresponds to an attribute, sorted by its `name` attribute
   * Each column corresponds to the value of the correspondent attribute
   * for the respective product, following the same order as the `productsSelection`
   * array to be consistent
   */
  const attributesValues = [];

  /**
   * Badges values of the selected products to be presented in a tabular way,
   * following the same order as the `productsSelection` array to be consistent
   */
  const badges = [];

  // If no product is selected, change the title to suggest the user
  // to start choosing products to compare
  const title =
    productsSelection.length > 0
      ? productsSelection.length + " " + "Producten Vergelijken"
      : "Selecteer de producten";

  return (
    <>
      <Content>
        <H1 className="mt-4 pb-6">{title}</H1>

        {/* Product Comparision Table */}
        <Table>
          <tbody>
            <tr>
              {/* Left most column with the Product selection checkboxes */}
              <TDTopAligned className="border-r">
                <DivPadded>
                  <ul>
                    <li>
                      <H2>Je selectie</H2>
                    </li>
                    {productsSelection.map((product) => (
                      <li className="my-3 flex flex-row items-baseline">
                        <CheckboxSideText
                          id={product.sku}
                          label={product.name}
                          onToggle={() => toggleProductSelected(product.sku)}
                        />
                      </li>
                    ))}
                  </ul>
                </DivPadded>
              </TDTopAligned>

              {/* Product basic info (image, name and price) */}
              {productsSelection.map((product) => (
                <TD>
                  <DivPadded>
                    <ProductBasicInfo
                      product={product}
                      onRemove={() => unselectProduct(product.sku)}
                    />
                  </DivPadded>
                </TD>
              ))}
            </tr>

            {/* After the product basic info, comes the Badges. */}
            <tr>
              {badges.map((bd) => (
                <TDLined>
                  <div className="flex flex-row">
                    <ResilientImage src={bd.url} width="32" />
                  </div>
                </TDLined>
              ))}
            </tr>

            {/* Product attributes in name ascending order table comparision */}
            {attributesValues.map((row) => (
              <tr>
                {/* The "name" attribute must be the first column in the row*/}
                <TDLined highlighted={row.hasDifference}>
                  <TextSmall>{row.name}</TextSmall>
                </TDLined>

                {/* The other attributes values */}
                {row.attributeValues.map((attrVal) => (
                  <TDLined highlighted={row.hasDifference}>
                    <TextSmallBold>{attrVal}</TextSmallBold>
                  </TDLined>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </>
  );
}
