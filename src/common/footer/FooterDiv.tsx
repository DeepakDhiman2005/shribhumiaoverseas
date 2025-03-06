import React from "react";

const FooterDiv = ({
    children,
    className = "",
    title = "",
    parentClass = "",
}: {
    children?: React.ReactNode,
    className?: string,
    title?: string,
    parentClass?: string,
}) => {
    return <>
        <div className={`flex justify-start items-start flex-col gap-y-4 ${parentClass}`}>
            <div className="w-full flex justify-start items-start gap-y-2  flex-col">
                <h2 className="uppercase text-[18px]">{title}</h2>
                <div className="w-full h-[1px] bg-gray-200"></div>
            </div>
            <div className={`flex flex-col justify-start items-start ${className}`}>
                {children}
            </div>
        </div>
    </>
}

export default FooterDiv;