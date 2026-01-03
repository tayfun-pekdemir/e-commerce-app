import promoImage1 from "../assets/images/promo-images/promo-img1.png"
export default function PromoSection() {
    return (
        <section className="flex flex-col pt-30 h-250 lg:h-170 md:px-11 md:pt-4 lg:gap-36 lg:flex-row lg:pt-0 md:justify-center md:items-center">
            <div className="flex flex-col flex-1 px-11 items-center gap-8 text-center justify-center md:px-0 lg:order-2 lg:items-start lg:text-start">
                <h2 className="text-[#BDBDBD] font-bold">SUMMER 2020</h2>
                <h2 className="text-[#252B42] font-bold text-4xl max-w-[90%] lg:max-w-[60%] leading-12.5">Part of the Neural Universe</h2>
                <p className="text-xl text-[#737373] max-w-4/5 lg:max-w-3/5">We know how large objects will act, but things on a small scale.</p>
                <div className="flex flex-col gap-6 md:gap-8 lg:flex-row">
                    <button className="bg-[#23A6F0] px-10 py-4 rounded-sm text-sm text-white font-bold cursor-pointer hover:bg-white hover:text-[#23A6F0] lg:bg-[#2DC071] lg:hover:bg-white lg:hover:text-[#2DC071]">BUY NOW</button>
                    <button className="px-10 py-4 rounded-sm text-sm text-[#23A6F0] border border-[#23A6F0] font-bold cursor-pointer hover:bg-[#23A6F0] hover:text-white lg:border-[#2DC071] lg:text-[#2DC071] lg:hover:text-white lg:hover:bg-[#2DC071]">Learn More</button>
                </div>
            </div>
            <div className="flex-1 lg:order-1 md:h-full md:w-full">
                <img src={promoImage1} className="h-full w-full object-cover"
                    style={{ objectPosition: "65%" }} />
            </div>
        </section>
    )
}