import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAlarmClock,
    faChartArea,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons'

export default function BlogCard({image}) {

    return (
        <article className="flex flex-col shadow-lg">
            <Link to="">
            <div style={{ backgroundImage: `url(${image})` }} className="w-full h-82.5 bg-center bg-cover flex items-start pt-5 pl-5">
                <span className="bg-[#E74040] text-white text-sm font-bold p-2.5 rounded-[3px]">NEW</span>
            </div>
            </Link>
            <div className="flex flex-col p-6 gap-6 text-start">
                <nav>
                    <ul className="flex gap-4 text-[#737373] text-xs">
                        <li>
                            <Link to="" className="hover:text-[#8EC2F2]">Google</Link>
                        </li>
                        <li>
                            <Link to="" className="hover:text-[#8EC2F2]">Trending</Link>
                        </li>
                        <li>
                            <Link to="" className="hover:text-[#8EC2F2]">New</Link>
                        </li>
                    </ul>
                </nav>
                <Link to="">
                <h2 className="text-[#252B42]">Loudenst â la Madison #1 (L'integral)</h2>
                </Link>
                <p className="text-[#737373] text-sm">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                <div className="flex flex-row justify-between text-xs">
                    <div className="flex flex-row gap-1 justify-center items-center">
                        <FontAwesomeIcon icon={faAlarmClock} className="text-[#23A6F0] hover:text-[#1D8BD3]" />
                        <p className="text-[#737373]">22 April 2021</p></div>
                    <div className="flex flex-row gap-1 justify-center items-center">
                        <FontAwesomeIcon icon={faChartArea} className="text-[#23856D] hover:text-[#1b6b57]" />
                        <p className="text-[#737373]">10 comments</p></div>
                </div>
                <Link className="flex justify-start items-center gap-2.5 font-bold text-sm text-[#737373]">
                Learn More<FontAwesomeIcon icon={faChevronRight} className="text-[#23A6F0] hover:text-[#1D8BD3]" />
                </Link>
            </div>
        </article>
    )
}