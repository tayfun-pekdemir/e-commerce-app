import { Mail, Phone, Instagram, Youtube, Facebook, Twitter, User, Search, ShoppingCart, Menu, ChevronDown, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <header>
            <div className="hidden md:flex flex-row justify-between items-center bg-[#252B42] text-white text-sm px-9 py-2 gap-10">
                <div className="flex flex-row items-center gap-8 p-1.25">
                    <div className="flex flex-row gap-1.5 items-center">
                        <Phone color="white" className="w-4 h-4" />
                        <p>(225) 555-0118</p>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center">
                        <Mail color="white" className="w-4 h-4" />
                        <p>michelle.rivera@example.com</p>
                    </div>
                </div>
                <p>Follow Us and get a chance to win 80% of</p>
                <div className="flex flex-row items-center text-center gap-3 p-1.25">
                    <p>Follow Us :</p>
                    <Instagram className="w-4 h-4" />
                    <Youtube className="w-5 h-5" />
                    <Facebook className="w-4 h-3.25" />
                    <Twitter className="w-4 h-4" fill="white" />
                </div>
            </div>

            <nav className="p-9 flex flex-row items-center flex-wrap justify-between md:py-3 md:flex-nowrap md:gap-3">
                <Link
                    to="/"
                    className="text-2xl font-bold md:order-0 lg:mr-24 "
                >
                    Bandage
                </Link>

                <div className="flex justify-end items-center gap-3 md:order-2 md:text-[#23A6F0]">
                    <Link
                        to="/login"
                        className="flex flex-row items-center justify-center gap-1.5"
                    >
                        <User className="w-6 h-6 md:w-3 md:h-3" />
                        <span className="hidden md:flex text-center font-bold text-sm whitespace-nowrap">
                            Login / Register
                        </span>
                    </Link>

                    <Link to="/search" className="flex items-center justify-center">
                        <Search className="w-6 h-6 md:w-4 md:h-4" />
                    </Link>

                    <Link to="/cart" className="flex items-center justify-center">
                        <ShoppingCart className="w-6 h-6 md:w-3.75 md:h-3.75" />
                    </Link>

                    <button
                        type="button"
                        className="md:hidden flex items-center justify-center cursor-pointer"
                    >
                        <Menu className="w-6 h-6 md:w-3 md:h-3" />
                    </button>

                    <Link
                        to="/favourite"
                        className="hidden md:flex items-center justify-center"
                    >
                        <Heart className="w-6 h-6 md:w-4 md:h-3.75" />
                    </Link>
                </div>

                <ul className="flex flex-col gap-7 flex-1 text-center justify-center text-3xl mt-10 basis-full md:order-1 md:mt-0 md:text-sm md:flex-row md:gap-3 md:justify-start">
                    <li>
                        <Link to="/" className="text-[#252B42] hover:text-black">
                            Home
                        </Link>
                    </li>

                    <li className="hidden md:flex">
                        <button
                            type="button"
                            className="text-[#252B42] hover:text-black flex items-center cursor-pointer"
                        >
                            Shop <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                    </li>

                    <li className="md:hidden">
                        <Link to="/products" className="text-[#252B42] hover:text-black">
                            Product
                        </Link>
                    </li>

                    <li className="md:hidden">
                        <Link to="/pricing" className="text-[#252B42] hover:text-black">
                            Pricing
                        </Link>
                    </li>

                    <li className="hidden md:flex">
                        <Link to="/about" className="text-[#252B42] hover:text-black">
                            About
                        </Link>
                    </li>

                    <li className="hidden md:flex">
                        <Link to="/blog" className="text-[#252B42] hover:text-black">
                            Blog
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact" className="text-[#252B42] hover:text-black">
                            Contact
                        </Link>
                    </li>

                    <li className="hidden md:flex">
                        <Link to="/pages" className="text-[#252B42] hover:text-black">
                            Pages
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}