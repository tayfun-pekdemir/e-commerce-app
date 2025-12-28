import HeroSlider from "../components/HeroSlider"
import ProductCard from "../components/ProductCard"
import { mockProducts } from "../mockdata/mockProducts"
import { useState, useEffect } from "react"

export default function HomePage() {

    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        setProducts(mockProducts)
    },[])

    return (
        <>
            <HeroSlider />
            <section className="flex flex-col text-center py-20 px-11">
                <div className="flex flex-col gap-2.5 pb-12">
                    <h2 className="text-[#737373] text-xl">Featured Products</h2>
                    <h3 className="font-bold text-2xl">
                        BESTSELLER PRODUCTS
                    </h3>
                    <p className="text-sm text-[#737373]">Problems trying to resolve the conflict between</p>
                </div>
                <div className="flex flex-col justify-center gap-8 md:flex-row flex-wrap">
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