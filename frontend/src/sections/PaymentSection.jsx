import { useEffect, useState } from "react";
import { fetchCreditCards, deleteCreditCardThunk } from "../store/actions/clientActions";
import { useDispatch, useSelector } from "react-redux";
import CreditCardForm from "../components/CreditCardForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreditCard from "../components/CreditCard";
import { setPayment } from "../store/actions/shoppingCartActions";
import { setPaymentMethod } from "../store/actions/shoppingCartActions";

export default function PaymentSection({ grandTotal }) {

    const dispatch = useDispatch();
    const payment = useSelector(state => state.shoppingCartRed.payment);
    const creditCards = useSelector(state => state.clientRed.creditCards);
    const paymentMethod = useSelector(state => state.shoppingCartRed.paymentMethod);

    const [showCreditCardForm, setShowCreditCardForm] = useState(false);
    const [editingCreditCard, setEditingCreditCard] = useState(null);

    useEffect(() => {
        dispatch(fetchCreditCards());
    }, [dispatch]);

    const handleSelectCard = (card) => {
        dispatch(setPayment({
            ...payment,
            cardNo: card.card_no,
            cardName: card.name_on_card,
            expireMonth: card.expire_month,
            expireYear: card.expire_year,
            ccv: card.ccv,
        }));
    };

    const handleInstallmentChange = (value) => {
        dispatch(setPayment({
            ...payment,
            installment: value
        }));
    };

    return (
        <section className="flex flex-col gap-6 flex-1">
            <div className="flex items-center gap-2 border border-[#FAFAFA] rounded-lg p-4 bg-[#FAFAFA] text-xs text-[#737373] shadow-sm">
                <input
                    type="radio"
                    id="credit-card"
                    name="paymentMethod"
                    className="cursor-pointer"
                    checked={paymentMethod === "card"}
                    onChange={() => dispatch(setPaymentMethod("card"))}
                />
                <div className="flex flex-col ml-2">
                    <label htmlFor="credit-card" className="text-[#252B42] font-bold cursor-pointer">
                        Pay by Card
                    </label>
                    <p>You have chosen to pay by card. You can make your payment using your debit or credit card.</p>
                </div>
            </div>

            {
                paymentMethod === "card" && (
                    <div className="flex flex-col gap-4 border border-[#FAFAFA] p-4 rounded-lg shadow-sm text-[#737373] items-center justify-center lg:flex-row">
                        <div className="flex flex-col gap-4 w-full md:w-1/2">

                            <h3 className="font-semibold text-[#252B42]">Card Informations</h3>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => { setEditingCreditCard(null); setShowCreditCardForm(true); }}
                                    className="flex flex-col w-full md:w-[48%] border-2 border-dashed border-[#FAFAFA] bg-[#FAFAFA] rounded-lg p-6 text-center items-center justify-center text-sm text-[#737373] hover:border-[#23A6F0] hover:text-[#23A6F0] transition cursor-pointer">
                                    <FontAwesomeIcon icon={faPlus} />
                                    <span> Add New Credit Card</span>
                                </button>

                                {creditCards?.map((card, index) => (
                                    <CreditCard
                                        key={card.id ?? index}
                                        card={card}
                                        selectedId={payment.cardNo === card.card_no ? card.id : null}
                                        onSelect={() => handleSelectCard(card)}
                                        onEdit={(card) => { setEditingCreditCard(card); setShowCreditCardForm(true); }}
                                        onDelete={async (id) => {
                                            const success = await dispatch(deleteCreditCardThunk(id));
                                            if (success && payment.cardNo && payment.cardNo === creditCards.find(c => c.id === id)?.card_no) {
                                                dispatch(setPayment({ ...payment, cardNo: null, cardName: "", expireMonth: "", expireYear: "", ccv: "" }));
                                            }
                                        }}
                                    />
                                ))}
                            </div>

                            {showCreditCardForm && (
                                <CreditCardForm
                                    editingCreditCard={editingCreditCard}
                                    onClose={() => { setShowCreditCardForm(false); setEditingCreditCard(null); }}
                                />
                            )}
                        </div>

                        <div className="flex flex-col w-full gap-4 md:w-1/2">
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-[#252B42]">Installment Options</h3>
                                <p className="text-xs">Please select the installment option that suits your card.</p>
                            </div>

                            <div className="flex flex-col items-center text-xs w-full h-full justify-center text-[#252B42] font-bold">
                                <div className="flex justify-center w-full">
                                    <span className="flex-1 py-4 border border-[#FAFAFA] text-center shadow-sm bg-[#FAFAFA]">Installment</span>
                                    <span className="flex-1 py-4 border border-[#FAFAFA] text-center shadow-sm bg-[#FAFAFA]">Monthly payment</span>
                                </div>

                                <div className="flex justify-center w-full">
                                    <div className="flex flex-1 gap-1 py-4 border border-[#FAFAFA] items-center justify-center shadow-sm">
                                        <input type="radio" id="one_time_payment" className="cursor-pointer"
                                            checked={payment.installment === 1 || !payment.installment}
                                            onChange={() => handleInstallmentChange(1)}
                                        />
                                        <label htmlFor="one_time_payment" className="cursor-pointer">One-time payment</label>
                                    </div>
                                    <span className="flex-1 py-4 border border-[#FAFAFA] text-center shadow-sm">{grandTotal.toFixed(2)}$</span>
                                </div>

                                <div className="flex justify-center w-full">
                                    <div className="flex flex-1 gap-1 py-4 border border-[#FAFAFA] items-center justify-center shadow-sm">
                                        <input type="radio" id="three_installment" className="cursor-pointer"
                                            checked={payment.installment === 3}
                                            onChange={() => handleInstallmentChange(3)}
                                        />
                                        <label htmlFor="three_installment" className="cursor-pointer">Three Installments</label>
                                    </div>
                                    <span className="flex-1 py-4 border border-[#FAFAFA] text-center shadow-sm">{(grandTotal / 3).toFixed(2)}$</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </section>
    );
}