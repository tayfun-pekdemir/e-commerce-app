import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import slideImg1 from "../assets/images/slider-images/slider-img1.jpg"
import slideImg2 from "../assets/images/slider-images/slider-img2.jpg"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../index.css"
import { Link } from "react-router-dom"

function HeroSlider() {
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
        <div
          className="min-h-200 bg-center bg-cover flex flex-col items-center justify-center gap-9 px-11 md:min-h-screen md:items-start md:px-30 lg:px-48"
          style={{ backgroundImage: `url(${slideImg1})` }}
        >
          <h2 className="text-white text-base font-bold">SUMMER 2020</h2>
          <h1 className="text-white text-4xl font-bold text-center md:leading-20 md:text-6xl md:text-start">
            NEW COLLECTION
          </h1>
          <p className="text-white text-2xl font-normal text-center max-w-[90%] lg:max-w-[40%] md:text-start">We know how large objects will act, but things on a small scale.</p>
          <Link to="/shop" className="bg-[#2DC071] hover:bg-[#28A862] text-center rounded-sm px-10 py-4 text-white font-bold text-2xl">SHOP NOW</Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="min-h-200 bg-center bg-cover flex flex-col items-center justify-center gap-6 px-11 md:min-h-screen md:px-30 lg:px-48"
          style={{ backgroundImage: `url(${slideImg2})` }}
        >
          <h1 className="text-white text-4xl font-bold text-center md:leading-20 md:text-6xl">
            BLACK FRIDAY
          </h1>
          <p className="text-white text-2xl font-normal text-center max-w-[90%] lg:max-w-1/2">We know how large objects will act, but things on a small scale<span className="hidden md:inline"> just do not act that way</span>.</p>
          <Link to="/shop" className="bg-[#2DC071] hover:bg-[#28A862] text-center rounded-sm px-10 py-4 text-white font-bold text-2xl">SHOP NOW</Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;
