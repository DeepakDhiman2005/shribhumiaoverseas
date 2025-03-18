import { Dialog, DialogBody } from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";

const ImageViewModal = ({
    isOpen = false,
    setIsOpen,
    image,
}: {
   isOpen: boolean,
   setIsOpen: (value: boolean) => void,
   image: string,
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
            size="xl"
        >
            <DialogBody className="w-full flex justify-center items-center relative">
                <button
                    className="cursor-pointer z-30 text-black absolute top-4 right-4 hover:text-red-700 active:text-red-900 transition-all duration-300"
                    onClick={handleOpen}
                >
                    <RxCross2 size={30} />
                </button>
                <img
                    // src={blobImage || `/product-images/${image}`}
                    src={image}
                    alt="image"
                    className="transition-all duration-300 w-[90%] sm:w-1/2"
                />
            </DialogBody>
        </Dialog>
    </>
}

export default ImageViewModal;