import { useEffect, useState } from "react";

import env from "../../environment";
import ignoredAttributes from "../../ignoredAttributes.json";
import { productCache } from "../cache";

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

/**
 *
 * @returns React Hook with the page model (data flow and manipulation)
 */
export const useProductComparision = () => {
  const [error, setError] = useState();

  /**
   * Fetched products enhanced with some attributes as the flag indicating
   * whether they are selected to be presented in the comparision table
   */
  const [allProducts, setAllProducts] = useState([]);

  /**
   * Initial load of the component. Fetch the products.
   */
  useEffect(() => {
    const loadData = async () => {
      try {
        // we first try to get the cached version
        const cachedProducts = productCache.get("all");
        if (!cachedProducts) {
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
            productCache.set("all", productsReveivedEnhanced);
            setAllProducts(productsReveivedEnhanced);
          } else if (resp.status === 404) {
            setError("No products found.");
          } else {
            setError("Error fetching the products");
          }
        } else {
          setAllProducts(cachedProducts);
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
    setAllProducts([...allProducts]);
  };

  /** removes a product from the comparision selection */
  const selectProduct = (product) => {
    product.isSelected = true;
    setAllProducts([...allProducts]);
  };

  /** toggle (add/remove) a product from the comparision selection */
  const toggleProductSelected = (sku) => {
    const product = allProducts.find((p) => p.sku === sku);
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
   * for the respective product, following the same order as the `allProducts`
   * array to be consistent
   */
  let attributesValues = []; //ignoredAttributes.json

  /**
   * Badges values of the selected products to be presented in a tabular way,
   * following the same order as the `allProducts` array to be consistent
   */
  let badges = [];

  let selectedProducts = [];

  if (allProducts.length > 0) {
    // removes "badges" attribute because will handle separately
    // and removes "isSelected" attribute because it is a helper flag only, to indicate
    // whether the product has been selected to be compared or not
    const ignoredAttributesAug = [...ignoredAttributes, "isSelected", "badges"];

    // The product attributes that won't be used for product comparasion
    // are present in the ignoredAttributes.json file. Get the candidate attributes
    // present in the result object from fetch filtering out those that
    // must be ignored, present in the ignoredAttributes.json file
    const allowedAttributes = Object.keys(allProducts[0]).filter(
      (key) => !ignoredAttributesAug.find((igAtt) => igAtt === key)
    );

    // Now, for each of the filtered attributes, build a row with the attribute value
    // for each product (array of values) in the same order they were fetched
    attributesValues = allowedAttributes.map((attrAllowed) => ({
      name: attrAllowed,
      values: allProducts.map((ps) => ({
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

    badges = allProducts.map((ps) => ({
      // the badges attribute is a string containing a lista of URLs separated by pipe
      // split the pipe to return a list as a JS object
      urls: ps.badges.split(/\|/gi),
      sku: ps.sku,
      isSelected: ps.isSelected,
    }));

    // filter just the products that has been selected (flag isSelected)
    // to present in the comparision table
    selectedProducts = allProducts.filter((prodSel) => prodSel.isSelected);
  }

  return {
    attributesValues,
    badges,
    error,
    allProducts,
    selectedProducts,
    selectProduct,
    unselectProduct,
    toggleProductSelected,
    withHasDifference,
  };
};
