import { Mail, Phone } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faTwitter,
    faFacebook,
    faYoutube
} from '@fortawesome/free-brands-svg-icons'
import Navbar from '../components/Navbar'

export default function Header() {

    return (
        <header>
            <div className="hidden md:flex flex-row justify-between items-center bg-[#252B42] text-white text-sm px-11 py-2 gap-10">
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
                    <a href="https://instagram.com" className="inline-flex items-center" target="_blank">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-base text-white cursor-pointer"
                        />
                    </a>
                    <a href="https://youtube.com" className="inline-flex items-center" target="_blank">
                        <FontAwesomeIcon
                            icon={faYoutube}
                            className="text-base text-white cursor-pointer"
                        />
                    </a>
                    <a href="https://facebook.com" className="inline-flex items-center" target="_blank">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-base text-white cursor-pointer"
                        />
                    </a>
                    <a href="https://x.com" className="inline-flex items-center" target="_blank">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-base text-white cursor-pointer"
                        />
                    </a>
                </div>
            </div>
            <Navbar/>
        </header>
    )
}