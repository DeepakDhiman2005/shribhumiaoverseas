import { Button, Tooltip } from "@material-tailwind/react";
import React from "react";

const SocialMediaButton = ({
    title = "",
    className = "",
    icon
}: {
    title?: string;
    icon: React.ReactNode;
    className?: string;
}) => {
    return (
        <Tooltip
            content={title as string}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
            }}
        >
            <Button
                className={`shadow-none hover:shadow-none rounded-sm cursor-pointer bg-[#000000] p-0 transition-all duration-300 ${className}`}
            >
                <span className="w-8 h-8 flex items-center justify-center">
                    {icon}
                </span>
            </Button>
        </Tooltip>
    );
};

export default SocialMediaButton;
