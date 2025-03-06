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
            <button className="absolute top-4 right-6 hover:text-red-700 transition-all duration-300 text-black" onClick={handleOpen}>
                <RxCross2 size={30} />
            </button>
            <div
                className="overflow-y-scroll h-[90vh] flex justify-center items-start"
            >
                <img src={item} alt="Gallery Image" className="w-3/4 h-auto my-10" />
            </div>
        </Dialog>
        <div className="image overflow-hidden rounded-xl" onClick={handleOpen}>
            <img src={item} alt="Gallery Image" className="cursor-pointer hover:scale-110 transition-all duration-300" />
        </div>
    </>
}

export default GalleryImageCard;