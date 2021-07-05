import { useEffect, useState } from "react";
import {
  H1,
  H2,
  Table,
  TDTopAligned,
  TDLined,
  TextSmall,
  ErrorMessage,
  ResilientImage,
  CheckboxSideText,
} from "../../lib/design-system";

import Content from "../../layout/content";
import { DivPadded } from "./DivPadded.style";

import ProductBasicInfo from "./ProductBasicInfo";

import env from "../../environment";

/**
 *
 * This is the Main (root) component of the Product Comparision.
 * It has the logic to fetch the data, transform it in a tabular manner
 * and present it as a table of comparision with the option to select/remove
 * which Products will be presented in this comparision table
 *
 * @returns ProductCompare React component
 */
export default function ProductCompare() {
  /**
   * Fetched products enhanced with some attributes as the flag indicating
   * whether they are selected to be presented in the comparision table
   */
  const [productsSelection, setProductsSelection] = useState([]);

  const [error, setError] = useState();

  /**
   * Initial load of the component. Fetch the products.
   */
  useEffect(() => {
    const loadData = async () => {
      try {
        const resp = await fetch(env.productsEndpoint);
        if (resp.status === 200) {
          const productsJsonResp = await resp.json();
          const productsReveivedEnhanced = productsJsonResp.products.map(
            (prod) => ({
              ...prod,
              isSelected: false,
            })
          );
          setProductsSelection(productsReveivedEnhanced);
        } else if (resp.status === 404) {
          setError("No products found.");
        } else {
          setError("Error fetching the products");
        }
      } catch (error) {
        console.error(error);
        setError("Error fetching and transforming the products");
      }
    };
    loadData();
  }, []);

  // -------
  // Ideally, those functions could be somewhere else, but
  // as this is a simple component with just a few actions we can leave it here

  /** removes a product from the comparision selection */
  const unselectProduct = (product) => {
    product.isSelected = false;
    setProductsSelection([...productsSelection]);
  };

  /** removes a product from the comparision selection */
  const selectProduct = (product) => {
    product.isSelected = true;
    setProductsSelection([...productsSelection]);
  };

  /** toggle (add/remove) a product from the comparision selection */
  const toggleProductSelected = (sku) => {
    const product = productsSelection.find((p) => p.sku === sku);
    if (product.isSelected) {
      unselectProduct(product);
    } else {
      selectProduct(product);
    }
  };

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

  // filter just the products that has been selected (flag isSelected)
  const filteredProducts = productsSelection.filter(
    (prodSel) => prodSel.isSelected
  );

  // If no product is selected, change the title to suggest the user
  // to start choosing products to compare
  const title =
    filteredProducts.length > 0
      ? filteredProducts.length + " " + "Producten Vergelijken"
      : "Selecteer de producten";

  return (
    <>
      <Content>
        {error && <ErrorMessage>{error}</ErrorMessage>}
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
                          checked={product.isSelected}
                          label={product.name}
                          onToggle={() => toggleProductSelected(product.sku)}
                        />
                      </li>
                    ))}
                  </ul>
                </DivPadded>
              </TDTopAligned>

              {/* Product basic info (image, name and price) */}
              {filteredProducts.map((product) => (
                <TDTopAligned>
                  <DivPadded>
                    <ProductBasicInfo
                      product={product}
                      onRemove={() => unselectProduct(product)}
                    />
                  </DivPadded>
                </TDTopAligned>
              ))}
            </tr>

            {/* After the product basic info, comes the Badges. */}
            <tr>
              {badges.map((bd) => (
                <TDLined>
                  <div className="flex flex-row">
                    <ResilientImage src={bd.url} width="32" alt="Badge" />
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
