import React from "react";
import ButtonList from "./Buttonlist.js";
import VideoContainer from "./videocontainer.js";

const Feed = ()=>{
    return(
        <div>
           <ButtonList />
           <VideoContainer classname="overflow-y-scroll overflow-x-hidden h-full
           " />
        </div>
    )
}

export default Feed;