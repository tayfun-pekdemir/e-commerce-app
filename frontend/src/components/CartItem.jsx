import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, decreaseCount, removeFromCart, toggleChecked } from "../store/actions/shoppingCartActions";
import { Link } from "react-router-dom";
import { getProductLink } from "../utils/productLink";

export default function CartItem({ item }) {
    const { product, count, checked } = item;
    
    const categories = useSelector(state => state.productRed.categories);

    const productLink = getProductLink(product, categories);

    const dispatch = useDispatch();

    return (
        <div className={`flex flex-col rounded-lg shadow-sm border border-[#FAFAFA] ${!checked ? "opacity-50" : ""}`}>

            <div className="flex flex-col">
                <div className="px-6 py-2">
                    <span className="text-[#737373]">Seller: Bandage</span>
                </div>
                <div className="flex border-y border-[#FAFAFA] text-center justify-center items-center gap-1 py-2 bg-[#FAFAFA]">
                    <Box className="w-4 h-4 text-[#23A6F0]" /><span className="font-medium text-sm text-[#252B42] text-center">Free Shipping!</span>
                </div>
            </div>

            <div className="flex flex-col gap-4 items-center p-6 md:flex-row">
                <div className="flex flex-col flex-2 items-center gap-4 md:flex-row">
                    <input
                        type="checkbox"
                        checked={checked}
                        className="w-5 h-5 rounded-sm border-2 border-[#23A6F0] cursor-pointer checked:bg-[#23A6F0] checked:border-[#23A6F0] appearance-none checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:justify-center checked:before:items-center checked:before:text-xs"
                        onChange={() => dispatch(toggleChecked(product.id))}
                    />
                    <Link to={productLink} className="flex flex-col gap-4 items-center hover:bg-[#FAFAFA] transition rounded-lg p-4 md:flex-row flex-1">
                        <img
                            src={product.images[0]?.url}
                            className="w-20 h-20 object-cover rounded-lg"
                        />

                        <div className="flex flex-col gap-4">
                            <p className="font-medium line-clamp-2">{product.name} {" "}<span className="text-sm text-[#737373]">{product.description}</span></p>
                            <p className="text-sm text-gray-500">
                                Estimated delivery: Within 2 days
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col flex-1 items-center justify-between gap-4 md:py-6 md:px-8 md:flex-row">
                    <div className="flex items-center border border-[#FAFAFA] shadow-sm rounded-lg">
                        <button className="px-3 py-1 text-[#23A6F0] text-xl font-bold border-r border-[#FAFAFA] bg-[#FAFAFA] cursor-pointer disabled:opacity-50 disabled:pointer-events-none" disabled={count === 1} onClick={() => dispatch(decreaseCount(product.id))}>-</button>
                        <span className="px-3 text-center w-12">{count}</span>
                        <button className="px-3 py-1 text-[#23A6F0] text-xl font-bold border-l border-[#FAFAFA] bg-[#FAFAFA] cursor-pointer" onClick={() => dispatch(increaseCount(product.id))}>+</button>
                    </div>

                    <div className="flex items-center justify-center text-center">
                        <p className="font-medium text-sm text-[#23A6F0]">
                            {(product.price * count).toFixed(2)}$
                        </p>
                    </div>
                    <button className="text-sm cursor-pointer" onClick={() => dispatch(removeFromCart(product.id))}><FontAwesomeIcon icon={faTrashCan} className="text-[#737373] hover:text-[#E74040] transition duration-300" /></button>
                </div>
            </div>
        </div>
    )
}