import IconButtonDelete from "../../composite/IconButtonDelete";
import { H3 } from "../../elements/H3.style";
import { TextMedium } from "../../elements/TextMedium.style";
import { DivPadded } from "./DivPadded.style";

export default function ProductDetails({ onRemove, product }) {
  const remove = () => {
    if (onRemove) {
      onRemove(product);
    }
  };
  return (
    <DivPadded>
      <div className="mb-4 flex flex-row justify-end items-center">
        <IconButtonDelete onClick={() => remove()} />
      </div>

      <div className="my-5">
        <H3>{product.name}</H3>
      </div>
      <div className="pb-6 mb-8 border-b border-gray-200">
        <TextMedium>{product.salePrice}</TextMedium>
        <TextLight>per stuk / excl btw</TextLight>
      </div>
    </DivPadded>
  );
}
