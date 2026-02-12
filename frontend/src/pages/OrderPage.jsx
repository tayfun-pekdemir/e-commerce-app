import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import OrderSummary from "../components/OrderSummary";
import AddressCard from "../components/AddressCard";
import AddressForm from "../components/AddressForm";
import { fetchAddressList, deleteAddressThunk } from "../store/actions/clientActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function OrderPage() {
    const dispatch = useDispatch();
    const addressList = useSelector(state => state.clientRed.addressList);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        dispatch(fetchAddressList());
    }, [dispatch]);

    return (
        <div className="flex flex-col lg:flex-row gap-12 py-12 px-11 lg:px-48">
            <section className="flex flex-col gap-6 flex-1">

                <div className="flex border border-[#FAFAFA] rounded-lg overflow-hidden shadow-sm">
                    <div className="w-1/2 p-4 ">
                        <h2 className="text-[#23A6F0] font-semibold">Address Information</h2>
                        <p className="text-sm text-[#737373]">Manage your delivery and invoice addresses</p>
                    </div>
                    <div className="w-1/2 p-4 opacity-50 bg-[#FAFAFA]">
                        <h2 className="font-semibold text-[#252B42]">Payment Options</h2>
                        <p className="text-sm text-[#737373]">You can pay safely with card or balance</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 border border-[#FAFAFA] rounded-lg p-4 bg-[#FAFAFA] text-xs text-[#737373] shadow-sm">
                    <FontAwesomeIcon icon={faCircleInfo} className="text-[#23A6F0] text-lg" />
                    <p>To make a corporate invoiced purchase, uncheck <span className="text-[#252B42] font-bold">“Send my invoice to the same address”</span> and select your registered corporate billing address.</p>
                </div>

                <div className="flex flex-col gap-4 border border-[#FAFAFA] p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center gap-4">
                        <h3 className="text-lg font-semibold text-[#252B42]">Delivery Address</h3>

                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-5 h-5 shrink-0 rounded-sm border-2 cursor-pointer border-[#23A6F0] checked:bg-[#23A6F0] checked:border-[#23A6F0] appearance-none checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:justify-center checked:before:items-center checked:before:text-xs"
                            />
                            Send my invoice to the same address.
                        </label>
                    </div>

                    <div className="flex flex-wrap gap-4">

                        <button
                            onClick={() => { setEditingAddress(null); setShowAddressForm(true); }}
                            className="flex flex-col w-full md:w-[48%] border-2 border-dashed border-[#FAFAFA] bg-[#FAFAFA] rounded-lg p-6 text-center items-center justify-center text-sm text-[#737373] hover:border-[#23A6F0] hover:text-[#23A6F0] transition cursor-pointer">
                            <FontAwesomeIcon icon={faPlus} />
                            <span> Add New Address</span>
                        </button>

                        {addressList.map(address => (
                            <AddressCard
                                key={address.id}
                                address={address}
                                selectedId={selectedId}
                                onSelect={setSelectedId}
                                onEdit={(addr) => { setEditingAddress(addr); setShowAddressForm(true); }}
                                onDelete={(id) => dispatch(deleteAddressThunk(id))}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <aside className="flex flex-col gap-12 w-full lg:w-80">
                <div className="border border-[#FAFAFA] rounded-lg shadow-sm p-4">
                    <label className="flex items-start gap-2 text-xs text-[#737373]">
                        <input
                            type="checkbox"
                            className="w-5 h-5 shrink-0 rounded-sm border-2 cursor-pointer border-[#23A6F0] checked:bg-[#23A6F0] checked:border-[#23A6F0] appearance-none checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:justify-center checked:before:items-center checked:before:text-xs"
                        />
                        <span>
                            I have read and agree to the{' '}
                            <Link to="/preliminary-information-terms" className="underline text-[#23A6F0] hover:text-[#1D8BD3]">Preliminary Information Terms</Link>{" "}
                            and the{" "}
                            <Link to="/distance-sales-agreement" className="underline text-[#23A6F0] hover:text-[#1D8BD3]">Distance Sales Agreement</Link>.
                        </span>
                    </label>
                </div>
                <aside className="w-full lg:w-80">
                    <OrderSummary isOrderPage={true} />
                </aside>
                <button
                    className="w-full bg-[#23A6F0] hover:bg-[#1D8BD3] disabled:opacity-50 disabled:pointer-events-none text-white py-2 rounded-md transition cursor-pointer"
                >
                    Save & Continue
                </button>
            </aside>

            {showAddressForm && (
                <AddressForm
                    editingAddress={editingAddress}
                    onClose={() => { setShowAddressForm(false); setEditingAddress(null); }}
                />
            )}
        </div>
    );
}
