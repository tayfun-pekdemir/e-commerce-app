import BrandLogos from "../sections/BrandLogos"
import TeamCard from "../components/TeamCard"
import mockTeam from "../mockdata/mockTeam"
import productImg13 from "../assets/images/product-images/product-img13.jpg"

export default function AboutUsPage() {

    return (
        <>
            <section className="flex flex-col items-center justify-center px-11 gap-8 md:flex-row lg:px-48">
                <div className="flex flex-col justify-center items-center text-center text-[#252B42] gap-10 flex-1 py-36 md:py-0 md:items-start md:text-start">
                    <h1 className="hidden font-bold md:flex">ABOUT COMPANY</h1>
                    <h3 className="text-4xl font-bold md:text-6xl md:max-w-3/5 ">ABOUT US</h3>
                    <p className="text-xl text-[#737373] max-w-[83%]">We know how large objects will act, but things on a small scale just do not act that way.</p>
                    <button className="bg-[#23A6F0] border border-[#23A6F0] px-10 py-4 rounded-sm text-sm text-white font-bold cursor-pointer hover:bg-white hover:text-[#23A6F0]">Get Quote Now</button>
                </div>
                <div className="w-full h-110 md:min-h-200 md:w-1/2">
                    <img src="aboutUsImg.png" className="w-full object-cover h-full" />
                </div>
            </section>
            <section className="flex flex-col items-center justify-center px-11 py-20 gap-15 md:flex-row lg:px-48">
                <div className="flex flex-col items-center justify-center text-center py-6 gap-6 md:items-start md:justify-start md:text-start md:py-0">
                    <p className="text-[#E74040] text-sm">Problems trying</p>
                    <p className="font-bold text-[#252B42] text-2xl md:max-w-[50%]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center text-center px-11 py-36 gap-25 md:justify-between md:gap-0 md:flex-row md:py-20 lg:px-48">
                <div>
                    <span className="font-bold text-6xl text-[#252B42]">15K</span>
                    <p className="font-bold text-[#737373]">Happy Customer</p>
                </div>
                <div>
                    <span className="font-bold text-6xl text-[#252B42]">150K</span>
                    <p className="font-bold text-[#737373]">Monthly visitors</p>
                </div>
                <div>
                    <span className="font-bold text-6xl text-[#252B42]">15</span>
                    <p className="font-bold text-[#737373]">Countries Worldwide</p>
                </div>
                <div>
                    <span className="font-bold text-6xl text-[#252B42]">100+</span>
                    <p className="font-bold text-[#737373]">Top Partners</p>
                </div>
            </section>
            <section className="flex items-center justify-center text-center px-11 py-20 md:py-28 lg:px-48">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden md:aspect-video">
                    <img
                        src="/video-thumb.jpg"
                        className="w-full h-full object-cover"
                    />

                    <button className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#23A6F0] text-white flex items-center justify-center shadow-xl 
                        cursor-pointer transition-transform duration-300 ease-out hover:scale-110 hover:shadow-2xl">
                            ▶
                        </div>
                    </button>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center p-11 md:py-28 lg:px-48">
                <div className="flex flex-col items-center justify-center text-center gap-2.5 pb-11 md:pb-28">
                    <h2 className="text-[#252B42] text-4xl font-bold leading-12.5 max-w-4/5 md:max-w-full">Meet Our Team</h2>
                    <p className="text-sm text-[#737373] max-w-[80%]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-9 md:flex-row md:flex-wrap md:gap-8 ">
                    {mockTeam.slice(0, 3).map(m => {
                        return <TeamCard key={m.id} userName={m.userName} profession={m.profession} image={m.image} />
                    })}
                </div>
            </section>

            <BrandLogos isAboutPage={true} />
            <section className="flex py-25.5 px-17.5 bg-[#2A7CC7] md:flex-row md:justify-between md:items-center md:py-0 md:pl-11 md:pr-0 lg:pl-48">
                <div className="flex flex-col items-center justify-center text-center gap-6 text-white md:justify-start md:items-start md:text-start md:pr-16">
                    <h2 className="font-bold">WORK WITH US</h2>
                    <h3 className="font-bold text-4xl">Now Let's grow Yours</h3>
                    <p className="text-sm max-w-[90%] md:max-w-[55%]">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th</p>
                    <button className="bg-[#2A7CC7] border border-[#FAFAFA] px-10 py-4 rounded-sm text-sm text-white font-bold cursor-pointer hover:bg-[#FAFAFA] hover:text-[#2A7CC7]">Button</button>
                </div>
                <div className="hidden md:flex w-147.5 h-160">
                    <img src={productImg13} className="w-full h-full object-cover object-top"></img>
                </div>
            </section>
        </>
    )
}