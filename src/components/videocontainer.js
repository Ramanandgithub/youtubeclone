import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { VideoList } from "../costant/youtube";
import Videocard from "./videocard";
// import Avatar from "react-avatar";





// const allvideo = [""];
const VideoContainer = () => {

    const [video,setvideo] = useState([]);

    const FetchyoutubeVideo = async () => {
        try {
            const res = await axios.get(`${VideoList}`);
            console.log(res?.data?.items);
            
            // allvideo[] = res.data.items;
            // console.log(allvideo);

            setvideo(res?.data?.items);

        } catch (error) {
            console.log(error);

        }

    }

    // const chennelIdData = async ()=>{
    //     try {
    //         const response = await axios.get(())
            
    //     } catch (error) {
            
    //     }
    // }

    useEffect(() => {
        FetchyoutubeVideo();
    }, []);
    return (
        <div className="grid grid-cols-3 mt-3">

            {
                video.map((video,index)=>{
                    return(
                        
                            <Videocard key={video.id} video = {video}   />
                            
                        

                        
                    )
                
                })
            }
            
        </div>
    )
}

export default VideoContainer;