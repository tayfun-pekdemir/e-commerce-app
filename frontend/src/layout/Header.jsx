import { Mail, Phone, User, Search, ShoppingCart, Menu, ChevronDown, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faTwitter,
    faFacebook,
    faYoutube
} from '@fortawesome/free-brands-svg-icons'

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
                <div className="flex flex-row items-center text-center gap-3">
                    <p>Follow Us :</p>
                    <a href="https://instagram.com">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-base text-white cursor-pointer"
                        />
                    </a>
                    <a href="https://youtube.com">
                        <FontAwesomeIcon
                            icon={faYoutube}
                            className="text-base text-white cursor-pointer"
                        />
                    </a>
                    <a href="https://facebook.com">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-base text-white cursor-pointer"
                        />
                    </a>
                    <a href="https://x.com">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-base text-white cursor-pointer"
                        />
                    </a>
                </div>
            </div>

            <nav className="p-9 flex flex-row items-center flex-wrap justify-between md:py-3 md:flex-nowrap md:gap-3">
                <Link
                    to="/"
                    className="text-2xl font-bold text-[#252B42] md:order-0 lg:mr-24 "
                >
                    Bandage
                </Link>

                <div className="flex justify-end items-center gap-2 md:order-2 md:text-[#23A6F0] md:gap-5">
                    <Link
                        to="/login"
                        className="flex flex-row items-center justify-center gap-1 md:hover:text-[#1D8BD3]"
                    >
                        <User className="w-6 h-6 md:w-3.5 md:h-3.5" />
                        <span className="hidden md:flex text-center font-bold text-sm whitespace-nowrap">
                            Login / Register
                        </span>
                    </Link>

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

                    <li className="hidden md:flex">
                        <button
                            type="button"
                            className="hover:text-[#252B42] flex items-center cursor-pointer"
                        >
                            Shop <ChevronDown className="w-3.5 h-3.5 " />
                        </button>
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

                    <li className="hidden md:flex">
                        <Link to="/pages" className="hover:text-[#252B42]">
                            Pages
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}