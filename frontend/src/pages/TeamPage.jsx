import PageHeader from "../components/PageHeader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import teamhero1 from "../assets/images/team-heroImages/teampagehero-Img1.jpg"
import teamhero2 from "../assets/images/team-heroImages/teampagehero-Img2.jpg"
import teamhero3 from "../assets/images/team-heroImages/teampagehero-Img3.jpg"
import teamhero4 from "../assets/images/team-heroImages/teampagehero-Img4.jpg"
import teamhero5 from "../assets/images/team-heroImages/teampagehero-Img5.jpg"
import TeamCard from "../components/TeamCard"
import mockTeam from "../mockdata/mockTeam"

export default function TeamPage() {

    return (
        <>
            <PageHeader isTeamPage={true} />
            <section className="flex flex-col items-center justify-center px-11 pb-8 md:flex-row lg:px-48">
                <div className="flex flex-col h-267.5 gap-2.5 md:h-132.5 md:flex-row">
                    <div className="w-full h-1/2 overflow-hidden md:h-full md:w-1/2 ">
                        <img src={teamhero1} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-1/2 flex flex-wrap md:w-1/2 md:h-full md:flex-col">
                        <div className="w-1/2 h-1/2 pr-0.5 pb-1.25 overflow-hidden md:pr-1.25">
                            <img src={teamhero2} className="w-full h-full object-cover"/>
                        </div>
                        <div className="w-1/2 h-1/2 pl-0.5 pb-1.25 overflow-hidden md:pl-0 md:pb-0 md:pt-1.25 md:pr-1.25">
                            <img src={teamhero3} className="w-full h-full object-cover"/>
                        </div>
                        <div className="w-1/2 h-1/2 pr-0.5 pt-1.25 overflow-hidden md:pt-0 md:pr-0 md:pl-1.25 md:pb-1.25">
                            <img src={teamhero4} className="w-full h-full object-cover"/>
                        </div>
                        <div className="w-1/2 h-1/2 pl-0.5 pt-1.25 overflow-hidden md:pl-1.25">
                            <img src={teamhero5} className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </section >
            <section className="flex flex-col items-center justify-center p-11 md:py-28 lg:px-48">
                <div className="flex items-center justify-center text-center pb-11 md:pb-28">
                    <h2 className="text-[#252B42] text-4xl font-bold leading-12.5 max-w-4/5 md:max-w-full">Meet Our Team</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-9 md:flex-row md:flex-wrap md:gap-8 ">
                    { mockTeam.map( m => {
                        return <TeamCard key={m.id} userName={m.userName} profession={m.profession} image={m.image}/>
                    })}
                </div>
            </section>
            <section className="flex flex-col justify-center items-center text-center gap-8 px-11 py-28 lg:px-48">
                <p className="text-4xl text-[#252B42] font-bold leading-12.5">Start your 14 days free trial</p>
                <p className="text-[#737373] text-sm md:max-w-3/5">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</p>
                <button className="bg-[#23A6F0] border border-[#23A6F0] px-10 py-4 rounded-sm text-sm text-white font-bold cursor-pointer hover:bg-white hover:text-[#23A6F0]">Try it free now</button>
                <div className="flex flex-row gap-8">
                    <a href="https://x.com" className="inline-flex items-center" target="_blank">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-3xl cursor-pointer text-[#55ACEE]"
                        />
                    </a>
                    <a href="https://facebook.com" className="inline-flex items-center" target="_blank">
                        <FontAwesomeIcon
                            icon={faSquareFacebook}
                            className="text-3xl cursor-pointer text-[#395185]"
                        />
                    </a>
                    <a href="https://instagram.com" className="inline-flex items-center" target="_blank">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-3xl cursor-pointer"
                        />
                    </a>
                    <a href="https://linkedin.com" className="inline-flex items-center" target="_blank">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="text-3xl cursor-pointer text-[#0A66C2]"
                        />
                    </a>
                </div>
            </section>

        </>
    )
}