import { renderHook, act } from "@testing-library/react-hooks";
import { productCache } from "../../hooks/cache";
import { useProductComparision } from "../../hooks/useProductComparision";

import mockProductList from "./mockProductList.json";

describe("useProductComparision Hook scenarios", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it("should instantiate the Hook and return an error due to data in wrong format", async () => {
    fetch.mockResponse("[]"); //empty response with invalid format

    const { result, waitForNextUpdate } = renderHook(() =>
      useProductComparision()
    );
    await waitForNextUpdate();
    expect(result.current.error).toBe(
      "Error fetching and transforming the products"
    );
  });

  it("should instantiate the Hook and return an error due to not found case", async () => {
    fetch.mockResponse("", {
      status: 404,
    }); //not found

    const { result, waitForNextUpdate } = renderHook(() =>
      useProductComparision()
    );
    await waitForNextUpdate();

    expect(result.current.error).toBe("No products found");
  });

  it("should instantiate the Hook and return an error due to internal error case", async () => {
    fetch.mockResponse("", {
      status: 500,
    }); // internal server error
    productCache.clear();

    const { result, waitForNextUpdate } = renderHook(() =>
      useProductComparision()
    );
    await waitForNextUpdate();

    expect(result.current.error).toBe("Error fetching the products");
  });

  it("should instantiate the Hook and set some products to the state, none as selected yet", async () => {
    fetch.mockResponse(JSON.stringify(mockProductList), {
      status: 200,
    }); // internal server error
    productCache.clear();

    const { result, waitForNextUpdate } = renderHook(() =>
      useProductComparision()
    );
    await waitForNextUpdate();

    expect(result.current.error).toBe(undefined);
    expect(result.current.allProducts.length).toBe(3);
    expect(result.current.selectedProducts.length).toBe(0);
    expect(result.current.badges.length).toBe(3);
    // Artikelnummer, Hardheid, Inwendige diameter, Kleur, Maat volgens AS568, Materiaal, Snoerdikte, stepQuantity, Temperatuurgebied, Toepassing
    expect(result.current.attributesValuesWithDifferenceMark.length).toBe(10);
  });

  it("should instantiate the Hook and select/unselect some products", async () => {
    fetch.mockResponse(JSON.stringify(mockProductList), {
      status: 200,
    }); // internal server error
    productCache.clear();

    const { result, waitForNextUpdate } = renderHook(() =>
      useProductComparision()
    );
    await waitForNextUpdate();

    // select one product
    act(() => {
      result.current.selectProduct(result.current.allProducts[0]);
    });
    expect(result.current.selectedProducts.length).toBe(1);

    // toggle the product selected
    act(() => {
      result.current.toggleProductSelected(result.current.allProducts[0].sku);
    });
    expect(result.current.selectedProducts.length).toBe(0);

    // toggle to select and then unselect the product
    act(() => {
      result.current.toggleProductSelected(result.current.allProducts[0].sku);
      result.current.unselectProduct(result.current.allProducts[0]);
    });
    expect(result.current.selectedProducts.length).toBe(0);

    // select many times the same product9
    act(() => {
      result.current.selectProduct(result.current.allProducts[0]);
      result.current.selectProduct(result.current.allProducts[0]);
      result.current.selectProduct(result.current.allProducts[0]);
      result.current.selectProduct(result.current.allProducts[0]);
    });
    expect(result.current.selectedProducts.length).toBe(1);

    // unselect many times the same product9
    act(() => {
      result.current.selectProduct(result.current.allProducts[0]);
      result.current.unselectProduct(result.current.allProducts[0]);
      result.current.unselectProduct(result.current.allProducts[0]);
      result.current.unselectProduct(result.current.allProducts[0]);
    });
    expect(result.current.selectedProducts.length).toBe(0);

    // check whether badges length matches with selectedProduct array
    act(() => {
      result.current.selectProduct(result.current.allProducts[0]);
    });
    expect(result.current.allProducts.length).toBe(3);
    expect(result.current.selectedProducts.length).toBe(1);

    // test whether the badges array syncs with the selectedProducts array
    const selectedBadges = result.current.badges.filter((b) => b.isSelected);
    expect(selectedBadges.length).toBe(1);
    // check whether the same selected product is marked as selected in the badges
    expect(selectedBadges[0].sku).toBe(result.current.allProducts[0].sku);

    // test whether the attributesValuesWithDifferenceMark array syncs with the selectedProducts array
    const selectedAttributesValues =
      result.current.attributesValuesWithDifferenceMark.filter((av) =>
        av.values.find((v) => v.isSelected)
      );
    expect(selectedAttributesValues.length).toBe(10);
    // check whether the same selected product is marked as selected in the attributesValuesWithDifferenceMark
    expect(selectedAttributesValues[0].values[0].sku).toBe(
      result.current.allProducts[0].sku
    );
  });

  it("should instantiate the Hook and test withHasDifference function", async () => {
    fetch.mockResponse(JSON.stringify(mockProductList), {
      status: 200,
    }); // internal server error
    productCache.clear();

    const { result, waitForNextUpdate } = renderHook(() =>
      useProductComparision()
    );
    await waitForNextUpdate();

    // the difference between attribute values is made only
    // on the selected products, so when there is zero or one
    // product selected, we expect to have zero attributes
    // with hasDifference
    let attributesWithDifference =
      result.current.attributesValuesWithDifferenceMark.filter(
        (attrVal) => attrVal.hasDifference
      );
    expect(attributesWithDifference.length).toBe(0);

    // select one product
    act(() => {
      result.current.selectProduct(result.current.allProducts[0]);
    });
    attributesWithDifference =
      result.current.attributesValuesWithDifferenceMark.filter(
        (attrVal) => attrVal.hasDifference
      );
    expect(result.current.selectedProducts.length).toBe(1);
    expect(attributesWithDifference.length).toBe(0);

    // select another product
    act(() => {
      result.current.selectProduct(result.current.allProducts[1]);
    });
    attributesWithDifference =
      result.current.attributesValuesWithDifferenceMark.filter(
        (attrVal) => attrVal.hasDifference
      );
    expect(result.current.selectedProducts.length).toBe(2);
    expect(attributesWithDifference.length).toBe(4); //we have 4 attributes in the mock that has different values

    // unselect the last product
    act(() => {
      result.current.unselectProduct(result.current.allProducts[1]);
    });
    attributesWithDifference =
      result.current.attributesValuesWithDifferenceMark.filter(
        (attrVal) => attrVal.hasDifference
      );
    expect(result.current.selectedProducts.length).toBe(1);
    expect(attributesWithDifference.length).toBe(0); // should be zero because we have only one product again
  });
});
