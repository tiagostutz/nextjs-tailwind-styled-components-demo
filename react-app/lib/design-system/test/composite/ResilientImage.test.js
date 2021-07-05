import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ResilientImage } from "../../composite/ResilientImage";

beforeEach(() => {
  fetch.resetMocks();
});

describe("ResilientImage Element", () => {
  it("should render the ResilientImage component with the placeholder due to an invalid image URL provided", async () => {
    const imageURL =
      "https://i.stack.imgur.com/not-exists-i-hope-really-9999111.png";
    fetch.mockResponseOnce(imageURL, { status: 404 });

    render(<ResilientImage src={imageURL} height="100" width="100" />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();

    // get base64 of /unavailable-image-placeholder.png to compare
    // const unavailableImageBase64 = ""
    // expect(image).toHaveAttribute(
    //   "src",
    //   unavailableImageBase64 //base64 of /unavailable-image-placeholder.png
    // );
  });
});
