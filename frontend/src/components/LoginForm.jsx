import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/clientActions";

export default function LoginForm() {

    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = async (data) => {
        setLoading(true);
        try {

            await dispatch(loginUser({
                email: data.email,
                password: data.password,
                remember: data.remember
            }));

            if (history.length > 1) {
                history.goBack();
            } else {
                history.push("/");
            }
        } catch (err) {

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 text-[#252B42]">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
                <h1 className="text-xl font-bold text-center mb-4">Login</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

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
                            })}
                            type="password"
                            placeholder="********"
                            className="border border-[#E6E6E6] rounded-sm px-4 py-2 placeholder:text-sm placeholder:text-[#737373] focus:placeholder-transparent focus:border-[#23A6F0] focus:outline-none"
                        />
                        {errors.password && <p className="text-[#E74040] text-sm">{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#23A6F0] rounded-sm px-4 py-2 text-white flex items-center justify-center gap-2 hover:bg-[#1D8BD3] cursor-pointer"
                    >
                        {loading ? (
                            <>
                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                Logging...
                            </>
                        ) : (
                            "Login"
                        )}
                    </button>
                    <div className="flex flex-row gap-2 items-center justify-end text-sm">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                {...register("remember")}
                                className="w-5 h-5 rounded-sm border-2 cursor-pointer border-[#23A6F0] checked:bg-[#23A6F0] checked:border-[#23A6F0] appearance-none checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:justify-center checked:before:items-center checked:before:text-xs"
                            />
                            <span className="ml-2">Remember me</span>
                        </label>
                    </div>
                </form>
                <div className="flex flex-row gap-2 text-sm">
                    <p>You don't have an account?</p>
                    <Link to="/signup" className="text-[#23A6F0] hover:text-[#1D8BD3]">Sign up</Link>
                </div>
            </div>
        </div>
    )
}