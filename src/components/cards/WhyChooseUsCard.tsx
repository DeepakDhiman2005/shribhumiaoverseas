import React from "react";

export interface WhyChooseUsCardInterface {
    icon?: React.ReactNode,
    title?: string,
    description?: string,
}

const WhyChooseUsCard = ({
    title = "",
    icon,
    description = "",
}: WhyChooseUsCardInterface) => {
    return <>
        <div
            // className="bg-[#181646bd] flex flex-col w-full h-full text-center justify-center items-center gap-y-2 py-14 px-4"
            className="bg-green-700/65 flex flex-col w-full h-full text-center justify-center items-center gap-y-2 py-4 px-4"
            id="grid-box-child"
        >
            {/* <div className="w-10 h-10 bg-[#FFD200] text-white rounded-sm flex justify-center items-center"> */}
            <div className="w-10 h-10 bg-gray-300 text-gray-800 rounded-sm flex justify-center items-center">
                {icon}
            </div>
            {/* <h2 className="font-semibold text-[#FFD200] text-[16px]">{title}</h2> */}
            <h2 className="font-semibold text-gray-300 text-[16px]">{title}</h2>
            <p className="text-gray-200 text-[14px]">{description}</p>
        </div>

    </>
}

export default WhyChooseUsCard;