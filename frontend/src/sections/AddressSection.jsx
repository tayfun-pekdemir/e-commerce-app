import AddressForm from "../components/AddressForm";
import AddressCard from "../components/AddressCard";
import { useSelector, useDispatch } from "react-redux";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { fetchAddressList, deleteAddressThunk } from "../store/actions/clientActions";
import { setAddress } from "../store/actions/shoppingCartActions";

export default function AddressSection({ sendInvoice, setSendInvoice }) {
    
    const addressList = useSelector(state => state.clientRed.addressList);
    const selectedAddress = useSelector(state => state.shoppingCartRed.address);

    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAddressList());
    }, [dispatch]);

    return (
        <section className="flex flex-col gap-6 flex-1">
            <div className="flex items-center gap-2 border border-[#FAFAFA] rounded-lg p-4 bg-[#FAFAFA] text-xs text-[#737373] shadow-sm">
                <FontAwesomeIcon icon={faCircleInfo} className="text-[#23A6F0] text-lg" />
                <p>
                    To make a corporate invoiced purchase, uncheck{" "}
                    <span className="text-[#252B42] font-bold">“Send my invoice to the same address”</span> and select your registered corporate billing address.
                </p>
            </div>

            <div className="flex flex-col gap-4 border border-[#FAFAFA] p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center gap-4">
                    <h3 className="text-lg font-semibold text-[#252B42]">Delivery Address</h3>

                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                            type="checkbox"
                            className="w-5 h-5 shrink-0 rounded-sm border-2 cursor-pointer border-[#23A6F0] checked:bg-[#23A6F0] checked:border-[#23A6F0] appearance-none checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:justify-center checked:before:items-center checked:before:text-xs"
                            checked={sendInvoice}
                            onChange={(e) => setSendInvoice(e.target.checked)}
                        />
                        Send my invoice to the same address.
                    </label>
                </div>

                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => { setEditingAddress(null); setShowAddressForm(true); }}
                        className="flex flex-col w-full md:w-[48%] border-2 border-dashed border-[#FAFAFA] bg-[#FAFAFA] rounded-lg p-6 text-center items-center justify-center text-sm text-[#737373] hover:border-[#23A6F0] hover:text-[#23A6F0] transition cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        <span> Add New Address</span>
                    </button>

                    {addressList.map(address => (
                        <AddressCard
                            key={address.id}
                            address={address}
                            selectedId={selectedAddress?.id}
                            onSelect={() => dispatch(setAddress(address))}
                            onEdit={(addr) => { setEditingAddress(addr); setShowAddressForm(true); }}
                            onDelete={(id) => dispatch(deleteAddressThunk(id))}
                        />
                    ))}
                </div>

                {showAddressForm && (
                    <AddressForm
                        editingAddress={editingAddress}
                        onClose={() => { setShowAddressForm(false); setEditingAddress(null); }}
                    />
                )}
            </div>
        </section>
    )
}