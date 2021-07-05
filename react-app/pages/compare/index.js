import { H1, ErrorMessage } from "../../lib/design-system";

import Content from "../../layout/content";

import { useProductComparision } from "./useProductComparision";
import ComparisionTableDesktop from "./ComparisionTableDesktop";
import ComparisionTableMobile from "./ComparisionTableMobile";

/**
 *
 * This is the Main (root) component of the Product Comparision.
 * It basically switches between the mobile and the desktop version.
 * As this page has a relatively "hard straighforward adaptability" from desktop to mobile
 * I decied to build two different combponents to handle both cases with
 * theirs specific concerns
 *
 * @returns ProductCompare React component
 */
export default function ProductCompare() {
  return (
    <>
      <Content>
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
