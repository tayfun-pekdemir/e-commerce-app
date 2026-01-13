import { faPiedPiperHat, faHooli, faLyft, faStripe, faAws, faRedditAlien } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BrandLogos({ isAboutPage }) {
    return (
        <section className={`flex flex-col px-11 lg:px-48 bg-[#FAFAFA] text-8xl text-[#737373] ${ isAboutPage ? "pt-30 md:gap-6 py-20" : ""}`}>
            {
                isAboutPage && 

                <div className="flex flex-col justify-center items-center text-center gap-8">
                    <h3 className="text-[#252B42] text-4xl font-bold leading-12.5 max-w-4/5">Big Companies Are Here</h3>
                    <p className="text-sm text-[#737373] md:max-w-[45%]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
            }
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
            { !isAboutPage && 
            
                <hr className="text-[#E6E6E6]" />
            }
        </section>
    )
}