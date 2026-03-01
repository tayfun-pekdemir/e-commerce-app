import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setPayment } from "../store/actions/shoppingCartActions";

export default function CreditCard({ card, onEdit, onDelete }) {
  
  const payment = useSelector(state => state.shoppingCartRed.payment);
  const dispatch = useDispatch();

  const isSelected = payment.cardNo === card.card_no;

  const maskedNumber = "**** **** **** " + card.card_no.slice(-4);

  const formattedMonth =
    card.expire_month < 10 ? `0${card.expire_month}` : card.expire_month;

  return (
    <label
      htmlFor={`card-${card.id}`}
      className={`w-full border rounded-lg p-4 flex shadow-sm flex-col gap-3 cursor-pointer transition lg:w-[48%] 
        ${isSelected
          ? "border-[#23A6F0] shadow-[#23A6F0] shadow-sm"
          : "border-[#FAFAFA] hover:border-[#23A6F0]"
        }`}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id={`card-${card.id}`}
            name="selectedCard"
            checked={isSelected}
            onChange={() =>
              dispatch(
                setPayment({
                  ...payment,
                  cardNo: card.card_no,
                  cardName: card.name_on_card,
                  expireMonth: card.expire_month,
                  expireYear: card.expire_year,
                  ccv: card.ccv
                })
              )
            }
            className="cursor-pointer"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="text-xs underline text-[#737373] hover:text-[#252B42] cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              onEdit(card);
            }}
          >
            Edit
          </button>

          <button
            type="button"
            className="text-xs cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              onDelete(card.id);
            }}
          >
            <FontAwesomeIcon
              icon={faTrashCan}
              className="text-[#737373] hover:text-[#E74040] transition duration-300"
            />
          </button>
        </div>
      </div>

      <div className="font-semibold text-sm text-end">{maskedNumber}</div>
      <div className="text-sm text-[#252B42] font-medium">{card.name_on_card}</div>
      <div className="text-sm text-[#737373] text-end">
        Exp: {formattedMonth}/{card.expire_year}
      </div>
    </label>
  );
}