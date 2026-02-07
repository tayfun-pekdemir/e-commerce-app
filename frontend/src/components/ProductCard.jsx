import { Link } from "react-router-dom";
import ColorSelection from "./ColorSelection";
import { useSelector } from "react-redux";
import { getProductLink } from "../utils/productLink";

export default function ProductCard({ product, viewMode, isDetailPage }) {

    const categories = useSelector(state => state.productRed.categories);

    const productLink = getProductLink(product, categories);

    const discount = 0.25;

    return (
        <article className={`flex bg-white flex-col h-full transition duration-300 hover:shadow-lg hover:-translate-y-1 ${viewMode === "list" ? "flex-row max-h-122" : ""}`}>
            <Link to={productLink} className={`${viewMode === "list" ? "w-1/2" : "w-full aspect-4/5 overflow-hidden"}`}>
                <div className="h-full w-full">
                    <img className="object-cover object-center w-full h-full" src={product.images[0].url}/>
                </div>
            </Link>
            <div className={`flex flex-col gap-2.5 flex-1 ${isDetailPage ? "items-start text-start p-6" : (viewMode === "list" ? " justify-center items-center px-2 py-6" : "justify-center items-center text-center p-6")} `}>
                <h3 className="font-bold text-[#252B42]">{product.name}</h3>
                <p className="text-sm text-[#737373] line-clamp-2">{product.description}</p>
                <div className={`text-[#BDBDBD] font-bold flex gap-1 mt-auto ${viewMode === "list" ? "flex-col md:flex-row" : "flex-row"}`}>
                    <span>{product.price}$</span>
                    <span className="text-[#23856D]">{(product.price - (product.price * discount)).toFixed(2)}$</span>
                </div>
                {!isDetailPage &&
                        <ColorSelection />
                    }
            </div>
        </article>
    )
}