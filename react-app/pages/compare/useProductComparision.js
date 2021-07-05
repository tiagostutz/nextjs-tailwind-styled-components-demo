import { useEffect, useState } from "react";

import env from "../../environment";
import ignoredAttributes from "../../ignoredAttributes.json";
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
          // add isSelected flag to enhance the object with this property to
          // be used to indicate whether the product is selected for comparision or not
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
  let attributesValues = []; //ignoredAttributes.json

  /**
   * Badges values of the selected products to be presented in a tabular way,
   * following the same order as the `productsSelection` array to be consistent
   */
  let badges = [];

  if (productsSelection.length > 0) {
    // removes "badges" attribute because will handle separately
    // and removes "isSelected" attribute because it is a helper flag only, to indicate
    // whether the product has been selected to be compared or not
    const ignoredAttributesAug = [...ignoredAttributes, "isSelected", "badges"];

    // The product attributes that won't be used for product comparasion
    // are present in the ignoredAttributes.json file. Get the candidate attributes
    // present in the result object from fetch filtering out those that
    // must be ignored, present in the ignoredAttributes.json file
    const allowedAttributes = Object.keys(productsSelection[0]).filter(
      (key) => !ignoredAttributesAug.find((igAtt) => igAtt === key)
    );

    // Now, for each of the filtered attributes, build a row with the attribute value
    // for each product (array of values) in the same order they were fetched
    attributesValues = allowedAttributes.map((attrAllowed) => ({
      name: attrAllowed,
      values: productsSelection.map((ps) => ({
        //the value is composed by the attribute in the product with its related "sku" for traceability and uniqueness (ID)
        value: ps[attrAllowed],
        sku: ps.sku,
        isSelected: ps.isSelected,
      })),
    }));

    // make the attributes be presented in a alphabetical roder orde
    attributesValues = attributesValues.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    badges = productsSelection.map((ps) => ({
      // the badges attribute is a string containing a lista of URLs separated by pipe
      // split the pipe to return a list as a JS object
      urls: ps.badges.split(/\|/gi),
      sku: ps.sku,
      isSelected: ps.isSelected,
    }));
    console.log(badges);
  }

  return {
    attributesValues,
    badges,
    error,
    productsSelection,
    selectProduct,
    unselectProduct,
  };
};
