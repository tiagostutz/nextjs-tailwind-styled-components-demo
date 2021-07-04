import { faTrashAlt } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconButtonDelete = ({ onClick }) => {
  return (
    // add a sorouding div with padding to increase the "clickable" area
    <div onClick={onClick} className="p-1">
      <FontAwesomeIcon icon={faTrashAlt} width={16} className="text-blue-700" />
    </div>
  );
};
