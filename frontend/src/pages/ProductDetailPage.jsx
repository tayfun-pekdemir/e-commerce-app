import { useParams } from "react-router-dom";
import ProductDetail from "../sections/ProductDetail";
import { ChevronRight } from "lucide-react";
import productImages from "../mockdata/productImages";
import ProductCard from "../components/ProductCard";
import BrandLogos from "../sections/BrandLogos";
import PageHeader from "../components/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryBestSellers, fetchProductById } from "../store/actions/productActions";
import { useEffect } from "react";

export default function ProductDetailPage() {

    const fetchState = useSelector(state => state.productRed.fetchState);
    const currentProduct = useSelector(state => state.productRed.currentProduct);
    const categoryBestSellers = useSelector(state => state.productRed.categoryBestSellers);
    const { productId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductById(productId));
    }, [dispatch, productId]);

    useEffect(() => {
        if (currentProduct) {
            dispatch(fetchCategoryBestSellers({
                category: currentProduct.category_id,
                currentProductId: currentProduct.id,
                limit: 8,
                sort: "sell_count:desc"
            }));
        }
    }, [dispatch, currentProduct]);

    if (fetchState === "FETCHING") {
        return (
            <div className="flex justify-center items-center min-h-75">
                <span className="w-8 h-8 border-4 border-[#252B42] border-t-transparent rounded-full animate-spin"></span>
            </div>
        )
    }

    if (!currentProduct) {
        return <div className="text-center">Product not found.</div>
    }

    return (
        <>
            <PageHeader />
            <ProductDetail product={currentProduct} />
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
                <ul className="flex flex-row justify-start gap-8 flex-wrap min-h-50 md:items-stretch">
                    {
                        categoryBestSellers.map(product => {
                            return <li className="flex-none basis-full sm:basis-[calc((100%-3rem)/2)] md:basis-[calc((100%-3rem*3)/4)]" key={product.id}>
                                <ProductCard product={product} isDetailPage={true} />
                            </li>
                        })
                    }
                </ul>
            </section>
            <BrandLogos />
        </>
    )
};
