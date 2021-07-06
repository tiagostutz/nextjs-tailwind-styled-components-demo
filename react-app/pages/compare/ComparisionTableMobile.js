import {
  H1Mobile,
  H2,
  DivTopPadded,
  DivHorizontalPadded,
  Table,
  TDTopAligned,
  TDBottomAligned,
  TDLined,
  TextSmall,
  TextSmallBold,
  ResilientImage,
  CheckboxSideText,
  ErrorMessage,
} from "../../lib/design-system";

import ProductBasicInfo from "./ProductBasicInfo";

import { useProductComparision } from "../../hooks/useProductComparision";
import { faCaretSquareDown } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ComparisionTableMobile() {
  const {
    allProducts,
    attributesValuesWithDifferenceMark,
    badges,
    error,
    selectedProducts,
    toggleProductSelected,
    unselectProduct,
  } = useProductComparision();

  const [panelVisible, setPanelVisible] = useState(true);
  const toggleSelectionPane = () => {
    setPanelVisible(!panelVisible);
  };

  // If no product is selected, change the title to suggest the user
  // to start choosing products to compare
  const title =
    selectedProducts.length > 0
      ? selectedProducts.length + " " + "Producten Vergelijken"
      : "Selecteer de producten";

  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div onClick={() => toggleSelectionPane()}>
        <H1Mobile>
          {title}
          <FontAwesomeIcon icon={faCaretSquareDown} width="24" />
        </H1Mobile>
      </div>
      {/* The selection of products is in this toggled panel */}
      {panelVisible && (
        <ul className="p-2 border border-t-0 border-gray-200">
          {allProducts.map((product) => (
            <li key={product.sku} className="my-1 flex flex-row items-baseline">
              <CheckboxSideText
                id={product.sku}
                checked={product.isSelected}
                label={product.name}
                onToggle={() => toggleProductSelected(product.sku)}
              />
            </li>
          ))}
        </ul>
      )}

      {/* Product Cards Slider */}
      <ul className="hs full no-scrollbar mt-2">
        {selectedProducts.map((product) => (
          <li className="item" key={product.sku}>
            <div className="shadow-lg p-4">
              <div className="flex-grow">
                {/* Basic info and picture */}
                <ProductBasicInfo
                  product={product}
                  onRemove={() => unselectProduct(product)}
                />
              </div>

              {/* Badges */}
              <div className="pb-4">
                <div className="flex flex-row justify-center">
                  {badges
                    .find((b) => b.sku === product.sku)
                    ?.urls.map((url, idx3) => (
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
              </div>

              {/* Attributes */}
              <ul>
                {/* WARNING: I didn't have time to adjust the data structure for this "card-like" approach
                so I have to make this transformations (filter, find, ...) inline */}
                {attributesValuesWithDifferenceMark
                  .filter((avd) =>
                    avd.values.find((av) => av.sku === product.sku)
                  )
                  ?.map((attribute, idx2) => (
                    <li key={idx2} className="text-center">
                      <div className="border-gray-100 text-sm mt-2">
                        {attribute.name}
                      </div>
                      <div
                        className={`font-bold p-1 border-b border-gray-200 ${
                          attribute.hasDifference ? "bg-gray-100" : ""
                        }`}
                      >
                        {/* WARNING: I didn't have time to adjust the data structure for this "card-like" approach
                            so I have to make this transformations (filter, find, ...) inline. */}
                        {
                          attribute.values.find((vl) => vl.sku === product.sku)
                            ?.value
                        }
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
