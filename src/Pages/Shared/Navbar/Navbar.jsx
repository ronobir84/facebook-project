import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/image/facebook.png"
import { FaSearch, FaUserCircle, FaGamepad, FaBorderNone } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BsFillPlayBtnFill, BsMessenger } from "react-icons/bs";
import { BiStore } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import image from "../../../assets/image/main.jpg"

const Navbar = () => {
    return (
        <div>
            <div className="bg-[#FFFFFF] fixed  px-10 w-full shadow-xl">
                <div className="flex justify-between pt-2">
                    <div className="flex gap-3 pt-1">
                        <Link><img src={logo} alt="" className="w-12" /></Link>
                        <div className="relative bottom-4">
                            <FaSearch className="relative top-[35px] left-5 text-gray-400"></FaSearch>
                            <input className=" w-[280px] h-14 px-12 rounded-full bg-[#F0F2F5] " placeholder="Search Facebook" type="search" />
                        </div>
                    </div>
                    <div className="flex gap-24 pt-4">
                        <NavLink><GoHomeFill className="text-4xl text-gray-600"></GoHomeFill></NavLink>
                        <NavLink><BsFillPlayBtnFill className="text-3xl text-gray-600"></BsFillPlayBtnFill></NavLink>
                        <NavLink><BiStore className="text-4xl text-gray-600"></BiStore></NavLink>
                        <NavLink><FaUserCircle className="text-4xl text-gray-600"></FaUserCircle></NavLink>
                        <NavLink><FaGamepad className="text-4xl text-gray-600"></FaGamepad></NavLink>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-[65px] h-[65px] rounded-full  bg-[#F0F2F5] hover:bg-gray-300">
                            <NavLink><FaBorderNone className="text-3xl relative top-4 left-[16px] "></FaBorderNone></NavLink>
                        </div>
                        <div className="w-[65px] h-[65px] rounded-full  bg-[#F0F2F5] hover:bg-gray-300">
                            <NavLink><BsMessenger className="text-3xl relative top-4 left-[16px]"></BsMessenger></NavLink>
                        </div>
                        <div className="w-[65px] h-[65px] rounded-full  bg-[#F0F2F5] hover:bg-gray-300">
                            <NavLink><IoNotifications className="text-3xl relative top-4 left-[16px]"></IoNotifications></NavLink>
                        </div>
                        <div className="">
                            <img className="w-[64px] h-[65px] rounded-full " src={image} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;