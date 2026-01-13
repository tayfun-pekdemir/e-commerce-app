import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mockShopData from '../mockdata/mockShopData'
import ShopCard from '../components/ShopCard'
import ProductCard from '../components/ProductCard'
import mockProducts from "../mockdata/mockProducts"
import { useEffect, useState } from 'react'
import { LayoutGrid, List } from 'lucide-react'
import BrandLogos from '../sections/BrandLogos'
import PageHeader from '../components/PageHeader'

export default function ShopPage() {
    const [products, setProducts] = useState([]);
    const [viewMode, setViewMode] = useState("grid");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setProducts(mockProducts)
    }, [])

    const itemsPerPage = 12;
    let totalPages = Math.ceil(products.length / itemsPerPage);
    let pageNumbers = [];

    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i + 1);
    }

    const handleFirst = () => setCurrentPage(1);
    const handleNext = () => {
    const nextPage = Math.min(currentPage + 1, totalPages)
        setCurrentPage(nextPage)
    }

    return (
        <>
            <PageHeader/>
            <section className="flex flex-col bg-[#FAFAFA] px-11 gap-8 lg:px-48">
                <ul className="flex flex-col gap-4 pt-8 md:pt-0 md:flex-row">
                    {
                        mockShopData.map(data => {
                            return <li key={data.id} className="flex-1">
                                <ShopCard image={data.image} title={data.title} text={data.text} />
                            </li>
                        })
                    }
                </ul>
            </section>
            <section className="flex flex-col text-center items-center pt-8 pb-20 px-11 lg:px-48 md:pb-12">
                <div className="flex flex-col items-center w-full text-sm font-bold gap-8 text-[#737373] pb-8 md:flex-row md:justify-between">
                    <p>Showing all 12 results</p>
                    <div className="flex flex-row gap-4 items-center">
                        <p>Views:</p>
                        <div className="flex flex-row gap-4">
                            <button onClick={() => setViewMode("grid")}
                                className={`p-4 border border-[#ECECEC] rounded-sm ${viewMode === "grid" ? "text-[#252B42]" : ""}`}>
                                <LayoutGrid fill="currentColor" /></button>
                            <button onClick={() => setViewMode("list")}
                                className={`p-4 border border-[#ECECEC] rounded-sm ${viewMode === "list" ? "text-[#252B42]" : ""}`}>
                                <List /></button>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="relative w-full">
                            <select className="border-[#DDDDDD] border-2 p-4 pr-12 min-w-34 rounded-sm font-normal appearance-none focus:outline-none focus:border-[#23A6F0]">
                                <option>Popularity</option>
                            </select>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
                            /></div>
                        <button type="submit" className="py-2.5 px-5 bg-[#23A6F0] text-white rounded-sm hover:bg-[#1D8BD3]">Filter</button>
                    </div>

                </div>
                <ul className={`flex ${viewMode==="grid" ? "flex-row justify-center" : "flex-col justify-start items-start "} w-full gap-8 flex-wrap py-20 lg:pt-12`}>
                    {
                        products.slice((currentPage - 1) * itemsPerPage, itemsPerPage * currentPage).map(product => {
                            return <li key={product.id} className="md:flex-1/5" >
                                <ProductCard product={product} viewMode={viewMode} />
                            </li>
                        })
                    }
                </ul>
                <div className="flex flex-row text-[#23A6F0] text-sm font-bold items-center justify-center shadow-lg min-w-4/5 md:min-w-1/3">
                    <button type="button" className={`border border-[#BDBDBD] flex-1 py-6 rounded-l-lg ${currentPage === 1 ? " text-[#BDBDBD] opacity-50" : "cursor-pointer"}`} onClick={handleFirst} disabled={currentPage===1}>First</button>
                    {pageNumbers.map(pageNum => {
                        return <button key={pageNum} type="button" className={`border border-[#BDBDBD] flex-1 py-6  cursor-pointer ${currentPage===pageNum ? "bg-[#23A6F0] text-white" : ""}`} onClick={()=> setCurrentPage(pageNum)}>{pageNum}</button>
                    })
                    }
                    <button type="button" className={`border border-[#BDBDBD] flex-1 py-6 rounded-r-lg ${currentPage === totalPages ? "text-[#BDBDBD] opacity-50" : "cursor-pointer"}`} onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
                </div>
            </section>
            <BrandLogos/>
        </>
    )
}