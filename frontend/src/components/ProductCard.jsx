import { useState } from "react"
import { Link } from "react-router-dom"

export default function ProductCard({ product, viewMode, isDetailPage }) {

    const [selectedColor, setSelectedColor] = useState("");
    return (
        <article className={`flex gap-6 bg-white ${viewMode==="list" ? "flex-row items-start" : "flex-col" }`}>
            <Link to={`/products/${product.id}`} className="flex justify-center items-center flex-1">
                <img className="object-cover w-full" src={product.images[0]}>
                </img>
            </Link>
            <div className={`flex flex-col justify-center ${isDetailPage || viewMode === "list" ? "items-start text-start px-6 pb-6" : "items-center text-center"} gap-2.5 flex-1`}>
                <h3 className="font-bold text-[#252B42]">{product.title}</h3>
                <p className="text-sm text-[#737373]">{product.category}</p>
                <p className="text-[#BDBDBD] font-bold">{product.price} <span className="text-[#23856D]">{product.discountedPrice}</span></p>
                {!isDetailPage && 
                <div className="flex items-center justify-center gap-2.5">
                    {product.colors.map((color) => (
                        <label key={color} className="cursor-pointer">
                            <input type="radio" name={`color-${color}`} value={color} className="hidden" checked={selectedColor === color} onChange={() => setSelectedColor(color)}
                            />
                            <span
                                className={`w-4 h-4 rounded-full inline-block 
                                    ${selectedColor === color ? "scale-125 ring-2 ring-[#737373]" : ""}`}
                                style={{ backgroundColor: color }}
                            ></span>
                        </label>
                    ))}
                </div>}
            </div>
        </article>
    )
}