// import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
import { useLocation } from "react-router-dom";
import React from "react";
import DashboardSidebar from "../common/sidebar/DashboardSidebar";
import Sidebar from "../common/sidebar/Sidebar";
import Navbar from "../common/navbar/Navbar";

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
        <Navbar />
        <Sidebar />
        {children}
        <Footer />
    </>
}

export default ScreenProvider;