import HeroSlider from "../components/HeroSlider"
import ProductCard from "../components/ProductCard"
import mockProducts from "../mockdata/mockProducts"
import { useState, useEffect } from "react"
import mockCategories from "../mockdata/mockCategories"
import CategoryCard from "../components/CategoryCard"

export default function HomePage() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setProducts(mockProducts)
        setCategories(mockCategories)
    }, [])

    return (
        <>
            <HeroSlider />
            <section className="flex flex-col text-center py-20 px-11 gap-12 bg-[#FAFAFA] lg:px-48">
                <div className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-2xl">
                        EDITOR'S PICK
                    </h3>
                    <p className="text-sm text-[#737373]">Problems trying to resolve the conflict between</p>
                </div>
                <div className="flex flex-col gap-8 md:flex-row ">
                    {categories.map((category, index) => {
                        if (index === 2) {

                            return (
                                <div key="right-col" className="flex flex-col gap-4 md:flex-1">
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
                    <h3 className="font-bold text-2xl max-w-11/12">
                        BESTSELLER PRODUCTS
                    </h3>
                    <p className="text-sm text-[#737373]">Problems trying to resolve the conflict between</p>
                </div>
                <div className="flex flex-row justify-center gap-8 flex-wrap ">
                    {
                        products.slice(0, 8).map(product => {
                            return <ProductCard key={product.id} id={product.id} title={product.title} category={product.category} price={product.price} discountedPrice={product.discountedPrice}
                                image={product.image} colors={product.colors} />
                        })
                    }
                </div>
            </section>
        </>
    )
}