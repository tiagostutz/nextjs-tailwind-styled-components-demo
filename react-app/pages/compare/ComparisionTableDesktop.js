import {
  H2,
  Table,
  TDTopAligned,
  TDBottomAligned,
  TDLined,
  TextSmall,
  TextSmallBold,
  ResilientImage,
  CheckboxSideText,
} from "../../lib/design-system";

import { DivTopPadded, DivHorizontalPadded } from "./DivPadded.style";

import ProductBasicInfo from "./ProductBasicInfo";

import { useProductComparision } from "./useProductComparision";

export default function ComparisionTableDesktop() {
  const {
    attributesValues,
    badges,
    allProducts,
    selectedProducts,
    toggleProductSelected,
    unselectProduct,
    withHasDifference,
  } = useProductComparision();

  return (
    <Table>
      <tbody>
        <tr>
          {/* Left most column with the Product selection checkboxes */}
          <TDTopAligned borderRight>
            <DivTopPadded>
              <ul>
                <li className="mb-4">
                  <H2>Je selectie</H2>
                </li>
                {allProducts.map((product) => (
                  <li
                    key={product.sku}
                    className="my-1 flex flex-row items-baseline"
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
          {selectedProducts.map((product) => (
            <TDBottomAligned key={product.sku}>
              <DivTopPadded>
                <ProductBasicInfo
                  product={product}
                  onRemove={() => unselectProduct(product)}
                />
              </DivTopPadded>
            </TDBottomAligned>
          ))}
        </tr>

        {/* After the product basic info, comes the Badges. */}
        <tr>
          {/* Quality (badge) title */}
          <TDLined borderRight>
            <DivHorizontalPadded>
              <TextSmall>Keurmerk</TextSmall>
            </DivHorizontalPadded>
          </TDLined>

          {/* Filter only the badges from the selected products */}
          {badges
            .filter((val) => val.isSelected)
            .map((bd, idx) => (
              <TDLined key={idx}>
                <div className="flex flex-row justify-start items-center mx-4">
                  {bd.urls.map((url, idx3) => (
                    <div className="mr-2" key={idx3}>
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
            <TDLined highlighted={row.hasDifference} borderRight>
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
  );
}