import mockProducts from "../mockdata/mockProducts"
import { useParams } from "react-router-dom"
import ProductDetail from "../sections/ProductDetail"
import { ChevronRight } from "lucide-react"
import productImages from "../mockdata/productImages"
import ProductCard from "../components/ProductCard"
import BrandLogos from "../components/BrandLogos"
import PageHeader from "../components/PageHeader"

export default function ProductDetailPage() {
    const { id } = useParams();

    const product = mockProducts.find(p => p.id === Number(id));

    if (!product) {
        return <div>Product not found.</div>
    }

    const products = mockProducts;

    const sameCategory = products.filter(
        p => p.category === product.category && p.id !== product.id);

    const bestSellers = [...sameCategory].sort((a,b)=> b.salesCount - a.salesCount);

    return (
        <>  
            <PageHeader/>
            <ProductDetail product={product} />
            <section className="flex flex-col px-11 py-8 gap-8 lg:px-48">
                <div className="flex flex-row text-[#737373] font-bold gap-2 text-xs flex-wrap justify-evenly items-center md:justify-center">
                    <p className="underline font-600">Description</p>
                    <p className="">Additional Information</p>
                    <p className="">Reviews <span className="text-[#23856D]">(0)</span></p>
                </div>
                <hr className="hidden text-[#ECECEC] md:flex"></hr>
                <div className="flex flex-col gap-8 md:flex-row text-sm text-[#737373]">
                    <div className="flex-1 aspect-4/3 overflow-hidden">
                        <img src={productImages[10]} className="w-full h-full object-cover object-top"></img>
                    </div>
                    <div className="flex flex-col flex-1 gap-8">
                        <h3 className="text-[#252B42] font-bold text-2xl">the quick fox jumps over </h3>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                    </div>
                    <div className="flex flex-col flex-1 gap-6">
                        <div className="flex flex-col gap-8">
                            <h3 className="text-[#252B42] font-bold text-2xl">the quick fox jumps over </h3>
                            <div className="flex flex-col gap-2.5">
                                <p className="flex flex-row gap-5 items-center"><ChevronRight />the quick fox jumps over the lazy dog</p>
                                <p className="flex flex-row gap-5 items-center"><ChevronRight />the quick fox jumps over the lazy dog</p>
                                <p className="flex flex-row gap-5 items-center"><ChevronRight />the quick fox jumps over the lazy dog</p>
                                <p className="flex flex-row gap-5 items-center"><ChevronRight />the quick fox jumps over the lazy dog</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h3 className="text-[#252B42] font-bold text-2xl">the quick fox jumps over </h3>
                            <div className="flex flex-col gap-2.5">
                                <p className="flex flex-row gap-5 items-center"><ChevronRight />the quick fox jumps over the lazy dog</p>
                                <p className="flex flex-row gap-5 items-center"><ChevronRight />the quick fox jumps over the lazy dog</p>
                                <p className="flex flex-row gap-5 items-center"><ChevronRight />the quick fox jumps over the lazy dog</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-6 p-11 bg-[#FAFAFA] lg:px-48">
                <h2 className="text-[#252B42] text-2xl font-bold text-center md:text-start">BESTSELLER PRODUCTS</h2>
                <hr className="text-[#ECECEC]"></hr>
                <ul className="flex flex-row gap-8 flex-wrap justify-center items-center">
                    {
                        bestSellers.slice(0, 8).map(product => {
                            return <li className="md:flex-1/5" key={product.id}>
                                <ProductCard product={product} isDetailPage={true}/>
                            </li>
                        })
                    }
                </ul>
            </section>
            <BrandLogos/>
        </>
    )
};
