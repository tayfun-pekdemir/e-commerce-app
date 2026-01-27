import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import mockCategories from "../mockdata/mockCategories";
import CategoryCard from "../components/CategoryCard";
import ProductSlider from "../components/ProductSlider";
import PromoSection from "../sections/PromoSection";
import BlogCard from "../components/BlogCard";
import mockBlogs from "../mockdata/mockBlogs";
import { useSelector } from "react-redux";


export default function HomePage() {

    const products = useSelector(state => state.productRed.productList);
    const fetchState = useSelector(state => state.productRed.fetchState);
    const [categories,] = useState(mockCategories);

    return (
        <>
            <HeroSlider />
            <section className="flex flex-col text-center py-20 px-11 gap-12 bg-[#FAFAFA] lg:px-48">
                <div className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-2xl text-[#252B42]">
                        EDITOR'S PICK
                    </h3>
                    <p className="text-sm text-[#737373]">Problems trying to resolve the conflict between</p>
                </div>
                <div className="flex flex-col gap-8 md:flex-row ">
                    {categories.map((category, index) => {
                        if (index === 2) {

                            return (
                                <div key="right-col" className="flex flex-col gap-8 md:gap-4 md:flex-1">
                                    <CategoryCard key={categories[2].id} name={categories[2].name} image={categories[2].image} />
                                    <CategoryCard key={categories[3].id} name={categories[3].name} image={categories[3].image} />
                                </div>
                            )
                        }
                        if (index === 1) {
                            return (
                                <CategoryCard key={category.id} name={category.name} image={category.image} className="md:flex-1" />
                            )
                        }
                        if (index === 0) {
                            return (
                                <CategoryCard key={category.id} className="md:flex-2" name={category.name} image={category.image} />
                            )
                        }
                    }

                    )}
                </div>
            </section>
            <section className="flex flex-col text-center py-20 px-11 lg:px-48">
                <div className="flex flex-col items-center gap-2.5 pb-12">
                    <h2 className="text-[#737373] text-xl">Featured Products</h2>
                    <h3 className="font-bold text-2xl max-w-11/12 text-[#252B42]">
                        BESTSELLER PRODUCTS
                    </h3>
                    <p className="text-sm text-[#737373]">Problems trying to resolve the conflict between</p>
                </div>
                <ul className="flex flex-row justify-center gap-8 flex-wrap min-h-50 md:items-stretch">
                    {
                        fetchState === "FETCHING" ? (
                            <li>
                                <div className="flex justify-center items-center min-h-75">
                                    <span className="w-8 h-8 border-4 border-[#252B42] border-t-transparent rounded-full animate-spin"></span>
                                </div>
                            </li>

                        ) : (
                            [...products].sort((a, b) => b.sell_count - a.sell_count).slice(0, 8).map(product => {
                                
                                return <li className="flex-none basis-full sm:basis-[calc((100%-3rem)/2)] md:basis-[calc((100%-3rem*3)/4)]" key={product.id}>
                                    <ProductCard product={product} />
                                </li>
                            })
                        )}
                </ul>
            </section>
            <ProductSlider />
            <PromoSection />
            <section className="flex flex-col text-center justify-center py-20 px-11 gap-12 lg:px-48">
                <div className="flex flex-col items-center gap-2.5 pb-12">
                    <h2 className="text-[#23A6F0] text-sm font-bold">Practice Advice</h2>
                    <h3 className="font-bold text-4xl text-[#252B42] max-w-[70%]">
                        Featured Posts
                    </h3>
                    <p className="text-sm text-[#737373]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
                <ul className="flex flex-col gap-7 md:flex-row md:justify-between">
                    {mockBlogs.map(blog => {
                        return <li key={blog.id}>
                            <BlogCard image={blog.image} />
                        </li>
                    })}
                </ul>
            </section>
        </>
    )
}