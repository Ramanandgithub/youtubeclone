import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { CiVideoOn } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from 'react-avatar';
import { CiSearch } from "react-icons/ci";

const Navbar = ()=>{

    return (
        <div className="flex justify-between px-1 items-center w-[100%] sticky top-0 bg-white z-10">
            <div className="flex items-center">
              <GiHamburgerMenu size="24" />
              <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="logo" className="w-[100px]"/>

            </div>
            <div className="flex items-center  w-[40%]">

                <div className="border border-gray-500 px-2  rounded-l-full py-1 w-[100%]">
                   <input type="text" placeholder="search" className="border-none outline-none px-2 w-[100%]"  size="100%"/>
                </div>
                
                <button className="px-2 border py-1 border-gray-500 rounded-r-full"><CiSearch size='24' /></button>
    
            </div>
            <div className="flex items-center mx-2 gap-3 ">
                <CiVideoOn className="cursor-pointer"  size="24"/>
                <IoIosNotificationsOutline className="cursor-pointer" size="24" />
                <Avatar githubHandle="sitebase" size={24}  round="20px"  className="cursor-pointer" />

    
            </div>

            
        </div>
    )

}

export default Navbar;