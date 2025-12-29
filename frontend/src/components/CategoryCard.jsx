import { Link } from "react-router-dom"

export default function CategoryCard({ image, name, className }) {

    return (
        <Link to={`/category/${name}`}
            style={{ backgroundImage: `url(${image})` }}
            className={`bg-cover px-6 py-6 bg-top min-h-90 flex flex-col items-start justify-end lg:bg-center ${className}`}>
            <div className="inline-flex py-3 px-4 min-w-1/3 text-[#252B42] font-bold bg-white justify-center">
                <p>{name.toUpperCase()}</p>
            </div>
        </Link>
    )
}