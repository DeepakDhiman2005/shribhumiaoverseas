import { Dialog } from "@material-tailwind/react";
import React from "react";
import { RxCross2 } from "react-icons/rx";

interface MyModalInterface {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void,
    title?: string,
    titleClass?: string,
    children?: React.ReactNode,
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xs' | 'xxl',
}

const MyModal: React.FC<MyModalInterface> = ({
    isOpen = false,
    setIsOpen,
    title = "",
    children,
    size = "md",
    titleClass = "",
}) => {
    const handleOpen = () => setIsOpen(false);
    return <>
        <Dialog
            open={isOpen}
            handler={handleOpen}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
            size={size}
        >
            <div className="w-full">
                <div className="flex justify-between items-center px-6 py-4">
                    <h2 className={`font-semibold text-[18px] text-gray-900 ${titleClass}`}>{title}</h2>
                    <button onClick={handleOpen} className="hover:text-red-600 transition-all text-gray-900 duration-300 active:text-red-800">
                        <RxCross2 size={22} />
                    </button>
                </div>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </Dialog>
    </>
}

export default MyModal;