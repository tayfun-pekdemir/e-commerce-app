import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addAddressThunk, updateAddressThunk } from "../store/actions/clientActions";
import { useEffect } from "react";

export default function AddressForm({ onClose, editingAddress }) {

    const { register, handleSubmit, reset, setValue } = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if (editingAddress) {
            Object.keys(editingAddress).forEach(key => {
                setValue(key, editingAddress[key]);
            });
        }
    }, [editingAddress, setValue]);

    const onSubmit = (formData) => {
        if (editingAddress) {
            dispatch(updateAddressThunk({ ...editingAddress, ...formData }));
        } else {
            dispatch(addAddressThunk(formData));
        }
        reset();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-lg p-6 mx-11 text-[#252B42]">
                <h2 className="text-lg font-semibold mb-4">{editingAddress ? "Edit Address" : "Add New Address"}</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <input {...register("title", { required: true })} placeholder="Address Title"
                        className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none text-sm" />

                    <input {...register("name", { required: true })} placeholder="Name"
                        className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none" />

                    <input {...register("surname", { required: true })} placeholder="Surname"
                        className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none" />

                    <input {...register("phone", { required: true })} placeholder="Phone"
                        className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none" />

                    <input {...register("city", { required: true })} placeholder="City"
                        className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none" />

                    <input {...register("district", { required: true })} placeholder="District"
                        className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none" />

                    <input {...register("neighborhood", { required: true })} placeholder="Neighborhood"
                        className="border border-[#FAFAFA] shadow-sm p-2 rounded-sm focus:border-[#23A6F0] outline-none" />

                    <textarea
                        {...register("address", { required: true })}
                        placeholder="Street, building, door number..."
                        className="border p-2 rounded-sm border-[#FAFAFA] shadow-sm focus:border-[#23A6F0] outline-none text-sm"
                        rows={3}
                    />

                    <div className="flex justify-end gap-2 mt-4">
                        <button type="button" onClick={onClose} className="bg-white border px-4 py-2 rounded-sm text-[#23A6F0] hover:text-white border-[#23A6F0] hover:bg-[#23A6F0] cursor-pointer">Cancel</button>
                        <button type="submit" className="bg-[#23A6F0] text-white px-4 py-2 rounded-sm hover:bg-[#1D8BD3] cursor-pointer">Save Address</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
