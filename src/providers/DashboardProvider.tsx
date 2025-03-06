import React from "react";
import MyButton from "../components/buttons/MyButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setDashboardSidebar } from "../redux/features/action";

const DashboardProvider = ({
    children,
    title = "",
    className = "",
}: {
    children: React.ReactNode,
    title?: string,
    className?: string,
}) => {
    const dispatch = useDispatch();
    const handleSidebar = () => dispatch(setDashboardSidebar(true));
    
    return <>
        <div className="flex flex-col justify-start w-full lg:w-[80%] items-start">
            <div className="py-4 w-full px-6 flex justify-between items-center">
                <h2 className="font-semibold text-[22px]">{title}</h2>

                <MyButton className="bg-transparent block lg:hidden p-1 text-black" onClick={handleSidebar}>
                    <RxHamburgerMenu size={22} />
                </MyButton>
            </div>
            <div className={`w-full px-3 ${className}`}>
                {children}
            </div>
        </div>
    </>
}

export default DashboardProvider;