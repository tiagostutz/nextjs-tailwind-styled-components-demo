import { H1, ErrorMessage } from "../../lib/design-system";

import Content from "../../layout/content";

import { useProductComparision } from "./useProductComparision";
import ComparisionTableDesktop from "./ComparisionTableDesktop";
import ComparisionTableMobile from "./ComparisionTableMobile";

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
  const { error, selectedProducts } = useProductComparision();

  // If no product is selected, change the title to suggest the user
  // to start choosing products to compare
  const title =
    selectedProducts.length > 0
      ? selectedProducts.length + " " + "Producten Vergelijken"
      : "Selecteer de producten";

  return (
    <>
      <Content>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <H1 className="mt-4 pb-6">{title}</H1>

        {/*
         * Product Comparision Table has two versions: Desktop/Tablet and Mobile
         * As the interaction and the structure of the Mobile version is pretty different
         * from the Desktop, we will have two different components for Desktop/Tablet and Mobile version
         */}

        {/* Desktop/Tablet version */}
        <div className="hidden md:block">
          <ComparisionTableDesktop />
        </div>

        {/* Mobile version */}
        <div className="sm:block md:hidden">
          <ComparisionTableMobile />
        </div>
      </Content>
    </>
  );
}
