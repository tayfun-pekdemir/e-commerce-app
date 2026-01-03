import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import slideImg3 from "../assets/images/slider-images/slider-img3.png"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../index.css"

function ProductSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="
          custom-swiper
        [--swiper-navigation-color:#ffffff]
      "
    >
      <SwiperSlide>
        <div className="bg-[#23856D] flex flex-col h-295 justify-end lg:flex-row lg:justify-center lg:items-center lg:h-[70vh] lg:gap-7 lg:px-48">
          <div
            className="flex flex-col h-107.25 items-center text-center justify-end gap-9 px-11 lg:text-start lg:items-start lg:justify-center lg:px-0 lg:h-full "
          >
            <h2 className="text-white text-xl font-bold ">SUMMER 2020</h2>
            <h1 className="text-white text-4xl font-bold leading-12 lg:leading-20 lg:text-6xl lg:max-w-[60%]">
              Vita Classic Product
            </h1>
            <p className="text-white text-sm font-normal lg:max-w-[55%]">We know how large objects will act, We know how are objects will act,  We know</p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <span className="font-bold text-white text-2xl">$16.48</span>
                <button className="bg-[#2DC071] hover:bg-[#28A862] text-center rounded-sm px-10 py-4 text-white font-bold text-sm cursor-pointer">ADD TO CART</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end h-140 pt-7 overflow-hidden lg:h-full lg:pt-0 ">
            <img className="max-h-full max-w-full object-contain object-bottom lg:max-h-[90%]" src={slideImg3} /></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#23856D] flex flex-col h-295 justify-end lg:flex-row lg:justify-center lg:items-center lg:h-[70vh] lg:gap-7 lg:px-48">
          <div
            className="flex flex-col h-107.25 items-center text-center justify-end gap-9 px-11 lg:text-start lg:items-start lg:justify-center lg:px-0 lg:h-full "
          >
            <h2 className="text-white text-xl font-bold ">SUMMER 2020</h2>
            <h1 className="text-white text-4xl font-bold leading-12 lg:leading-20 lg:text-6xl lg:max-w-[60%]">
              Vita Classic Product
            </h1>
            <p className="text-white text-sm font-normal lg:max-w-[55%]">We know how large objects will act, We know how are objects will act,  We know</p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <span className="font-bold text-white text-2xl">$16.48</span>
                <button className="bg-[#2DC071] hover:bg-[#28A862] text-center rounded-sm px-10 py-4 text-white font-bold text-sm cursor-pointer">ADD TO CART</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end h-140 pt-7 overflow-hidden lg:h-full lg:pt-0 ">
            <img className="max-h-full max-w-full object-contain object-bottom lg:max-h-[90%]" src={slideImg3} /></div>
        </div>
      </SwiperSlide>
    </Swiper>
    
    
  );
}

export default ProductSlider;
