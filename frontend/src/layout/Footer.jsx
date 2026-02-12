import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faTwitter,
    faFacebook
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

    return (
        <footer>
            <div className="flex flex-col px-11 py-14 gap-6 bg-[#FAFAFA] lg:flex-row lg:px-48 lg:justify-between">
                <Link to="/" className="text-2xl font-bold text-[#252B42]">
                    Bandage
                </Link>

                <div className="flex gap-4">
                    <a href="https://facebook.com" className="inline-flex items-center" target="_blank">
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className="text-[23px] text-[#23A6F0] hover:text-[#1D8BD3]"
                    />
                    </a>
                    <a href="https://instagram.com" className="inline-flex items-center" target="_blank">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-[23px] text-[#23A6F0] hover:text-[#1D8BD3]"
                        />
                    </a>
                    <a href="https://x.com" className="inline-flex items-center" target="_blank">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-[23px] text-[#23A6F0] hover:text-[#1D8BD3]"
                        />
                    </a>
                </div>
            </div>
            <div className="flex flex-col px-11 pt-14 pb-20 gap-8 lg:flex-row lg:justify-between lg:px-48 lg:gap-5">

                <nav className="flex-1">
                    <ul className="flex flex-col gap-8 lg:flex-row lg:justify-between">

                        <li className="flex flex-col gap-2.5 text-[#737373] flex-1">
                            <h2 className="font-bold mb-2.5 text-[#252B42]">Company Info</h2>
                            <Link to="/about" className="hover:text-[#242B42]">About Us</Link>
                            <Link to="/career" className="hover:text-[#242B42]">Career</Link>
                            <Link to="/hiring" className="hover:text-[#242B42]">We are hiring</Link>
                            <Link to="/blog" className="hover:text-[#242B42]">Blog</Link>
                        </li>

                        <li className="flex flex-col gap-2.5 text-[#737373] flex-1">
                            <h2 className="font-bold mb-2.5 text-[#252B42]">Legal</h2>
                            <Link to="/privacy" className="hover:text-[#242B42]">Privacy Policy</Link>
                            <Link to="/terms" className="hover:text-[#242B42]">Terms of Service</Link>
                            <Link to="/cookies" className="hover:text-[#242B42]">Cookie Policy</Link>
                        </li>

                        <li className="flex flex-col gap-2.5 text-[#737373] flex-1">
                            <h2 className="font-bold mb-2.5 text-[#252B42]">Features</h2>
                            <Link to="/business" className="hover:text-[#242B42]">Business Marketing</Link>
                            <Link to="/analytics" className="hover:text-[#242B42]">User Analytics</Link>
                            <Link to="/live-chat" className="hover:text-[#242B42]">Live Chat</Link>
                            <Link to="/support" className="hover:text-[#242B42]">Unlimited Support</Link>
                        </li>

                        <li className="flex flex-col gap-2.5 text-[#737373] flex-1">
                            <h2 className="font-bold mb-2.5 text-[#252B42]">Resources</h2>
                            <Link to="/ios-android" className="hover:text-[#242B42]">iOS & Android</Link>
                            <Link to="/demo" className="hover:text-[#242B42]">Watch a Demo</Link>
                            <Link to="/customers" className="hover:text-[#242B42]">Customers</Link>
                            <Link to="/api" className="hover:text-[#242B42]">API</Link>
                        </li>

                    </ul>
                </nav>

                <form className="flex flex-col min-w-0 max-w-sm gap-5">
                    <label htmlFor="email" className="text-base font-bold text-[#252B42]">
                        Get In Touch
                    </label>
                    <div className="flex flex-col gap-0">
                        <div className="flex">
                            <input id="sub-email" type="email" placeholder="Your Email" className="border border-[#E6E6E6] border-r-0 rounded-l-sm min-w-0 px-4 py-2 placeholder:text-sm placeholder:text-[#737373] focus:placeholder-transparent focus:border-[#23A6F0] focus:outline-none" />
                            <button type="submit" className="bg-[#23A6F0] rounded-r-sm cursor-pointer px-4 py-2 text-white text-sm hover:bg-[#1D8BD3]">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm text-[#737373] mt-0">
                            Lore imp sum dolor Amit
                        </p>
                    </div>
                </form>
            </div>
            <p className="font-bold text-sm text-[#737373] text-center bg-[#FAFAFA] px-11 py-6 lg:text-start lg:px-48">Made With Love By Finland All Right Reserved</p>
        </footer>
    )
}