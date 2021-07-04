import { hasPositionTokens } from "./tailwindTestHelper";

//
// This tests the utility function that will be used to help us
// prevent "element" components to have position classes
//

describe("Tailwind Test Helper", () => {
  it("should return false for position check with some visual styles", () => {
    expect(hasPositionTokens("border-r")).toBe(false);
    expect(hasPositionTokens("border-b")).toBe(false);
    expect(hasPositionTokens("bg-blue")).toBe(false);
    expect(hasPositionTokens("text-center")).toBe(false);
    expect(hasPositionTokens("rounded-t")).toBe(false);
    expect(hasPositionTokens("shadow")).toBe(false);
    expect(hasPositionTokens("scale-50")).toBe(false);
    expect(hasPositionTokens("stroke-current")).toBe(false);
  });
  it("should return true for position check with somw padding related style", () => {
    expect(hasPositionTokens("p-1")).toBe(true);
    expect(hasPositionTokens("p-12")).toBe(true);
    expect(hasPositionTokens("px-1")).toBe(true);
    expect(hasPositionTokens("px-12")).toBe(true);
    expect(hasPositionTokens("py-1")).toBe(true);
    expect(hasPositionTokens("py-12")).toBe(true);
    expect(hasPositionTokens("py-p")).toBe(true);
    expect(hasPositionTokens("pl-1")).toBe(true);
    expect(hasPositionTokens("pr-1")).toBe(true);
    expect(hasPositionTokens("pl-12")).toBe(true);
    expect(hasPositionTokens("pr-12")).toBe(true);
  });

  it("should return true for position check with somw padding related style", () => {
    expect(hasPositionTokens("m-1")).toBe(true);
    expect(hasPositionTokens("m-12")).toBe(true);
    expect(hasPositionTokens("mx-1")).toBe(true);
    expect(hasPositionTokens("mx-12")).toBe(true);
    expect(hasPositionTokens("my-1")).toBe(true);
    expect(hasPositionTokens("my-12")).toBe(true);
    expect(hasPositionTokens("my-p")).toBe(true);
    expect(hasPositionTokens("ml-1")).toBe(true);
    expect(hasPositionTokens("mr-1")).toBe(true);
    expect(hasPositionTokens("ml-12")).toBe(true);
    expect(hasPositionTokens("mr-12")).toBe(true);
    expect(hasPositionTokens("-ml-2")).toBe(true);
    expect(hasPositionTokens("-mr-1")).toBe(true);
  });
});
