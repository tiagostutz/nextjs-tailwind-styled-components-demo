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
    </>
  );
}
