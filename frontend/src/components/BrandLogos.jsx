import { faPiedPiperHat, faHooli, faLyft, faStripe, faAws, faRedditAlien } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BrandLogos(){
    return (
        <section className="px-11  lg:px-48 bg-[#FAFAFA] text-8xl text-[#737373]">
                <ul className="flex flex-col justify-between items-center py-12.5 md:flex-row">
                    <li>
                        <FontAwesomeIcon icon={faHooli} />
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faLyft} />
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faPiedPiperHat} />
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faStripe} />
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faAws} />
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faRedditAlien} />
                    </li>
                </ul>
                <hr className="text-[#E6E6E6]" />
            </section>
    )
}