import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useState } from "react";
import { createOrderThunk } from "../store/actions/orderActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function ConfirmPaymentModal({ onClose, currentOrder }) {

    const [cvv, setCvv] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const [loading, setLoading] = useState(false);

    if (!currentOrder) return null;

    const handleConfirmPayment = async () => {
        if (!/^\d{3}$/.test(cvv)) {
            toast.warning("CVV must be 3 digits");
            return;
        }
        const payload = {
            ...currentOrder,
            order_date: new Date().toISOString().split(".")[0],
            card_ccv: Number(cvv)
        };
        setLoading(true);
        const success = await dispatch(createOrderThunk(payload));
        setLoading(false);
        if (success) {

            onClose();
            history.push("/order-history");
        }

    }

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-lg p-6 mx-4 text-[#252B42]">

                <div className="flex flex-col gap-3">

                    <div className="flex flex-col gap-1">
                        <label>Name on Card</label>
                        <input
                            type="text"
                            value={currentOrder.card_name || ""}
                            readOnly
                            className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none text-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label>Card Number</label>
                        <input
                            type="text"
                            value={currentOrder.card_no || ""}
                            readOnly
                            className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none text-sm"
                        />
                    </div>

                    <div className="flex gap-2 justify-between">
                        <div className="flex flex-col gap-2 flex-2">
                            <label>Expiration</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={currentOrder.card_expire_month || ""}
                                    readOnly
                                    className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none text-sm w-1/2"
                                />
                                <input
                                    type="text"
                                    value={currentOrder.card_expire_year || ""}
                                    readOnly
                                    className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none text-sm w-1/2"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 flex-1">
                            <label>CVV
                                <FontAwesomeIcon
                                    icon={faCircleInfo}
                                    className="text-[#23A6F0]"
                                />
                            </label>

                            <input
                                type="text"
                                maxLength={3}
                                placeholder="123"
                                className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none text-sm w-full"
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, "");
                                    setCvv(value);
                                }}
                                value={cvv}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-white border px-4 py-2 rounded-sm text-[#23A6F0] hover:text-white border-[#23A6F0] hover:bg-[#23A6F0] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                            disabled={loading}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="bg-[#23A6F0] text-white px-4 py-2 rounded-sm hover:bg-[#1D8BD3] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={handleConfirmPayment}
                            disabled={loading}
                        >
                            {loading ? "Processing..." : "Confirm Payment"}
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}