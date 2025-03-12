import React from "react";
import MyButton from "../components/buttons/MyButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setDashboardSidebar } from "../redux/features/action";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Tooltip } from "antd";

const DashboardProvider = ({
    children,
    title = "",
    className = "",
    backShow = false,
}: {
    children: React.ReactNode,
    title?: string,
    className?: string,
    backShow?: boolean,
}) => {
    const dispatch = useDispatch();
    const handleSidebar = () => dispatch(setDashboardSidebar(true));

    return <>
        <div className="flex flex-col justify-start w-full lg:w-[80%] items-start">
            <div className="py-3 w-full px-4 flex justify-between items-center">
                <div className="flex justify-start items-center gap-x-2">
                    {
                        backShow ?
                            <Tooltip title="Back" placement="bottom">
                                <div>
                                    <MyButton
                                        className="bg-gray-300 py-1 px-2 text-black"
                                        onClick={() => window.history.back()}
                                    >
                                        <IoMdArrowRoundBack size={18} />
                                    </MyButton>
                                </div>
                            </Tooltip> : null
                    }
                    <h2 className="font-semibold text-[22px]">{title}</h2>
                </div>

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