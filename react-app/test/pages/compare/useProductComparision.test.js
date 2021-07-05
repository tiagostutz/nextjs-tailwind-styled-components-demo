import { renderHook } from "@testing-library/react-hooks";
import { useProductComparision } from "../../../pages/compare/useProductComparision";

describe("useProductComparision Hook", () => {
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

    const { result, waitForNextUpdate } = renderHook(() =>
      useProductComparision()
    );
    await waitForNextUpdate();

    expect(result.current.error).toBe("Error fetching the products");
  });
});
