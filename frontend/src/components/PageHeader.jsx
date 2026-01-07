import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PageHeader() {

    return (
        <header className="flex flex-col items-center text-[#252B42 gap-14 md:justify-between md:flex-row bg-[#FAFAFA] px-11 py-8 lg:px-48">
            <h2 className="font-bold text-2xl">Shop</h2>
            <p className="flex flex-row items-center gap-4 font-bold text-sm">
                <span>Home</span>
                <FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD]" />
                <span className="text-[#737373]">Shop
                </span>
            </p>
        </header>
    )
}