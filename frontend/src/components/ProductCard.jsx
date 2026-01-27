import { Link } from "react-router-dom";
import ColorSelection from "./ColorSelection";
import { useSelector } from "react-redux";

export default function ProductCard({ product, viewMode, isDetailPage }) {

    const categories = useSelector(state => state.productRed.categories);

    const slugify = (text) =>
        text
            .toLowerCase()
            .replace(/ğ/g, "g")
            .replace(/ü/g, "u")
            .replace(/ş/g, "s")
            .replace(/ı/g, "i")
            .replace(/ö/g, "o")
            .replace(/ç/g, "c")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

    const getProductLink = (product) => {

        const category = categories.find(category => product.category_id === category.id);

        if (!category) return "#";

        const gender = category.gender === "k" ? "kadin" : "erkek";
        const categoryName = category.code.split(":")[1].toLowerCase();
        const categoryId = category.id;
        const productId = product.id;

        const productSlug = slugify(product.name);

        return `/shop/${gender}/${categoryName}/${categoryId}/${productSlug}/${productId}`;
    }

    const discount = 0.25;

    return (
        <article className={`flex bg-white flex-col h-full ${viewMode === "list" ? "flex-row max-h-122" : ""}`}>
            <Link to={getProductLink(product)} className={`${viewMode === "list" ? "w-1/2" : "w-full aspect-4/5 overflow-hidden"}`}>
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