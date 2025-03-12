// import { Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
// import { RxCross2 } from "react-icons/rx";
import QuoteModal from "../modals/QuoteModal";
// import { useNavigate } from "react-router-dom";
import MyButton from "../buttons/MyButton";
// import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
// import { AppDispatch } from "../../redux/store";
// import { useDispatch } from "react-redux";
// import { getProductImageRedux } from "../../redux/features/products";

export interface ProductCardInterface {
    image?: string;
    name?: string;
    height?: number | string;
    width?: number | string;
    gusset?: number | string;
    _id?: number | string;
}

const ProductCard = ({
    image = "",
    name = "",
    height = "",
    width = "",
    gusset = "",
}: ProductCardInterface) => {
    // const [blobImage, setBlobImage] = useState<string | null>(null);
    const blobImage = true;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isExplor, setIsExplor] = useState<boolean>(false);
    // const { search } = useLocation();
    // const dispatch: AppDispatch = useDispatch();
    
    const handleExplor = () => setIsExplor(!isExplor);
    // const handleOpen = () => setIsOpen(!isOpen);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     let objectUrl: string | null = null;
    //     if (image && image !== "") {
    //         dispatch(getProductImageRedux(image, (blobData) => {
    //             objectUrl = URL.createObjectURL(blobData);
    //             setBlobImage(objectUrl);
    //         }));
    //     }

    //     return () => {
    //         if (objectUrl) {
    //             URL.revokeObjectURL(objectUrl);
    //         }
    //     };
    // }, [image, dispatch]);

    return (
        <>
            <Dialog
                open={isExplor}
                handler={handleExplor}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                size="xl"
            >
                <DialogBody className="w-full flex justify-center items-center relative">
                    <button
                        className="cursor-pointer text-black absolute top-4 right-4 hover:text-red-700 active:text-red-900 transition-all duration-300"
                        onClick={handleExplor}
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

            <QuoteModal
                isOpen={isOpen}
                productCode={name}
                setIsOpen={setIsOpen}
            />

            <div
                className={`w-full h-auto border border-solid cursor-pointer group border-gray-300`}
            // onClick={blobImage ? handleOpen : undefined}
            // onClick={blobImage ? handleOpen : undefined}
            // onClick={() => navigate('/contact')}

            >
                {/* <Link to={`/product-details${search}&product=456322`}> */}
                    <div className="w-full h-[180px] flex justify-center relative items-center overflow-hidden" onClick={handleExplor}>
                        {blobImage ? (
                            <img
                                // src={blobImage}
                                src={image}
                                alt="image"
                                className="group-hover:scale-105 object-fill transition-all duration-300 h-full"
                            />
                        ) : (
                            <div className="w-full h-[150px] bg-gray-200 animate-pulse"></div>
                        )}
                        <div className="absolute top-1/2 scale-0 group-hover:scale-100 transition-all duration-500  px-4 py-2 bg-green-600/80 text-white font-medium">Explor</div>
                    </div>
                {/* </Link> */}
                <div className="bg-gray-200  transition-all duration-500">
                    <h2 className="uppercase font-semibold py-1 bg-green-600 text-center text-white w-full">{name}</h2>
                    <div className="flex flex-col justify-center items-center  px-2 gap-y-1">
                        <div className="h-[1px] w-full bg-gray-400"></div>
                        <div className="flex justify-around text-[15px] w-full items-center">
                            <p>Height</p>
                            <p>Width</p>
                            <p>Gusset</p>
                        </div>
                        <div className="h-[1px] w-full bg-gray-400"></div>
                        <div className="flex justify-around text-[14px] w-full items-center">
                            <p>{height && height !== "" ? height : "-"} Inches</p>
                            <p>{width && width !== "" ? width : "-"} Inches</p>
                            <p>{gusset && gusset !== "" ? gusset : "-"} Inches</p>
                        </div>
                        <div className="h-[1px] w-full bg-gray-400"></div>
                        <div className="flex justify-center items-center py-1">
                            <MyButton
                                className="bg-green-700 hover:text-green-700 border border-solid border-green-700 hover:bg-white transition-all duration-300 py-1 px-3"
                                onClick={() => setIsOpen(true)}
                            >Get a Quote</MyButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
