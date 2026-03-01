import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addCreditCardThunk, updateCreditCardThunk } from "../store/actions/clientActions";
import { setPayment } from "../store/actions/shoppingCartActions";

export default function CreditCardForm({ onClose, editingCreditCard }) {
    const dispatch = useDispatch();
    const payment = useSelector(state => state.shoppingCartRed.payment);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm();

    const currentYear = new Date().getFullYear();

    useEffect(() => {
        if (editingCreditCard) {
            setValue("card_no", editingCreditCard.card_no);
            setValue("expire_month", editingCreditCard.expire_month);
            setValue("expire_year", editingCreditCard.expire_year);
            setValue("name_on_card", editingCreditCard.name_on_card);

            dispatch(setPayment({
                ...payment,
                cardNo: editingCreditCard.card_no,
                cardName: editingCreditCard.name_on_card,
                expireMonth: editingCreditCard.expire_month,
                expireYear: editingCreditCard.expire_year,
                ccv: editingCreditCard.ccv
            }));
        }
    }, [editingCreditCard, setValue, dispatch]);

    const onSubmit = async (formData) => {
        const payload = {
            card_no: formData.card_no.replace(/\s/g, ""),
            expire_month: Number(formData.expire_month),
            expire_year: Number(formData.expire_year),
            name_on_card: formData.name_on_card,
        };

        let success;

        if (editingCreditCard) {
            success = await dispatch(
                updateCreditCardThunk({
                    ...editingCreditCard,
                    ...payload,
                })
            );
        } else {
            success = await dispatch(addCreditCardThunk(payload));
        }

        if (success) {

            dispatch(setPayment({
                ...payment,
                cardNo: payload.card_no,
                cardName: payload.name_on_card,
                expireMonth: payload.expire_month,
                expireYear: payload.expire_year
            }));

            reset();
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-lg p-6 mx-4 text-[#252B42]">
                <h2 className="text-lg font-semibold mb-4">
                    {editingCreditCard ? "Edit Credit Card" : "Add New Credit Card"}
                </h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-3"
                >
                    <div className="flex flex-col gap-1">
                        <label>Name on Card</label>
                        <input
                            {...register("name_on_card", { required: true })}
                            className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none text-sm"
                            placeholder="Card Holder Name"
                        />
                        {errors.name_on_card && (
                            <span className="text-[#E74040] text-xs">
                                Card holder name is required
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label>Card Number</label>
                        <input
                            maxLength={19}
                            {...register("card_no", {
                                required: true,
                                validate: (value) =>
                                    value.replace(/\s/g, "").length === 16,
                                onChange: (e) => {
                                    const raw = e.target.value.replace(/\D/g, "");
                                    const formatted = raw
                                        .replace(/(.{4})/g, "$1 ")
                                        .trim();
                                    setValue("card_no", formatted);
                                },
                            })}
                            className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none text-sm"
                            placeholder="1234 1234 1234 1234"
                        />
                        {errors.card_no && (
                            <span className="text-[#E74040] text-xs">
                                Valid card number required
                            </span>
                        )}
                    </div>

                    <div className="flex gap-2 justify-between">
                        <div className="flex flex-col gap-2 flex-2">
                            <label>Expiration</label>
                            <div className="flex gap-2">
                                <select
                                    {...register("expire_month", { required: true })}
                                    className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none text-sm"
                                >
                                    <option value="">MM</option>
                                    {Array.from({ length: 12 }, (_, i) => {
                                        const month =
                                            i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
                                        return (
                                            <option key={i + 1} value={i + 1}>
                                                {month}
                                            </option>
                                        );
                                    })}
                                </select>

                                <select
                                    {...register("expire_year", { required: true })}
                                    className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none text-sm"
                                >
                                    <option value="">YYYY</option>
                                    {Array.from({ length: 10 }, (_, i) => (
                                        <option key={i} value={currentYear + i}>
                                            {currentYear + i}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <label className="flex items-center gap-2 text-sm mt-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={payment.threeDSecure || false}
                            onChange={(e) =>
                                dispatch(setPayment({
                                    ...payment,
                                    threeDSecure: e.target.checked
                                }))
                            }
                            className="w-5 h-5 shrink-0 rounded-sm border-2 cursor-pointer border-[#23A6F0] checked:bg-[#23A6F0] checked:border-[#23A6F0] appearance-none checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:justify-center checked:before:items-center checked:before:text-xs"
                        />
                        I want to pay with{" "}
                        <span className="font-bold">3D Secure</span>.
                    </label>

                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-white border px-4 py-2 rounded-sm text-[#23A6F0] hover:text-white border-[#23A6F0] hover:bg-[#23A6F0] cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-[#23A6F0] text-white px-4 py-2 rounded-sm hover:bg-[#1D8BD3] cursor-pointer"
                        >
                            Save Card
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}