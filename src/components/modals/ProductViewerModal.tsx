import { Dialog, DialogBody } from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import { ProductCardInterface } from "../cards/ProductCard";
import { useEffect, useRef } from "react";
import MyButton from "../buttons/MyButton";

interface ProductViewerModal {
    isOpen?: boolean;
    setIsOpen: (value: boolean) => void,
    openQuote: (value: boolean) => void,
    image?: string,
    details?: ProductCardInterface,
}

const ProductViewerModal = ({
    isOpen = false,
    setIsOpen,
    openQuote,
    image = '',
    details,
}: ProductViewerModal) => {
    const handleOpen = () => setIsOpen(false);
    const modelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isOpen && modelRef.current) {
            let parentDiv = modelRef.current.parentElement as HTMLElement;
            if (parentDiv) {
                parentDiv.style.backdropFilter = 'none';
            }
        }
    }, [isOpen]);

    const ListItem = ({
        label = "",
        value = "",
    }: { label: string, value: string }) => {
        return <li className="font-medium text-gray-900"><span className="font-semibold text-black">{label}:</span> {`${value} inches` || '-'}</li>
    }
    return <>
        <Dialog
            ref={modelRef}
            open={isOpen}
            handler={handleOpen}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
            className="!rounded-none"
            size="md"
        >
            <DialogBody className="w-full flex justify-center items-center relative">
                <button
                    className="cursor-pointer z-30 text-black absolute top-4 right-4 hover:text-red-700 active:text-red-900 transition-all duration-300 outline-none"
                    onClick={handleOpen}
                >
                    <RxCross2 size={30} />
                </button>
                <div className="w-full flex flex-col sm:flex-row gap-y-2 justify-center">
                    <div className="w-full sm:w-[60%] flex justify-center items-center">
                        <img
                            // src={blobImage || `/product-images/${image}`}
                            src={image}
                            alt="image"
                            className="transition-all duration-300 w-3/4 sm:w-full"
                        />
                    </div>
                    <div className="w-full sm:w-[40%] px-4 text-black">
                        <h2 className="font-semibold text-[25px]">{details?.name || '-'}</h2>
                        <ul>
                            <ListItem label="Height" value={details?.height as string} />
                            <ListItem label="Width" value={details?.width as string} />
                            <ListItem label="Gusset" value={details?.gusset as string} />
                        </ul>
                        <MyButton
                            className="bg-green-700 my-2 hover:text-green-700 border border-solid border-green-700 hover:bg-white transition-all duration-300 py-1 px-3"
                            onClick={() => openQuote(true)}
                        >Get a Quote</MyButton>
                    </div>
                </div>
            </DialogBody>
        </Dialog>

    </>
}

export default ProductViewerModal;