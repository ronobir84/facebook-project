import { Link, NavLink } from "react-router-dom";
import image from "../../../assets/image/main.jpg";
import { FcConferenceCall, FcBookmark, FcBiohazard, FcTimeline, FcClock, FcGallery } from "react-icons/fc";
import group from "../../../assets/image/group.png"
import blood from "../../../assets/image/blood.png"
import events from "../../../assets/image/events.png"
import games from "../../../assets/image/play-gams.png"
import video from "../../../assets/image/play-video.png"
import market from "../../../assets/image/market.png"
import messageer from "../../../assets/image/messanger.png"
import payment from "../../../assets/image/payment.png"
const LeftSideNav = () => {
    return (
        <div className="pt-20   ">
            <div className="w-[450px] min-h-screen  bg-fixed  overscroll-y-contain px-14 bg-white border  ">
                <div className="flex items-center gap-4  pt-8 ">
                    <Link><img className="w-[45px] h-[45px] rounded-full " src={image} alt="" /></Link>
                    <h2 className="text-xl font-medium text-gray-500">Ronobir Das</h2>
                </div>

                <div className="">
                    <ul>
                        <li className="mt-6">
                            <NavLink className="flex gap-4 items-center p-2 rounded-full  hover:bg-gray-200  ">
                                <FcConferenceCall className="text-4xl"></FcConferenceCall>
                                <span className="text-xl font-medium text-gray-500">Friends</span>
                            </NavLink>
                        </li>
                        <li className="mt-6">
                            <NavLink className="flex gap-4 items-center p-2 rounded-full  hover:bg-gray-200">
                                <FcBookmark className="text-4xl"></FcBookmark>
                                <span className="text-xl font-medium text-gray-500">Saved</span>
                            </NavLink>
                        </li>
                        <li className="mt-6">
                            <NavLink className="flex gap-4 items-center p-2 rounded-full  hover:bg-gray-200">
                                <FcBiohazard className="text-4xl"></FcBiohazard>
                                <span className="text-xl font-medium text-gray-500">Pages</span>
                            </NavLink>
                        </li>
                        <li className="mt-6">
                            <NavLink className="flex gap-4 items-center p-2 rounded-full  hover:bg-gray-200">
                                <img className="w-10" src={group} alt="" />
                                <span className="text-xl font-medium text-gray-500">Groups</span>
                            </NavLink>
                        </li>
                        <li className="mt-6">
                            <NavLink className="flex gap-4 items-center p-2 rounded-full  hover:bg-gray-200">
                                <img className="w-10" src={messageer} alt="" />
                                <span className="text-xl font-medium text-gray-500">Messenger</span>
                            </NavLink>
                        </li>
                        <li className="mt-6">
                            <NavLink className="flex gap-4 items-center p-2 rounded-full  hover:bg-gray-200">
                                <img className="w-10" src={video} alt="" />
                                <span className="text-xl font-medium text-gray-500">Video</span>
                            </NavLink>
                        </li>
                        <li className="mt-6">
                            <NavLink className="flex gap-4 items-center p-2 rounded-full  hover:bg-gray-200">
                                <img className="w-10" src={blood} alt="" />
                                <span className="text-xl font-medium text-gray-500">Blood Donations</span>
                            </NavLink>
                        </li>
                        <li className="mt-6">
                            <NavLink className="flex gap-4 items-center p-2 rounded-full  hover:bg-gray-200">
                                <img className="w-10" src={market} alt="" />
                                <span className="text-xl font-medium text-gray-500">Marketplace</span>
                            </NavLink>
                        </li>
                        <li className="mt-6">
                            <NavLink className="flex gap-4 items-center p-2 rounded-full  hover:bg-gray-200">
                                <img className="w-10" src={events} alt="" />
                                <span className="text-xl font-medium text-gray-500">Events</span>
                            </NavLink>
                        </li>
                        <li className="mt-6">
                            <NavLink className="flex gap-4 items-center p-2 rounded-full  hover:bg-gray-200">
                                <FcClock className="text-4xl"></FcClock>
                                <span className="text-xl font-medium text-gray-500">Memories</span>
                            </NavLink>
                        </li>
                        <li className="mt-6">
                            <NavLink className="flex gap-4 items-center p-2 rounded-full  hover:bg-gray-200">
                                <img className="w-10" src={games} alt="" />
                                <span className="text-xl font-medium text-gray-500">Play Games</span>
                            </NavLink>
                        </li>
                        <li className="mt-6">
                            <NavLink className="flex gap-4 items-center p-2 rounded-full  hover:bg-gray-200">
                                <FcGallery className="text-4xl"></FcGallery>
                                <span className="text-xl font-medium text-gray-500">Recent ad Activity</span>
                            </NavLink>
                        </li>
                        
                        <li className="mt-6">
                            <NavLink className="flex gap-4 items-center p-2 rounded-full  hover:bg-gray-200">
                                <FcTimeline className="text-4xl"></FcTimeline>
                                <span className="text-xl font-medium text-gray-500">Ads Manager</span>
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;