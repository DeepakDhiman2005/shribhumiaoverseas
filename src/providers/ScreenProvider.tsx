// import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
import { useLocation } from "react-router-dom";
import React from "react";
import DashboardSidebar from "../common/sidebar/DashboardSidebar";
import Sidebar from "../common/sidebar/Sidebar";
import MyNavbar from "../common/navbar/MyNavbar";

const ScreenProvider = ({
    children
}: {
    children: React.ReactNode,
}) => {
    const { pathname } = useLocation();

    return pathname.startsWith('/admin') ? <>
        <div className="w-full flex justify-start items-start">
            <DashboardSidebar />
            {children}
        </div>
    </> : <>
        {/* <Navbar /> */}
        <MyNavbar />
        <Sidebar />
        {children}
        <Footer />
    </>
}

export default ScreenProvider;