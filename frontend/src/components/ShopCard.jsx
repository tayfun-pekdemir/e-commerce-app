import { Link } from "react-router-dom";

export default function ShopCard({ category }) {

    const getCategoryLink = (category) => {
        
        if (!category) return "#";

        const gender = category.gender === "k" ? "kadin" : "erkek";
        const categoryName = category.code.split(":")[1].toLowerCase();
        const categoryId = category.id;

        return `/shop/${gender}/${categoryName}/${categoryId}`;
    }

    return (
        <article className="transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <Link to={getCategoryLink(category)} className="bg-cover bg-center min-h-75 flex flex-col items-center justify-center font-bold text-white gap-7"
                style={{ backgroundImage: `url(${category.img})` }}>
                <h3>{category.title.toUpperCase()}</h3>
                <p className="text-sm"></p>
            </Link>
        </article>
    )
}