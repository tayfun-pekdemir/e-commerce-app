import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function AddressCard({ address, selectedId, onSelect, onEdit, onDelete }) {
  const isSelected = selectedId === address.id;

  return (
    <label
      htmlFor={`address-${address.id}`}
      className={`w-full border rounded-lg p-4 flex shadow-sm flex-col gap-3 cursor-pointer transition md:w-[48%] 
                ${isSelected ? "border-[#23A6F0] shadow-[#23A6F0] shadow-sm" : "border-[#FAFAFA] hover:border-[#23A6F0]"}`}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id={`address-${address.id}`}
            name="selectedAddress"
            checked={isSelected}
            onChange={() => onSelect(address.id)}
          />
          <span className="font-semibold text-sm">{address.title}</span>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="text-xs underline text-[#737373] hover:text-[#252B42] cursor-pointer"
            onClick={() => onEdit(address)}
          >
            Edit
          </button>

          <button
            type="button"
            className="text-xs cursor-pointer"
            onClick={() => onDelete(address.id)}
          >
            <FontAwesomeIcon icon={faTrashCan} className="text-[#737373] hover:text-[#E74040] transition duration-300" />
          </button>
        </div>
      </div>

      <div className="text-sm text-[#252B42] font-medium">{address.name} {address.surname}</div>
      <div className="text-sm text-[#737373]">{address.phone}</div>
      <div className="text-sm text-[#737373] leading-snug">{address.neighborhood}, {address.district}, {address.city}</div>
      <div className="text-xs text-[#737373] leading-snug mt-1">
        {address.address}
      </div>
    </label>
  );
}
