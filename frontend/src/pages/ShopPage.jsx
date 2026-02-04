import { faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShopCard from "../components/ShopCard";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import BrandLogos from "../sections/BrandLogos";
import PageHeader from "../components/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchProducts } from "../store/actions/productActions";

export default function ShopPage() {

    const dispatch = useDispatch();

    const products = useSelector(state => state.productRed.productList);
    const fetchState = useSelector(state => state.productRed.fetchState);
    const categories = useSelector(state => state.productRed.categories);
    const limit = useSelector(state => state.productRed.limit);
    const total = useSelector(state => state.productRed.total);

    const totalPages = Math.ceil(total / limit);

    const [viewMode, setViewMode] = useState("grid");
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");

    const { categoryId, gender } = useParams();

    const femaleCategories = categories.filter(cat => cat.gender === "k");
    const maleCategories = categories.filter(cat => cat.gender === "e");

    const topCategories = categories
        .filter(cat => (gender === "kadin" ? cat.gender === "k" : cat.gender === "e"))
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    const pageNumbers = [];
    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i + 1);
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        if (currentPage !== 1) {
            setCurrentPage(1);
        }
    }, [categoryId, filter, sort]);

    useEffect(() => {
        if (!categoryId) return;

        const newOffset = (currentPage - 1) * limit;

        const timer = setTimeout(() => {
            dispatch(fetchProducts({
                category: Number(categoryId),
                filter,
                sort,
                limit,
                offset: newOffset
            }));
        }, 500);

        return () => clearTimeout(timer);
    }, [categoryId, filter, sort, currentPage, limit, dispatch]);


    return (
        <>
            <PageHeader />
            {!categoryId ? (
                <section className="flex flex-col bg-white px-11 gap-12 py-12 lg:px-48">

                    <div>
                        <h2 className="text-2xl font-bold pb-12">Women's Categories</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {femaleCategories.map(cat => (
                                <li key={cat.id}>
                                    <ShopCard category={cat} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold pb-12">Men's Categories</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {maleCategories.map(cat => (
                                <li key={cat.id}>
                                    <ShopCard category={cat} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            ) : (
                <>
                    <section className="flex flex-col bg-[#FAFAFA] px-11 gap-8 lg:px-48">
                        <ul className="flex flex-col gap-4 pt-8 md:pt-0 md:flex-row">
                            {
                                topCategories.map(category => {
                                    return <li key={category.id} className="flex-1">
                                        <ShopCard category={category} />
                                    </li>
                                })
                            }
                        </ul>
                    </section>
                    <section className="flex flex-col text-center items-center justify-center pt-8 pb-20 px-11 lg:px-48 md:pb-12">
                        <div className="flex flex-col items-center w-full text-sm font-bold gap-8 text-[#737373] pb-8 md:flex-row md:justify-between">

                            <p className="md:flex-1 md:text-start">{`Showing ${products.length} of ${total} products`}</p>

                            <div className="flex flex-row gap-4 items-center md:flex-1 md:justify-end">
                                <p>Views:</p>
                                <div className="flex flex-row gap-4">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`p-4 border border-[#ECECEC] rounded-sm cursor-pointer ${viewMode === "grid" ? "text-[#252B42]" : ""}`}
                                    >
                                        <LayoutGrid fill="currentColor" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`p-4 border border-[#ECECEC] rounded-sm cursor-pointer ${viewMode === "list" ? "text-[#252B42]" : ""}`}
                                    >
                                        <List />
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 md:flex-row md:flex-1/6 md:justify-end">
                                <div className="relative md:order-2">
                                    <FontAwesomeIcon
                                        icon={faMagnifyingGlass}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#737373]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                        className="border-[#DDDDDD] border-2 p-4 pl-12 rounded-sm w-full font-normal appearance-none focus:outline-none focus:border-[#23A6F0] selection:bg-[#23A6F0]"
                                    />
                                </div>
                                <div className="relative">
                                    <select
                                        className="border-[#DDDDDD] border-2 p-4 pr-12 w-full rounded-sm font-normal appearance-none focus:outline-none focus:border-[#23A6F0] cursor-pointer"
                                        onChange={(e) => setSort(e.target.value)}
                                    >
                                        <option value="">Sort by</option>
                                        <option value="price:asc">Price: Low to High</option>
                                        <option value="price:desc">Price: High to Low</option>
                                        <option value="rating:asc">Rating: Low to High</option>
                                        <option value="rating:desc">Rating: High to Low</option>
                                    </select>
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#737373]"
                                    />
                                </div>
                            </div>
                        </div>

                        <ul className={`flex flex-col gap-8 w-full ${viewMode === "grid" ? "md:flex-row flex-wrap md:justify-center" : ""} py-20 md:items-stretch lg:pt-12`}>
                            {fetchState === "FETCHING" ? (
                                <li>
                                    <div className="flex justify-center items-center min-h-75">
                                        <span className="w-8 h-8 border-4 border-[#252B42] border-t-transparent rounded-full animate-spin"></span>
                                    </div>
                                </li>
                            ) : products.length === 0 ? (

                                <p className="py-20 text-[#737373]">No products found.</p>

                            ) : (
                                products.map(product => {
                                    return <li key={product.id} className={`${viewMode === "list" ? "" : "flex-none basis-full sm:basis-[calc((100%-3rem)/2)] md:basis-[calc((100%-3rem*3)/4)]"}`} >
                                        <ProductCard product={product} viewMode={viewMode} />
                                    </li>
                                })
                            )}
                        </ul>
                        <div className="flex flex-row text-[#23A6F0] text-sm font-bold items-center justify-center shadow-lg min-w-4/5 md:min-w-1/3">
                            <button type="button" className={`border border-[#BDBDBD] flex-1 py-6 rounded-l-lg ${currentPage === 1 ? " text-[#BDBDBD] opacity-50" : "cursor-pointer"}`} onClick={() => handlePageChange(1)} disabled={currentPage === 1}>First</button>
                            {pageNumbers.map(pageNum => {
                                return <button key={pageNum} type="button" className={`border border-[#BDBDBD] flex-1 py-6  cursor-pointer ${currentPage === pageNum ? "bg-[#23A6F0] text-white" : ""}`} onClick={() => handlePageChange(pageNum)}>{pageNum}</button>
                            })
                            }
                            <button type="button" className={`border border-[#BDBDBD] flex-1 py-6 rounded-r-lg ${currentPage === totalPages ? "text-[#BDBDBD] opacity-50" : "cursor-pointer"}`} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                        </div>
                    </section>
                </>)}

            <BrandLogos />
        </>
    )
}