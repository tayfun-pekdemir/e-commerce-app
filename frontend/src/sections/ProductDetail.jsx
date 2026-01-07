import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs } from "swiper/modules"
import { useState } from "react"
import { Eye, ShoppingCart, Heart, Star } from 'lucide-react'

export default function ProductDetail({ product }) {

    const [selectedColor, setSelectedColor] = useState("");
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const fullStars = Math.floor(product.rating);

    const stars = [1, 2, 3, 4, 5];

    return (
        <section className="flex flex-col gap-8 justify-center items-center md:flex-row md:items-stretch md:flex-wrap md:gap-0 md:justify-start bg-[#FAFAFA] px-11 pb-8 lg:px-48">
            <Swiper
                modules={[Navigation, Thumbs]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={false}
                thumbs={{ swiper: thumbsSwiper }}
                className="
                max-w-full
                md:max-w-1/2
                md:max-h-125
                custom-swiper
              [--swiper-navigation-color:#ffffff]
                "
            >
                {product.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={img} className="object-center h-full w-full " />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs]}
                spaceBetween={20}
                slidesPerView="auto"
                freeMode={true}
                watchSlidesProgress
                className="h-full w-full md:order-3 md:w-1/2 mx-0! md:mt-4 "
            >
                {product.images.slice(0, 3).map((img, idx) => (
                    <SwiperSlide key={idx} className="cursor-pointer flex-1 max-w-25! max-h-18.75! last:mx-0!">
                        <img src={img} className="object-cover object-center w-full h-full" />
                    </SwiperSlide>
                ))}

            </Swiper>

            <div className="flex flex-col gap-4 px-6 md:w-1/2 md:justify-between">
                <h3 className="font-bold text-[#252B42]">{product.title}</h3>
                <div className="flex flex-row gap-2.5 items-center mb-2">
                    <div className="flex flex-row text-[#F3CD03] gap-1">
                        {
                            stars.map((star, index) => {
                                return <Star key={star} strokeWidth={1} fill={index < fullStars ? "#F3CD03" : "none"} />
                            })
                        }
                    </div>
                    <span className="text-sm font-bold text-[#737373]">{product.reviewCount + " "}Reviews</span>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-[#252B42] text-2xl font-bold">{product.price}</p>
                    <p className="font-bold text-sm text-[#737373] mb-4">Availability : <span className={`${product.stock > 0 ? "text-[#23A6F0]" : "text-[#B73225]"}`}>{product.stock > 0 ? "In Stock" : "Out of Stock"}</span></p>
                </div>
                <p className="text-[#858585] text-sm">{product.description}</p>
                <hr className="text-[#BDBDBD] mb-1"></hr>
                <div className="flex items-center justify-start gap-2.5">
                    {product.colors.map((color) => (
                        <label key={color} className="cursor-pointer">
                            <input type="radio" name={`color-${product.id}`} value={color} className="hidden" checked={selectedColor === color} onChange={() => setSelectedColor(color)}
                            />
                            <span
                                className={`w-6 h-6 rounded-full inline-block 
                                    ${selectedColor === color ? "scale-125 ring-2 ring-[#737373]" : ""}`}
                                style={{ backgroundColor: color }}
                            ></span>
                        </label>
                    ))}
                </div>
                <div className="flex flex-row items-center gap-2.5 mt-8">
                    <button className="font-bold text-white text-sm bg-[#23A6F0] py-3 px-3.5 rounded-sm">Select Options</button>
                    <div className="flex flex-row gap-2.5 items-center">
                        <button className="flex rounded-full border border-[#E8E8E8] justify-center items-center h-9 w-9"><Heart strokeWidth={1} /></button>
                        <button className="flex rounded-full border border-[#E8E8E8] justify-center items-center h-9 w-9"><ShoppingCart strokeWidth={1} /></button>
                        <button className="flex rounded-full border border-[#E8E8E8] justify-center items-center h-9 w-9"><Eye fill="black" strokeWidth={1.75} stroke="white" /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}