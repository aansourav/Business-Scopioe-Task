import { FaAngleDown } from "react-icons/fa";
import useAuth from "../Hook/useAuth";
import { IoNotificationsOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { CiHeart, CiSettings } from "react-icons/ci";
import { GrStatusInfo } from "react-icons/gr";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";

const Nav = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  // logout
  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch();
  };
  // sidebar
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(); //sidebar
  const overlayRef = useRef(); //modal

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div>
      <div className="h-[88px] hidden w-full lg:flex justify-between px-6 border bg-white ">
        <div className="flex gap-4 items-center ">
          <img
            className="h-10 w-10 rounded-full   "
            src={(user && user?.photoURL) || "user.png"}
            alt=""
          />
          <div className="text-sm ">
            <p className="font-semibold flex items-center gap-3">
              {user?.displayName} <FaAngleDown />{" "}
            </p>
            <p> {user?.email} </p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <a className="border p-1 rounded-full">
            <IoNotificationsOutline className="text-2xl  " />
          </a>
          <div
            onClick={handleSignOut}
            className="flex pl-4 hover:bg-red-100 hover:rounded-xl  border-[#E7E7E7] border-l-2  items-center gap-2"
          >
            <button className="font-medium text-[#F15E4A] "> Log Out</button>{" "}
            <img src="logout.png" alt="" />
          </div>
        </div>
      </div>
      {/* small device */}

      <div className="h-[60px] lg:hidden w-full bg-white flex justify-between items-center px-3 ">
        <h1 className="text-[32px]  text-center font-serif text-[#4285F3] ">LOGO</h1>
        <div className="flex gap-2">
          <IoNotificationsOutline className="text-2xl  " />
          <HiOutlineMenuAlt3 onClick={toggleSidebar} className="text-2xl  " />
        </div>
      </div>
      {/* overlay */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 z-50 h-full bg-white overflow-x-auto  transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        <div className="h-[302px] flex flex-col justify-center  bg-blue-500 pr-4 text-right ">
          <div className="flex justify-end">
            <img
              className="h-[74px] w-[74px] rounded-full   "
              src={(user && user?.photoURL) || "user.png"}
              alt=""
            />
          </div>
          <p className="font-semibold text-white text-2xl  gap-3">
            {user?.displayName}
          </p>
          <p className="text-xs"> {user?.email} </p>
        </div>
        {/* *************** ********** */}
         <div className="space-y-1 ">
       <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 pl-4 text-[#5c635a] py-3 ${
                isActive ? "bg-[#D4E9FF]" : "" }` }>
            <CiSettings /> Settings
          </NavLink>
        <p className="flex items-center gap-3 text-[#5c635a] py-3 pl-4 "> <MdOutlinePeopleAlt /> New Listing</p>
        <p className="flex items-center gap-3 text-[#5c635a] py-3 pl-4 "> <HiMagnifyingGlass /> Search</p>
        <p className="flex items-center gap-3 text-[#5c635a] py-3 pl-4 "> <IoDocumentTextOutline /> About</p>
        <p className="flex items-center gap-3 text-[#5c635a] py-3 pl-4 "> <CiHeart /> Favorites</p>
        <hr /> 
        <p className="flex items-center gap-3 text-[#5c635a] py-3 pl-4 "> <GrStatusInfo /> Help Center</p>
        <p className="flex items-center gap-3 text-[#5c635a] py-3 pl-4 "> <CiSettings />  Setting
        </p>
        <p
            onClick={handleSignOut}
            className="flex pl-4 hover:bg-red-100 hover:rounded-xl  justify-center pb-5  items-center gap-2"
          >
            <button className="font-medium text-[#F15E4A] "> Log Out</button>{" "}
            <img src="logout.png" alt="" />
          </p>
       </div>
      </div>
    </div>
  );
};

export default Nav;
