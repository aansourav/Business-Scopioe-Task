import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-[1440px] font-poppins mx-auto ">
           <Outlet/>
        </div>
    );
};

export default Root;