import React from "react";
import Avatar from "react-avatar";
// import { DiVim } from "react-icons/di";


const Videocard = ({ video }) => {

    return (

        <div className="px-4 my-3">




            <div className="cursor-pointer">
                <div >
                <img src={video.snippet.thumbnails.medium.url} alt="youtube tumb" width="330px" className="rounded" />
                <div className="flex mt-1">
                    <Avatar src="https://static.vecteezy.com/system/resources/previews/005/076/592/non_2x/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg" size={24}  className="cursor-pointer rounded-full" />

                    <div>
                        <p className="font-bold mx-2 text-justify">{video.snippet.title}</p>
                        <p className="text-grey texy-grey-800">{video.snippet.channelTitle}</p>
                    </div>

                </div>
                </div>

            </div>






        </div>



    )
}

export default Videocard;