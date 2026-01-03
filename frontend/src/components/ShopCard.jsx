import { Link } from "react-router-dom";

export default function ShopCard({ image, title, text }) {

    return (
        <article>
            <Link to={`/shop/${title}`} className="bg-cover bg-center min-h-75 flex flex-col items-center justify-center font-bold text-white gap-7"
                style={{ backgroundImage: `url(${image})` }}>
                <h3>{title.toUpperCase()}</h3>
                <p className="text-sm">{text}</p>
            </Link>
        </article>
    )
}