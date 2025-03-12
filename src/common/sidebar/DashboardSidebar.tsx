import { RxHamburgerMenu } from "react-icons/rx";
import { LuLayoutDashboard, LuShoppingCart } from "react-icons/lu";
import { TbCategory } from "react-icons/tb";
import { FaBlog } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Button } from "@material-tailwind/react";
import DashboardSidebarButton from "./DashboardSidebarButton";
import MyButton from "../../components/buttons/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setDashboardSidebar } from "../../redux/features/action";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logoutAuth } from "../../redux/features/auth";

const DashboardSidebar = () => {
    const { dashboardSidebar } = useSelector((state: RootState) => state.action);
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleSidebar = () => dispatch(setDashboardSidebar(false));
    const handleLogout = () => {
        dispatch(logoutAuth());
        navigate('/auth/login');
    }

    useEffect(() => {
        if (pathname) {
            handleSidebar();
        }
    }, [pathname]);

    const links = [
        { text: "Dashboard", icon: <LuLayoutDashboard size={18} strokeWidth={2} />, path: "/dashboard" },
        { text: "Products", icon: <LuShoppingCart size={18} strokeWidth={2} />, path: "/products" },
        { text: "Category", icon: <TbCategory size={18} strokeWidth={2} />, path: "/category" },
        { text: "Blogs", icon: <FaBlog size={18} strokeWidth={0.5} />, path: "/blogs" },
        { text: "Settings", icon: <IoMdSettings size={18} strokeWidth={0.5} />, path: "/settings" },
    ];

    return (
        <aside className={`h-screen py-4 flex-col justify-between overflow-hidden transition-all duration-300 ${dashboardSidebar ? 'w-full px-4' : 'w-0 px-auto'} lg:w-[20%] fixed z-40 lg:sticky lg:px-4 top-0 left-0 bg-gray-200 text-[#000000]`}>
            {/* Sidebar Header */}
            <div className="w-full flex justify-between items-center py-2">
                <div className="flex justify-center items-center gap-x-2">  
                    <img src="/logo.png" alt="logo" className="w-14" />
                    <h2 className="font-semibold text-[18px] leading-tight">Shri Bhumia Overseas</h2>
                </div>
                <Button className="shadow-none hover:shadow-none rounded-md p-1 block lg:hidden bg-transparent" onClick={handleSidebar}>
                    <RxHamburgerMenu size={22} />
                </Button>
            </div>

            {/* Sidebar Links */}
            <div className="flex flex-col w-full justify-start items-start my-4 gap-y-2">
                {links.map((item, index) => (
                    <DashboardSidebarButton key={index} {...item} />
                ))}
            </div>

            {/* Logout Button */}
            <div className="w-full">
                <MyButton className="bg-transparent text-blue-600 hover:text-blue-800 px-2.5 py-0 flex justify-start items-center rounded-md gap-x-2 w-full text-[16px]" onClick={handleLogout}>
                    <FiLogOut size={18} />
                    <span>Logout</span>
                </MyButton>
            </div>
        </aside>
    );
};

export default DashboardSidebar;
