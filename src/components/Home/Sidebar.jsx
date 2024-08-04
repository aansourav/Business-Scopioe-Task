import { CiHeart, CiSettings } from "react-icons/ci";
import { GrStatusInfo } from "react-icons/gr";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className=" hidden lg:block">
            <div className="w-[250px] h-full border ">
                <h1 className="text-[40px] my-6 text-center text-[#4285F3] ">
                    LOGO
                </h1>

                <div className="space-y-1 ">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `flex items-center gap-3 pl-4 text-[#5c635a] py-3 ${
                                isActive ? "bg-[#D4E9FF]" : ""
                            }`
                        }
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.6875 8.75C6.73925 8.75 6.875 9.785 6.875 11.9375C6.875 13.016 6.875 13.7832 6.422 14.345C5.90075 14.9922 4.952 15.125 3.6875 15.125C2.423 15.125 1.47425 14.9922 0.953 14.345C0.5 13.7832 0.5 13.0167 0.5 11.9562L1.0625 11.9375H0.5C0.5 9.785 0.63575 8.75 3.6875 8.75ZM11.9375 8.75C14.9893 8.75 15.125 9.785 15.125 11.9375C15.125 13.016 15.125 13.7832 14.672 14.345C14.1508 14.9922 13.202 15.125 11.9375 15.125C10.673 15.125 9.72425 14.9922 9.203 14.345C8.75 13.7832 8.75 13.0167 8.75 11.9562L9.3125 11.9375H8.75C8.75 9.785 8.88575 8.75 11.9375 8.75ZM3.84212 9.87533L3.6875 9.875C1.73077 9.875 1.63042 10.0154 1.62528 11.6578L1.62559 12.2976C1.62915 12.9509 1.65404 13.4227 1.82825 13.64C2.027 13.886 2.61725 14 3.6875 14C4.75775 14 5.348 13.8852 5.54675 13.6392C5.75 13.3865 5.75 12.7865 5.75 11.9555C5.75 10.0803 5.75 9.88416 3.84212 9.87533ZM12.0921 9.87533L11.9375 9.875C9.98077 9.875 9.88042 10.0154 9.87528 11.6578L9.87559 12.2976C9.87915 12.9509 9.90404 13.4227 10.0782 13.64C10.277 13.886 10.8673 14 11.9375 14C13.0077 14 13.598 13.8852 13.7968 13.6392C14 13.3865 14 12.7865 14 11.9555C14 10.0803 14 9.88416 12.0921 9.87533ZM3.6875 0.5C6.73925 0.5 6.875 1.535 6.875 3.6875C6.875 4.766 6.875 5.53325 6.422 6.095C5.90075 6.74225 4.952 6.875 3.6875 6.875C2.423 6.875 1.47425 6.74225 0.953 6.095C0.5 5.53325 0.5 4.76675 0.5 3.70625L1.0625 3.6875H0.5C0.5 1.535 0.63575 0.5 3.6875 0.5ZM11.9375 0.5C14.9893 0.5 15.125 1.535 15.125 3.6875C15.125 4.766 15.125 5.53325 14.672 6.095C14.1508 6.74225 13.202 6.875 11.9375 6.875C10.673 6.875 9.72425 6.74225 9.203 6.095C8.75 5.53325 8.75 4.76675 8.75 3.70625L9.3125 3.6875H8.75C8.75 1.535 8.88575 0.5 11.9375 0.5ZM3.84212 1.62533L3.6875 1.625C1.73077 1.625 1.63042 1.76541 1.62528 3.40779L1.62559 4.04764C1.62915 4.70086 1.65404 5.17271 1.82825 5.39C2.027 5.636 2.61725 5.75 3.6875 5.75C4.75775 5.75 5.348 5.63525 5.54675 5.38925C5.75 5.1365 5.75 4.5365 5.75 3.7055C5.75 1.83035 5.75 1.63416 3.84212 1.62533ZM12.0921 1.62533L11.9375 1.625C9.98077 1.625 9.88042 1.76541 9.87528 3.40779L9.87559 4.04764C9.87915 4.70086 9.90404 5.17271 10.0782 5.39C10.277 5.636 10.8673 5.75 11.9375 5.75C13.0077 5.75 13.598 5.63525 13.7968 5.38925C14 5.1365 14 4.5365 14 3.7055C14 1.83035 14 1.63416 12.0921 1.62533Z"
                                fill="#152A16"
                            />
                        </svg>
                        Home
                    </NavLink>
                    <p className="flex items-center gap-3 text-[#5c635a] py-3 pl-4 ">
                        {" "}
                        <MdOutlinePeopleAlt /> New Listing
                    </p>
                    <p className="flex items-center gap-3 text-[#5c635a] py-3 pl-4 ">
                        {" "}
                        <HiMagnifyingGlass /> Search
                    </p>
                    <p className="flex items-center gap-3 text-[#5c635a] py-3 pl-4 ">
                        {" "}
                        <IoDocumentTextOutline /> About
                    </p>
                    <p className="flex items-center gap-3 text-[#5c635a] py-3 pl-4 ">
                        {" "}
                        <CiHeart /> Favorites
                    </p>
                    <hr />
                    <p className="flex items-center gap-3 text-[#5c635a] py-3 pl-4 ">
                        {" "}
                        <GrStatusInfo /> Help Center
                    </p>
                    <p className="flex items-center gap-3 text-[#5c635a] py-3 pl-4 ">
                        {" "}
                        <CiSettings /> Setting
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
