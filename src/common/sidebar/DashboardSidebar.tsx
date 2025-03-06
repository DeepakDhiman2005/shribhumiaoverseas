import { RxHamburgerMenu } from "react-icons/rx";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaBlog } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Button } from "@material-tailwind/react";
import DashboardSidebarButton from "./DashboardSidebarButton";
import MyButton from "../../components/buttons/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setDashboardSidebar } from "../../redux/features/action";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DashboardSidebar = () => {
    const { dashboardSidebar } = useSelector((state: RootState) => state.action);
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const handleSidebar = () => dispatch(setDashboardSidebar(false));

    useEffect(() => {
        if(pathname){
            handleSidebar();
        }
    }, [pathname]);

    const links = [
        { text: "Dashboard", icon: <LuLayoutDashboard size={18} />, path: "/dashboard" },
        { text: "Products", icon: <AiOutlineProduct size={18} />, path: "/products" },
        { text: "Blogs", icon: <FaBlog size={18} />, path: "/blogs" },
        { text: "Settings", icon: <IoMdSettings size={18} />, path: "/settings" },
    ];

    return (
        <aside className={`h-screen py-4 flex-col justify-between overflow-hidden transition-all duration-300 ${dashboardSidebar ? 'w-full px-4': 'w-0 px-auto'} lg:w-[20%] fixed z-40 lg:sticky lg:px-4 top-0 left-0 bg-gray-900 text-white`}>
            {/* Sidebar Header */}
            <div className="w-full flex justify-between items-center px-1 py-2">
                <h2 className="font-semibold text-[18px]">Shri Bhumia</h2>
                <Button className="shadow-none hover:shadow-none rounded-md p-1 block lg:hidden bg-transparent" onClick={handleSidebar}>
                    <RxHamburgerMenu size={22} />
                </Button>
            </div>

            {/* Sidebar Links */}
            <div className="flex flex-col w-full justify-start items-start my-4 gap-y-3">
                {links.map((item, index) => (
                    <DashboardSidebarButton key={index} {...item} />
                ))}
            </div>

            {/* Logout Button */}
            <div className="w-full">
                <MyButton className="bg-red-600 flex justify-start items-center rounded-md gap-x-2 py-3 w-full text-[16px]">
                    <FiLogOut size={18} />
                    <span>Logout</span>
                </MyButton>
            </div>
        </aside>
    );
};

export default DashboardSidebar;
