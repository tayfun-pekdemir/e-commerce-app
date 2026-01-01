import { useState } from "react"
import { Link } from "react-router-dom"

export default function ProductCard({ id, title, category, price, discountedPrice, image, colors }) {

    const [selectedColor, setSelectedColor] = useState("");
    return (
        <div className="flex flex-col md:flex-1/5">
            <Link to={`/products/${id}`} className="flex justify-center items-center">
                <img className="object-cover w-full" src={image}>
                </img>
            </Link>
            <div className="flex flex-col gap-2.5 pt-6">
                <h4 className="font-bold text-[#252B42]">{title}</h4>
                <p className="text-sm text-[#737373]">{category}</p>
                <p className="text-[#BDBDBD] font-bold">{price} <span className="text-[#23856D]">{discountedPrice}</span></p>
                <div className="flex items-center justify-center gap-2.5">
                    {colors.map((color) => (
                        <label key={color} className="cursor-pointer">
                            <input type="radio" name={`color-${id}`} value={color} className="hidden" checked={selectedColor === color} onChange={() => setSelectedColor(color)}
                            />
                            <span
                                className={`w-4 h-4 rounded-full inline-block 
                                    ${selectedColor === color ? "scale-125 ring-2 ring-[#737373]" : ""}`}
                                style={{ backgroundColor: color }}
                            ></span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    )
}