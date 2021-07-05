import { useEffect, useState } from "react";
import {
  H1,
  H2,
  Table,
  TDTopAligned,
  TDLined,
  TextSmall,
  TextSmallBold,
  ErrorMessage,
  ResilientImage,
  CheckboxSideText,
} from "../../lib/design-system";

import Content from "../../layout/content";
import { DivTopPadded, DivHorizontalPadded } from "./DivPadded.style";

import ProductBasicInfo from "./ProductBasicInfo";

import { useProductComparision } from "./useProductComparision";

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
  const {
    attributesValues,
    badges,
    error,
    productsSelection,
    selectProduct,
    unselectProduct,
  } = useProductComparision();

  /** toggle (add/remove) a product from the comparision selection */
  const toggleProductSelected = (sku) => {
    const product = productsSelection.find((p) => p.sku === sku);
    if (product.isSelected) {
      unselectProduct(product);
    } else {
      selectProduct(product);
    }
  };

  // filter just the products that has been selected (flag isSelected)
  // to present in the comparision table
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
                <DivTopPadded>
                  <ul>
                    <li>
                      <H2>Je selectie</H2>
                    </li>
                    {productsSelection.map((product) => (
                      <li
                        key={product.sku}
                        className="my-3 flex flex-row items-baseline"
                      >
                        <CheckboxSideText
                          id={product.sku}
                          checked={product.isSelected}
                          label={product.name}
                          onToggle={() => toggleProductSelected(product.sku)}
                        />
                      </li>
                    ))}
                  </ul>
                </DivTopPadded>
              </TDTopAligned>

              {/* Product basic info (image, name and price) */}
              {filteredProducts.map((product) => (
                <TDTopAligned key={product.sku}>
                  <DivTopPadded>
                    <ProductBasicInfo
                      product={product}
                      onRemove={() => unselectProduct(product)}
                    />
                  </DivTopPadded>
                </TDTopAligned>
              ))}
            </tr>

            {/* After the product basic info, comes the Badges. */}
            <tr>
              {/* Quality (badge) title */}
              <TDLined>
                <DivHorizontalPadded>
                  <TextSmall>Keurmerk</TextSmall>
                </DivHorizontalPadded>
              </TDLined>

              {/* Filter only the badges from the selected products */}
              {badges
                .filter((val) => val.isSelected)
                .map((bd, idx) => (
                  <TDLined key={idx}>
                    <div className="flex flex-row justify-start items-center">
                      {bd.urls.map((url, idx3) => (
                        <div className="mr-2">
                          {/* Give some space between the badges */}
                          <ResilientImage
                            key={idx3}
                            src={url}
                            width="32"
                            height="32"
                            alt="Badge"
                          />
                        </div>
                      ))}
                    </div>
                  </TDLined>
                ))}
            </tr>

            {/* Product attributes in name ascending order table comparision */}
            {withHasDifference(attributesValues).map((row, idx) => (
              <tr key={idx}>
                {/* The "name" attribute must be the first column in the row*/}
                <TDLined highlighted={row.hasDifference}>
                  <DivHorizontalPadded>
                    <TextSmall>{row.name}</TextSmall>
                  </DivHorizontalPadded>
                </TDLined>

                {/* Filter to present just the values from the selected products */}
                {row.values
                  .filter((val) => val.isSelected)
                  .map((attrVal) => (
                    <TDLined key={attrVal.sku} highlighted={row.hasDifference}>
                      <DivHorizontalPadded>
                        <TextSmallBold>{attrVal.value}</TextSmallBold>
                      </DivHorizontalPadded>
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

/**
 * Builds an enhanced attributeValues indicating whether there are some difference between the values
 * of the SELECTED products
 *
 * @param {Array} attributesValues array with the attribute values transformed into tabular
 */
const withHasDifference = (attributesValues) => {
  // return the original object + the hasDifference attribute
  // to evaluate the hasDifferece, we filter for the selected products,
  // which are being compared, and check, attribute by attribute whether
  // there is at least one product with the value different from the first product
  // because if there is, then there are differences between the respective attribute value
  // among the selected products.
  const enhancedAttributeValues = attributesValues.map((attrVal) => ({
    ...attrVal,
    hasDifference: attrVal.values
      .filter((val) => val.isSelected)
      .find((v) => v.value !== attrVal.values[0].value),
  }));

  return enhancedAttributeValues;
};
