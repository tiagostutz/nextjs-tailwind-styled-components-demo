import { useEffect, useState } from "react";

import env from "../../environment";
export const useProductComparision = () => {
  const [error, setError] = useState();

  /**
   * Fetched products enhanced with some attributes as the flag indicating
   * whether they are selected to be presented in the comparision table
   */
  const [productsSelection, setProductsSelection] = useState([]);

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

  /**
   * This transforms the attributes of the products in a tabular way
   * to be presented in the table above.
   * Each row corresponds to an attribute, sorted by its `name` attribute
   * Each column corresponds to the value of the correspondent attribute
   * for the respective product, following the same order as the `productsSelection`
   * array to be consistent
   */
  const attributesValues = []; //ignoredAttributes.json

  /**
   * Badges values of the selected products to be presented in a tabular way,
   * following the same order as the `productsSelection` array to be consistent
   */
  const badges = [];

  return {
    attributesValues,
    badges,
    error,
    productsSelection,
    selectProduct,
    unselectProduct,
  };
};
