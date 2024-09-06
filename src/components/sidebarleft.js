import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { CiStopwatch } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { FaShopify } from "react-icons/fa6";
import { MdMovieEdit } from "react-icons/md";


const slidebar = [
    {
        image: <IoMdHome size="24px" />,
        tittle: "Home"
    },
    {
        image: <SiYoutubeshorts size="24px" />,
        tittle: "Shorts"
    },
    {
        image: <MdOutlineSubscriptions size="24px" />,
        tittle: "Subscriptions"
    },
    {
        image: <CiYoutube size="24px" />,
        tittle: "You"
    },
    {
        image: <FaHistory size="24px" />,
        tittle: "History"
    },
    {
        image: <MdOutlinePlaylistPlay size="24px" />,
        tittle: "Playlist"
    },
    {
        image: <CiStopwatch size="24px" />,
        tittle: "Watch Later"
    },
    {
        image: <AiOutlineLike size="24px" />,
        tittle: "Liked video"
    },
    {
        image: <FaShopify size="24px" />,
        tittle: "Shopping"
    },
    {
        image: <MdMovieEdit size="24px" />,
        tittle: "Movies"
    },
    
    


]

const Sidebar = () => {


    return (
        <div>
            <div className="relative left-0 w-auto border border-gray-400  overflow-y-scroll overflow-x-hidden h-[80vh]">
                {
                    slidebar.map((item, index) => {
                        return (
                            <div key={index} className="flex items-center my-6 cursor-pointer gap-4 hover:bg-slate-300 hover:py-1 hover:rounded-md">
                                {item.image}
                                <p>{item.tittle}</p>

                            </div>

                        )
                    })
                }

            </div>

        </div>
    )
}

export default Sidebar;