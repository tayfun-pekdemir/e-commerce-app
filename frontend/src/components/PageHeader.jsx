import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams, useLocation } from "react-router-dom";

export default function PageHeader({ isTeamPage }) {

    const { gender, categoryName, categoryId } = useParams();
    const location = useLocation();

    const isProductDetail = location.pathname.includes('/shop/') && categoryId;

    const shopPath = isProductDetail ? `/shop/${gender}/${categoryName}/${categoryId}` : "/shop";

    return (
        <header className={`flex flex-col items-center justify-center ${isTeamPage ? "pt-20 gap-6 pb-14" : "py-8 bg-[#FAFAFA]" } px-11 lg:px-48`}>
            {
                isTeamPage &&
                <div className="flex flex-col items-center justify-center text-center font-bold gap-4">
                    <h3 className="text-[#737373] text-base">WHAT WE DO</h3>
                    <p className="text-[#252B42] text-4xl">Innovation tailored for you</p>
                </div>
            }

            <div className={`flex flex-col items-center gap-14 w-full text-[#252B42] md:flex-row ${isTeamPage ? "md:justify-center" : "md:justify-between" }`}>
                
                {!isTeamPage && <h2 className="font-bold text-2xl">Shop</h2>}

                <p className="flex flex-row items-center gap-4 font-bold text-sm">
                    
                    <Link to="/" className="hover:text-black transition">
                        Home
                    </Link>

                    <FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD]" />

                    <Link 
                        to={isTeamPage ? "/team" : shopPath} 
                        className="text-[#737373] hover:text-black transition"
                    >
                        {isTeamPage ? "Team" : "Shop"}
                    </Link>

                </p>
            </div>
        </header>
    )
}
