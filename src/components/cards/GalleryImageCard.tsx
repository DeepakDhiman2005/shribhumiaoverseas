import { Dialog } from "@material-tailwind/react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const GalleryImageCard = ({ item }: { item?: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleOpen = () => setIsOpen(!isOpen);

    return <>
        <Dialog
            open={isOpen}
            handler={handleOpen}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
            className="relative"
            size="xl"
        >
            <button className="absolute top-4 z-30 right-6 hover:text-red-700 transition-all duration-300 text-black" onClick={handleOpen}>
                <RxCross2 size={30} />
            </button>
            <div
                className="h-auto flex justify-center items-start"
            >
                <img src={item} alt="Gallery Image" className="object-fill w-3/4 md:w-1/2 my-5" />
            </div>
        </Dialog>
        <div className="image overflow-hidden w-full flex justify-center items-center h-[250px] rounded-sm border-2 border-green-700 group relative cursor-pointer" onClick={handleOpen}>
            <div
                className="w-full h-full scale-0 group-hover:scale-100 overflow-hidden text-white bg-black/60 transition-all absolute top-0 left-0 font-medium duration-300 text-[18px] flex justify-center items-center"
            >
                View to Click
            </div>
            <img src={item} alt="Gallery Image" className="object-fill w-full h-full" />
        </div>
    </>
}

export default GalleryImageCard;