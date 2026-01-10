import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function TeamCard({ userName, profession, image }){
    return (
        <article className="flex flex-col justify-center items-center shadow-lg md:flex-1/4">
        <img src={image}></img>
        <div className="flex flex-col justify-center items-center text-center p-9 gap-2.5">
        <p className="font-bold text-[#252B42]">{userName}</p>
        <p className="text-sm font-bold text-[#737373] leading-6">{profession}</p>
        <div className="flex flex-row gap-4 text-[#23A6F0]">
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
                    <a href="https://x.com" className="inline-flex items-center" target="_blank">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-2xl cursor-pointer"
                        />
                    </a>
                </div>
                </div>
        </article>
    )
}