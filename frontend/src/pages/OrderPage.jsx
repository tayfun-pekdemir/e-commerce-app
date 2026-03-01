import { useState } from "react";
import OrderSummary from "../components/OrderSummary";
import { Link } from "react-router-dom";
import AddressSection from "../sections/AddressSection";
import PaymentSection from "../sections/PaymentSection";
import { toast } from "react-toastify";
import ConfirmPaymentModal from "../components/ConfirmPaymentModal";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentOrder } from "../store/actions/orderActions";

export default function OrderPage() {

    const [step, setStep] = useState("address");
    const [grandTotal, setGrandTotal] = useState(0);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [sendInvoice, setSendInvoice] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const payment = useSelector(state => state.shoppingCartRed.payment);
    const cart = useSelector(state => state.shoppingCartRed.cart);
    const selectedAddress = useSelector(state => state.shoppingCartRed.address);
    const currentOrder = useSelector(state => state.orderRed.currentOrder);

    const dispatch = useDispatch();

    const handlePayClick = () => {
        
        if (cart.filter(i => i.checked).length === 0) {
            toast.warning("No products selected");
            return;
        }

        if (!payment.cardNo) {
            toast.warning("Please select a card");
            return;
        }
        
        if (!termsAccepted) {
            toast.warning("Please accept the terms");
            return;
        }
        
        if (!selectedAddress) {
            toast.warning("Address missing!");
            return;
        }
        

        const orderPayload = {
            address_id: Number(selectedAddress?.id),
            card_no: Number(payment.cardNo),
            card_name: payment.cardName,
            card_expire_month: Number(payment.expireMonth),
            card_expire_year: Number(payment.expireYear),
            price: Number(grandTotal.toFixed(2)),
            products: cart
                .filter(item => item.checked)
                .map(item => ({
                    product_id: Number(item.product.id),
                    count: Number(item.count),
                    detail: `${item.product.name} - ${item.product.description}`
                }))
        };

        dispatch(setCurrentOrder(orderPayload));
        setShowPaymentModal(true);
    }

    return (
        <div className="flex flex-col lg:flex-row gap-12 py-12 px-11 lg:px-48">
            <section className="flex flex-col gap-6 flex-1">

                <div className="flex border border-[#FAFAFA] rounded-lg overflow-hidden shadow-sm h-45">
                    <div className={`w-1/2 p-4 ${step === "address" ? "text-[#23A6F0]" : "opacity-50 bg-[#FAFAFA] text-[#252B42]"}`}>
                        <div className="flex justify-between">
                            <h2 className="font-semibold">Address Information</h2>
                            {step === "payment" && (
                                <button
                                    type="button"
                                    className="text-xs underline text-[#737373] hover:text-[#252B42] cursor-pointer"
                                    onClick={() => setStep("address")}
                                >
                                    Change
                                </button>
                            )}
                        </div>
                        {selectedAddress && (
                            <div className="mt-2 p-2 text-sm text-[#737373]">
                                <p>{selectedAddress.title}</p>
                                <p>{selectedAddress.name} {selectedAddress.surname}</p>
                                <p>{selectedAddress.neighborhood}, {selectedAddress.district}, {selectedAddress.city}</p>
                                <p>{selectedAddress.address}</p>
                                <p>{selectedAddress.phone}</p>
                            </div>
                        )}
                    </div>

                    <div className={`w-1/2 p-4 ${step === "payment" ? "text-[#23A6F0]" : "opacity-50 bg-[#FAFAFA] text-[#252B42]"}`}>
                        <h2 className="font-semibold ">Payment Options</h2>
                        <p className="text-sm text-[#737373]">You can pay safely with card or balance</p>
                    </div>
                </div>

                {step === "address" && <AddressSection sendInvoice={sendInvoice} setSendInvoice={setSendInvoice} />}
                {step === "payment" && <PaymentSection grandTotal={grandTotal} />}
            </section>

            <aside className="flex flex-col gap-12 w-full lg:w-60">

                <div className="border border-[#FAFAFA] rounded-lg shadow-sm p-4">
                    <label className="flex items-start gap-2 text-xs text-[#737373] cursor-pointer">
                        <input
                            type="checkbox"
                            className="w-5 h-5 shrink-0 rounded-sm border-2 cursor-pointer border-[#23A6F0] checked:bg-[#23A6F0] checked:border-[#23A6F0] appearance-none checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:justify-center checked:before:items-center checked:before:text-xs"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                        />
                        <span>
                            I have read and agree to the{' '}
                            <Link to="/preliminary-information-terms" className="underline text-[#23A6F0] hover:text-[#1D8BD3]">Preliminary Information Terms</Link>{" "}
                            and the{" "}
                            <Link to="/distance-sales-agreement" className="underline text-[#23A6F0] hover:text-[#1D8BD3]">Distance Sales Agreement</Link>.
                        </span>
                    </label>
                </div>

                <OrderSummary isOrderPage={true} setGrandTotal={setGrandTotal} />

                {step === "address" && (
                    <button
                        className="w-full bg-[#23A6F0] hover:bg-[#1D8BD3] disabled:opacity-50 disabled:pointer-events-none text-white py-2 rounded-md transition cursor-pointer"
                        onClick={() => {
                            if (!selectedAddress) {
                                toast.warning("Please select an address");
                                return;
                            }
                            setStep("payment");
                        }}
                    >
                        Save & Continue
                    </button>
                )}
                {step === "payment" && (
                    <button
                        className="w-full bg-[#23A6F0] hover:bg-[#1D8BD3] disabled:opacity-50 disabled:pointer-events-none text-white py-2 rounded-md transition cursor-pointer"
                        onClick={handlePayClick}
                    >
                        Pay
                    </button>
                )}
            </aside>

            {showPaymentModal && (
                <ConfirmPaymentModal currentOrder={currentOrder} onClose={() => setShowPaymentModal(false)} />
            )}
        </div>
    );
}