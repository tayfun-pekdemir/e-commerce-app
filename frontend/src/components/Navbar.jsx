import { User, Search, ShoppingCart, Menu, ChevronDown, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Gravatar from "react-gravatar";
import { logoutUser } from "../store/actions/clientActions";
import { getCategoryLink } from "../utils/categoryLink";
import { getProductLink } from "../utils/productLink";

export default function Navbar() {

    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector(state => state.clientRed.user);
    const categories = useSelector(state => state.productRed.categories);
    const cart = useSelector(state => state.shoppingCartRed.cart);

    return (

        <nav className="py-11 px-4 flex flex-row items-center flex-wrap justify-between md:h-12 md:py-0 md:px-11 shadow-lg md:flex-nowrap md:gap-3">
            <Link
                to="/"
                className="text-2xl font-bold text-[#252B42] md:order-0 lg:mr-24 "
            >
                Bandage
            </Link>

            <div className="flex justify-end items-center h-full gap-2 md:order-2 md:text-[#23A6F0] lg:gap-5">
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
                <div className="relative h-full flex items-center justify-center"
                    onMouseEnter={() => setIsCartOpen(true)}
                    onMouseLeave={() => setIsCartOpen(false)}>
                    <Link to="/cart" className="flex items-center justify-center text-xs gap-1 md:hover:text-[#1D8BD3]">
                        <ShoppingCart className="w-6 h-6 md:w-3.75 md:h-3.75" />
                        <span>{cart.length}</span>
                    </Link>
                    {isCartOpen && (
                        <div className="hidden md:block absolute z-999 top-full right-0 w-80 bg-white rounded-md shadow-xl p-4">

                            <div className="flex items-center mb-3">
                                <p className="font-semibold text-[#252B42]">
                                    My Cart <span>({cart.length} products)</span>
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 max-h-72 overflow-y-auto">
                                {cart.length === 0 && (
                                    <p className="text-sm text-gray-500 text-center py-6">Your cart is empty.</p>
                                )}

                                {cart.map(item => (
                                    <Link
                                        to={getProductLink(item.product, categories)}
                                        key={item.product.id}
                                        onClick={() => setIsCartOpen(false)}
                                        className="flex gap-3 items-center hover:bg-[#FAFAFA] p-2 rounded-md transition"
                                    >
                                        <img
                                            src={item.product.images[0]?.url}
                                            className="w-14 h-14 object-cover rounded"
                                        />

                                        <div className="flex flex-col flex-1">
                                            <span className="text-sm font-bold text-[#252B42] line-clamp-1">
                                                {item.product.name}
                                            </span>
                                            <span className="text-sm text-[#737373] font-medium line-clamp-1">
                                                {item.product.description}
                                            </span>
                                            <span className="text-xs text-[#858585] py-2">
                                                Quantity: {item.count}
                                            </span>
                                            <span className="text-sm font-medium text-[#23A6F0]">
                                            {(item.product.price * item.count).toFixed(2)}$
                                        </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {cart.length > 0 && (
                                <div className="flex flex-col mt-4 border-t pt-3 gap-3">
                                    <span className="text-sm font-medium">
                                        Total:  {" "}
                                        {cart
                                            .reduce((total, item) => total + item.product.price * item.count, 0)
                                            .toFixed(2)}$
                                    </span>
                                    <div className="flex gap-2 text-center">
                                    <Link
                                        to="/cart"
                                        onClick={() => setIsCartOpen(false)}
                                        className="text-[#23A6F0] bg-white border border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white text-sm px-4 py-2 rounded-md transition flex-1"
                                    >
                                        Go to Cart
                                    </Link>
                                    <Link
                                        to="/cart"
                                        onClick={() => setIsCartOpen(false)}
                                        className="bg-[#23A6F0] text-white hover:bg-[#1D8BD3] text-sm px-4 py-2 rounded-md transition flex-1"
                                    >
                                        Complete
                                    </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                </div>
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

            <ul className="flex flex-col gap-7 flex-1 text-center items-center text-[#737373] h-full font-400 justify-center text-3xl mt-10 basis-full md:order-1 md:mt-0 md:text-sm md:flex-row md:gap-3 md:justify-start md:font-bold">
                <li>
                    <Link to="/" className=" hover:text-[#252B42]">
                        Home
                    </Link>
                </li>

                <li className="flex relative h-full"
                    onMouseEnter={() => setIsShopOpen(true)}
                    onMouseLeave={() => setIsShopOpen(false)}>
                    <Link to="/shop"
                        className="hover:text-[#252B42] flex items-center cursor-pointer"

                    >
                        Shop <ChevronDown className="hidden md:flex w-3.5 h-3.5 " />
                    </Link>
                    {isShopOpen &&
                        <div className="hidden md:block absolute z-999 top-full left-0 bg-white min-w-99 p-8 shadow-lg">
                            <ul className="flex flex-row gap-4 text-sm font-bold text-start">
                                <li className="flex flex-col gap-8 flex-1">
                                    <h3 className="text-[#252B42] ">
                                        <Link to="/shop/kadin" onClick={() => setIsShopOpen(false)}>Kadın</Link></h3>
                                    <ul className="flex flex-col gap-4">
                                        {categories?.filter(category => (category.gender === "k")).map(category => {

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
                                        {categories?.filter(category => (category.gender === "e")).map(category => {

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
                    className="hidden md:flex relative h-full"
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
                        <div className="hidden md:block absolute z-999 top-full left-0 bg-white min-w-48 p-6 shadow-lg">
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