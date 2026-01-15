import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { signup } from "../api/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { fetchRoles } from "../store/actions/clientActions";

export default function SignupForm() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const selectedRole = watch("role_id");

    const dispatch = useDispatch();
    const roles = useSelector(state => state.clientRed.roles);

    useEffect(() => {
        if (roles.length === 0) { 
            dispatch(fetchRoles());
        }
    }, [dispatch, roles.length]);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const payload = {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: Number(data.role_id),
                ...(
                    Number(data.role_id) === 2 && {
                        store: {
                            name: data.store_name,
                            phone: data.store_phone,
                            tax_no: data.store_tax_no,
                            bank_account: data.store_bank_account
                        }
                    })
            };

            await signup(payload);
            toast.warning("You need to click link in email to activate your account!");
            history.goBack();
        } catch (err) {
             toast.error(err.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 text-[#252B42]">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
                <h1 className="text-xl font-bold text-center mb-4">Create Account</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm mb-1">Name</label>
                        <input
                            id="name"
                            {...register("name", {
                                required: "Name is required",
                                minLength: { value: 3, message: "Name must be at least 3 characters" }
                            })}
                            type="text"
                            placeholder="Your Name"
                            className="border border-[#E6E6E6] rounded-sm px-4 py-2 placeholder:text-sm placeholder:text-[#737373] focus:placeholder-transparent focus:border-[#23A6F0] focus:outline-none"
                        />
                        {errors.name && <p className="text-[#E74040] text-sm">{errors.name.message}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm mb-1">Email</label>
                        <input
                            id="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" }
                            })}
                            type="email"
                            placeholder="Your Email"
                            className="border border-[#E6E6E6] rounded-sm px-4 py-2 placeholder:text-sm placeholder:text-[#737373] focus:placeholder-transparent focus:border-[#23A6F0] focus:outline-none"
                        />
                        {errors.email && <p className="text-[#E74040] text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm mb-1">Password</label>
                        <input
                            id="password"
                            {...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                                    message: "Password must be min 8 chars, include upper, lower, number, special"
                                }
                            })}
                            type="password"
                            placeholder="********"
                            className="border border-[#E6E6E6] rounded-sm px-4 py-2 placeholder:text-sm placeholder:text-[#737373] focus:placeholder-transparent focus:border-[#23A6F0] focus:outline-none"
                        />
                        {errors.password && <p className="text-[#E74040] text-sm">{errors.password.message}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="confirmPassword" className="text-sm mb-1">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: value => value === watch("password") || "Passwords do not match"
                            })}
                            type="password"
                            placeholder="********"
                            className="border border-[#E6E6E6] rounded-sm px-4 py-2 placeholder:text-sm placeholder:text-[#737373] focus:placeholder-transparent focus:border-[#23A6F0] focus:outline-none"
                        />
                        {errors.confirmPassword && <p className="text-[#E74040] text-sm">{errors.confirmPassword.message}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="role" className="text-sm mb-1">Role</label>
                        <div className="relative">
                            <select
                                id="role"
                                {...register("role_id", { required: "Role is required" })}
                                className="border border-[#E6E6E6] rounded-sm px-4 py-2 w-full appearance-none focus:outline-none focus:border-[#23A6F0]"
                                defaultValue="3"
                            >
                                {roles.map(role => (
                                    <option key={role.id} value={role.id}>{role.name}</option>
                                ))}
                            </select>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#737373]"
                            />
                        </div>
                        {errors.role_id && <p className="text-[#E74040] text-sm">{errors.role_id.message}</p>}
                    </div>

                    {selectedRole === "2" && (
                        <>
                            <div className="flex flex-col">
                                <label htmlFor="store_name" className="text-sm mb-1">Store Name</label>
                                <input
                                    id="store_name"
                                    {...register("store_name", { required: "Store name is required", minLength: { value: 3, message: "Store name must be at least 3 characters" } })}
                                    className="border border-[#E6E6E6] rounded-sm px-4 py-2 focus:border-[#23A6F0] focus:outline-none"
                                />
                                {errors.store_name && <p className="text-[#E74040] text-sm">{errors.store_name.message}</p>}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="store_phone" className="text-sm mb-1">Store Phone</label>
                                <input
                                    id="store_phone"
                                    {...register("store_phone", {
                                        required: "Store phone is required",
                                        pattern: { value: /^(\+90|0)?5\d{9}$/, message: "Invalid Türkiye phone number" }
                                    })}
                                    className="border border-[#E6E6E6] rounded-sm px-4 py-2 focus:border-[#23A6F0] focus:outline-none"
                                />
                                {errors.store_phone && <p className="text-[#E74040] text-sm">{errors.store_phone.message}</p>}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="store_tax_no" className="text-sm mb-1">Store Tax ID</label>
                                <input
                                    id="store_tax_no"
                                    {...register("store_tax_no", {
                                        required: "Tax ID is required",
                                        pattern: { value: /^T\d{4}V\d{6}$/, message: "Tax ID must match TXXXXVXXXXXX" }
                                    })}
                                    className="border border-[#E6E6E6] rounded-sm px-4 py-2 focus:border-[#23A6F0] focus:outline-none"
                                />
                                {errors.store_tax_no && <p className="text-[#E74040] text-sm">{errors.store_tax_no.message}</p>}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="store_bank_account" className="text-sm mb-1">Bank Account (IBAN)</label>
                                <input
                                    id="store_bank_account"
                                    {...register("store_bank_account", {
                                        required: "Bank account is required",
                                        pattern: { value: /^TR\d{24}$/, message: "Invalid IBAN" }
                                    })}
                                    className="border border-[#E6E6E6] rounded-sm px-4 py-2 focus:border-[#23A6F0] focus:outline-none"
                                />
                                {errors.store_bank_account && <p className="text-[#E74040] text-sm">{errors.store_bank_account.message}</p>}
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#23A6F0] rounded-sm px-4 py-2 text-white flex items-center justify-center gap-2 hover:bg-[#1D8BD3]"
                    >
                        {loading ? (
                            <>
                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                Submitting...
                            </>
                        ) : (
                            "Sign Up"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
