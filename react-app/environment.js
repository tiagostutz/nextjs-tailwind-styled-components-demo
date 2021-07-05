export default {
  productsEndpoint:
    process.env.NEXT_PUBLIC_PRODUCTS_ENDPOINT ||
    "https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all",
  unavailableImageURL: "/unavailable-image-placeholder.png",
};
