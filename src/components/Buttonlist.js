import React from "react";

const ButtonList = ()=>{
    const Allbutton = ["All","Live","Music","Javascript","C++","Java","React Router","Web Development","Data Structure","Gazal","Movies","Songs","Trending"];
    return (
        <div className="mt-4">
            {
                Allbutton.map((buttons,index)=>{
                    return(
                        <button key={index} className="bg-[#D3D3D3] py-1
                          px-1 font-medium mx-2 rounded-md sticky top-10">{buttons}</button>
                    )
                })
            }
            
        </div>
    )
}

export default ButtonList;