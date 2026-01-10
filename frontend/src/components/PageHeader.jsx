import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PageHeader({ isTeamPage }) {

    return (
        <header className={`flex flex-col items-center justify-center ${isTeamPage ? "pt-20 gap-6 pb-14" : "py-8 bg-[#FAFAFA]" } px-11 lg:px-48`}>
            {
                isTeamPage &&
                <div className="flex flex-col items-center justify-center text-center font-bold gap-4">
                    <h3 className="text-[#737373] text-base">WHAT WE DO</h3>
                    <p className="text-[#252B42] text-4xl">Innovation tailored for you</p>
                </div>}
            <div className={`flex flex-col items-center gap-14 w-full text-[#252B42] md:flex-row ${isTeamPage ? "md:justify-center" : "md:justify-between" }`}>
                {
                    !isTeamPage && <h2 className="font-bold text-2xl">Shop</h2>
                }
                <p className="flex flex-row items-center gap-4 font-bold text-sm">
                    <span>Home</span>
                    <FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD]" />
                    <span className="text-[#737373]">{isTeamPage ? "Team" : "Shop"}</span>
                </p>
            </div>
        </header>
    )
}