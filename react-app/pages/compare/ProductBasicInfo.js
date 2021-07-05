import {
  H3,
  TextMedium,
  TextLight,
  IconButtonDelete,
  ResilientImage,
} from "../../lib/design-system";

import { DivPadded } from "./DivPadded.style";

export default function ProductBasicInfo({ onRemove, product }) {
  const remove = () => {
    if (onRemove) {
      onRemove(product);
    }
  };
  return (
    <div>
      <div className="mb-4 flex flex-row justify-end items-center">
        <IconButtonDelete onClick={() => remove()} />
      </div>
      <div className="flex justify-center items-center">
        <ResilientImage
          src={product.productImage}
          height="140"
          width="130"
          alt="Product illustrative image"
        />
      </div>
      <div className="my-5">
        <H3>{product.name}</H3>
      </div>
      <div className="pb-6 mb-8 border-b border-gray-200">
        <TextMedium>{product.salePrice}</TextMedium>
        <div>
          <TextLight>per stuk / excl btw</TextLight>
        </div>
      </div>
    </div>
  );
}
