import { TextSmall, TextSmallBold } from "../elements/TextSmall.style";

export const CheckboxSideText = ({ id, label, checked = false, onToggle }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggle = () => {
    const newValue = !isChecked;
    if (onToggle) {
      onToggle(newValue);
    }
    setIsChecked(newValue);
  };

  return (
    <div className="flex flex-row items-baseline">
      <input
        id={id}
        onClick={() => toggle()}
        type="checkbox"
        className="mr-2"
      />
      <label htmlFor={id}>
        {isChecked && <TextSmallBold>{label}</TextSmallBold>}
        {!isChecked && <TextSmall>{label}</TextSmall>}
      </label>
    </div>
  );
};