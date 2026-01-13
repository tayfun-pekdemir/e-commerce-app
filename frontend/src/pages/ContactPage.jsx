import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Phone } from "lucide-react"
import { faArrowTurnDown, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons"

export default function ContactPage() {
    return (
        <>
            <section className="flex flex-col px-11 gap-8 md:flex-row lg:px-48">
                <div className="flex flex-col justify-center items-center text-center text-[#252B42] gap-10 flex-1 py-6  md:py-0 md:items-start md:text-start">
                    <h1 className="font-bold">CONTACT US</h1>
                    <h3 className="text-4xl font-bold leading-20 md:text-6xl md:max-w-3/5 ">Get in touch today!</h3>
                    <p className="text-xl text-[#737373]">We know how large objects will act, but things on a small scale</p>
                    <address className="flex flex-col gap-10">
                        <div className="flex flex-col text-2xl font-bold gap-5">
                            <p>Phone ; <span>+451 215 215</span></p>
                            <p>Fax ; <span>+451 215 215</span></p>
                        </div>
                        <div className="flex flex-row justify-evenly">
                            <a href="https://x.com" className="inline-flex items-center" target="_blank">
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="text-2xl cursor-pointer"
                                />
                            </a>
                            <a href="https://facebook.com" className="inline-flex items-center" target="_blank">
                                <FontAwesomeIcon
                                    icon={faSquareFacebook}
                                    className="text-2xl cursor-pointer"
                                />
                            </a>
                            <a href="https://instagram.com" className="inline-flex items-center" target="_blank">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="text-2xl cursor-pointer"
                                />
                            </a>
                            <a href="https://linkedin.com" className="inline-flex items-center" target="_blank">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="text-2xl cursor-pointer"
                                />
                            </a>
                        </div>
                    </address>
                </div>
                <div className="w-full h-110 md:min-h-200 md:w-1/2">
                    <img src="contactImg.png" className="w-full object-cover h-full" />
                </div>
            </section>
            <section className="flex flex-col items-center justify-center py-18 px-11 gap-8 bg-[#FAFAFA] md:flex-row lg:px-48">
                <div className="flex flex-col justify-center items-center text-center font-bold text-[#252B42] gap-8 w-full h-full">
                    <div className="flex flex-col gap-2.5 font-bold pb-7 text-center items-center justify-center">
                        <h3 className="text-sm">VISIT OUR OFFICE</h3>
                        <p className="text-4xl leading-12.5 max-w-3/4">We help small businesses with big ideas</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center gap-8 w-full h-full md:gap-0 md:flex-row">
                        <div className="flex flex-col items-center justify-center text-center gap-4 py-12.5 w-full bg-white flex-1">
                            <Phone className="text-[#23A6F0]" size={72} />
                            <p>georgia.young@example.com</p>
                            <p>georgia.young@ple.com</p>
                            <h3 >Get Support</h3>
                            <button className="px-5 py-4 rounded-sm text-sm text-[#23A6F0] border border-[#23A6F0] font-bold cursor-pointer hover:bg-[#23A6F0] hover:text-white md:rounded-full md:px-9">Submit Request</button>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center gap-4 bg-[#252B42] text-white py-20 w-full flex-1">
                            <FontAwesomeIcon icon={faLocationDot} className="text-[#23A6F0] text-7xl" />
                            <p>georgia.young@example.com</p>
                            <p>georgia.young@ple.com</p>
                            <h3>Get Support</h3>
                            <button className="px-5 py-4 rounded-sm text-sm text-[#23A6F0] border border-[#23A6F0] font-bold cursor-pointer hover:bg-[#23A6F0] hover:text-white md:rounded-full md:px-9">Submit Request</button>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center gap-4 py-12.5 bg-white w-full flex-1">
                            <FontAwesomeIcon icon={faPaperPlane} className="text-[#23A6F0] text-7xl" />
                            <p>georgia.young@example.com</p>
                            <p>georgia.young@ple.com</p>
                            <h3>Get Support</h3>
                            <button className="px-5 py-4 rounded-sm text-sm text-[#23A6F0] border border-[#23A6F0] font-bold cursor-pointer hover:bg-[#23A6F0] hover:text-white md:rounded-full md:px-9">Submit Request</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center text-center text-[#252B42] font-bold gap-8 px-11 py-28 lg:px-48">
                <FontAwesomeIcon icon={faArrowTurnDown} className="text-[#23A6F0] text-7xl" />
                <p>We Can't WAIT TO MEET YOU</p>
                <p className="text-6xl">Let's Talk</p>
                <button className="bg-[#23A6F0] border border-[#23A6F0] px-10 py-4 rounded-sm text-sm text-white font-bold cursor-pointer hover:bg-white hover:text-[#23A6F0]">Try it free now</button>
            </section>
        </>
    )
}