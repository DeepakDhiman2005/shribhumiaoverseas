import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const DashboardSidebarButton = ({
    text = "",
    icon = <span className="w-4 h-4 bg-gray-500 rounded-full"></span>,
    path = "",
}: {
    text?: string,
    icon?: React.ReactNode,
    path?: string,
}) => {
    const { pathname } = useLocation();
    const isActive = pathname.includes(`/${text.toLowerCase()}`);

    return (
        <Link to={`/admin${path}`} className="w-full h-auto">
            <div className={`w-full px-2 py-2 flex justify-start items-center gap-x-4 font-medium cursor-pointer transition-all duration-300 ${isActive ? "bg-gray-400" : "hover:bg-gray-300"} rounded-md text-[16px]`}>
                {icon}
                <span>{text}</span>
            </div>
        </Link>
    );
};

export default DashboardSidebarButton;
