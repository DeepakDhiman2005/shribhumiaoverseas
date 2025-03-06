import { Dialog } from "@material-tailwind/react";
import React from "react";
import { RxCross2 } from "react-icons/rx";

interface MyModalInterface {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void,
    title?: string,
    children?: React.ReactNode,
}

const MyModal: React.FC<MyModalInterface> = ({
    isOpen = false,
    setIsOpen,
    title = "",
    children,
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
      >
        <div className="w-full">
            <div className="flex justify-between items-center px-6 py-4">
                <h2 className="font-semibold text-[18px]">{title}</h2>
                <button onClick={handleOpen} className="hover:text-red-600 transition-all duration-300 active:text-red-800">
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