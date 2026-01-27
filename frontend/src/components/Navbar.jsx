import { User, Search, ShoppingCart, Menu, ChevronDown, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Gravatar from "react-gravatar";
import { logoutUser } from "../store/actions/clientActions";

export default function Navbar() {

    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector(state => state.clientRed.user);
    const categories = useSelector(state => state.productRed.categories);

    const getCategoryLink = (category) => {
        
        if (!category) return "#";

        const gender = category.gender === "k" ? "kadin" : "erkek";
        const categoryName = category.code.split(":")[1].toLowerCase();
        const categoryId = category.id;

        return `/shop/${gender}/${categoryName}/${categoryId}`;
    }


    return (

        <nav className="p-11 flex flex-row items-center flex-wrap justify-between shadow-lg md:py-3 md:flex-nowrap md:gap-3">
            <Link
                to="/"
                className="text-2xl font-bold text-[#252B42] md:order-0 lg:mr-24 "
            >
                Bandage
            </Link>

            <div className="flex justify-end items-center gap-2 md:order-2 md:text-[#23A6F0] lg:gap-5">
                {user?.token ?
                    (
                        <div className="flex flex-row items-center justify-center gap-1">
                            <div className="flex flex-row gap-2 items-center justify-center">
                                <div className="w-6 h-6">
                                    <Gravatar email={user.email} className="rounded-full" />
                                </div>
                                <span className="hidden font-bold text-sm whitespace-nowrap md:flex">{user.name}</span>
                            </div>
                            <span className="hidden md:flex">/</span>
                            <button onClick={() => dispatch(logoutUser())} className="text-sm hidden cursor-pointer whitespace-nowrap font-bold md:flex" > Log out </button>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="flex flex-row items-center justify-center gap-1 md:hover:text-[#1D8BD3]"
                        >
                            <User className="w-6 h-6 md:w-3.5 md:h-3.5" />
                            <span className="hidden text-center font-bold text-sm whitespace-nowrap md:flex">
                                Login / Register
                            </span>
                        </Link>
                    )}

                <Link to="/search" className="flex items-center justify-center md:hover:text-[#1D8BD3]">
                    <Search className="w-6 h-6 md:w-4 md:h-4" />
                </Link>

                <Link to="/cart" className="flex items-center justify-center text-xs gap-1 md:hover:text-[#1D8BD3]">
                    <ShoppingCart className="w-6 h-6 md:w-3.75 md:h-3.75" />
                    <span>1</span>
                </Link>

                <button
                    type="button"
                    className="md:hidden flex items-center justify-center cursor-pointer"
                >
                    <Menu className="w-6 h-6 md:w-3 md:h-3" />
                </button>

                <Link
                    to="/favourite"
                    className="hidden md:flex items-center justify-center text-xs gap-1 hover:text-[#1D8BD3]"
                >
                    <Heart className="w-6 h-6 md:w-4 md:h-3.75" />
                    <span>1</span>
                </Link>
            </div>

            <ul className="flex flex-col gap-7 flex-1 text-center text-[#737373] font-400 justify-center text-3xl mt-10 basis-full md:order-1 md:mt-0 md:text-sm md:flex-row md:gap-3 md:justify-start md:font-bold">
                <li>
                    <Link to="/" className=" hover:text-[#252B42]">
                        Home
                    </Link>
                </li>

                <li className="hidden md:flex relative"
                    onMouseEnter={() => setIsShopOpen(true)}
                    onMouseLeave={() => setIsShopOpen(false)}>
                    <Link to="/shop"
                        className="hover:text-[#252B42] flex items-center cursor-pointer"

                    >
                        Shop <ChevronDown className="w-3.5 h-3.5 " />
                    </Link>
                    {isShopOpen &&
                        <div className="absolute z-999 top-full left-0 bg-white min-w-99 p-8 shadow-lg">
                            <ul className="flex flex-row gap-4 text-sm font-bold text-start">
                                <li className="flex flex-col gap-8 flex-1">
                                    <h3 className="text-[#252B42] ">
                                        <Link to="/shop/kadin" onClick={() => setIsShopOpen(false)}>Kadın</Link></h3>
                                    <ul className="flex flex-col gap-4">
                                        {categories.filter(category => (category.gender === "k")).map(category => {

                                            return <li className="text-[#737373] hover:text-[#252B42]" key={category.id}>
                                                <Link to={getCategoryLink(category)} onClick={() => setIsShopOpen(false)}>{category.title}</Link>
                                            </li>
                                        }
                                        )}
                                    </ul>
                                </li>
                                <li className="flex flex-col gap-8 flex-1">
                                    <h3 className="text-[#252B42]"><Link to="/shop/erkek" onClick={() => setIsShopOpen(false)}>Erkek</Link></h3>
                                    <ul className="flex flex-col gap-4">
                                        {categories.filter(category => (category.gender === "e")).map(category => {

                                            return <li className="text-[#737373] hover:text-[#252B42]" key={category.id}>
                                                <Link to={getCategoryLink(category)} onClick={() => setIsShopOpen(false)}>{category.title}</Link>
                                            </li>
                                        }
                                        )}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    }
                </li>

                <li className="md:hidden">
                    <Link to="/products" className=" hover:text-[#252B42]">
                        Product
                    </Link>
                </li>

                <li className="md:hidden">
                    <Link to="/pricing" className=" hover:text-[#252B42]">
                        Pricing
                    </Link>
                </li>

                <li className="hidden md:flex">
                    <Link to="/about" className=" hover:text-[#252B42]">
                        About
                    </Link>
                </li>

                <li className="hidden md:flex">
                    <Link to="/blog" className="hover:text-[#252B42]">
                        Blog
                    </Link>
                </li>

                <li>
                    <Link to="/contact" className="hover:text-[#252B42]">
                        Contact
                    </Link>
                </li>

                <li
                    className="hidden md:flex relative"
                    onMouseEnter={() => setIsPagesOpen(true)}
                    onMouseLeave={() => setIsPagesOpen(false)}
                >
                    <Link
                        to="/pages"
                        className="hover:text-[#252B42] flex items-center cursor-pointer"
                    >
                        Pages <ChevronDown className="w-3.5 h-3.5" />
                    </Link>

                    {isPagesOpen && (
                        <div className="absolute z-999 top-full left-0 bg-white min-w-48 p-6 shadow-lg">
                            <ul className="flex flex-col gap-4 text-sm font-bold text-start">
                                <li className="text-[#737373] hover:text-[#252B42]">
                                    <Link to="/pricing" className=" hover:text-[#252B42]">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="text-[#737373] hover:text-[#252B42]">
                                    <Link to="/products" className=" hover:text-[#252B42]">
                                        Product
                                    </Link>
                                </li>
                                <li className="text-[#737373] hover:text-[#252B42]">
                                    <Link to="/team" onClick={() => setIsPagesOpen(false)}>
                                        Team
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </li>

            </ul>
        </nav>
    )
}