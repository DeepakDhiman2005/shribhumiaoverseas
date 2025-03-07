import React, { forwardRef, Ref } from "react";

const LineHeading = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
    ({ children }, ref: Ref<HTMLDivElement>) => {
        const Line = () => (
            <div className="w-[10%] bg-green-700 hidden md:block h-[3px]"></div>
        );

        return (
            <div ref={ref} className="w-full flex justify-center text-center items-center gap-x-5">
                <Line />
                <h2 className="text-green-700 uppercase text-[28px] font-semibold">{children}</h2>
                <Line />
            </div>
        );
    }
);

export default LineHeading;
