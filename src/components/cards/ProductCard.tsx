// import { Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
// import { RxCross2 } from "react-icons/rx";
import QuoteModal from "../modals/QuoteModal";
// import { useNavigate } from "react-router-dom";
import MyButton from "../buttons/MyButton";
// import { Link, useLocation } from "react-router-dom";
import ProductViewerModal from "../modals/ProductViewerModal";
// import { Link } from "react-router-dom";
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
    category?: string;
    subCategory?: string;
    price?: string,
    material?: string,
    weight?: string,
    capacity?: string,
    quantity?: string,
    pattern?: string,
}

const ProductCard = ({
    image = "",
    name = "",
    height = "",
    width = "",
    gusset = "",
    // category = "",
    // subCategory = "",
    // _id = 0,
}: ProductCardInterface) => {
    // const [blobImage, setBlobImage] = useState<string | null>(null);
    const blobImage = true;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isExplore, setIsExplore] = useState<boolean>(false);
    // const { search } = useLocation();
    // const dispatch: AppDispatch = useDispatch();

    // const detailsUrl = useMemo<string>(() => {
    //     return `/product-details?category=${category}&product=${_id}${subCategory && subCategory !== "" ? `&subcategory=${subCategory}`: ''}`;
    // }, [category, subCategory, _id]);
    
    const handleExplore = () => setIsExplore(!isExplore);
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
            <ProductViewerModal
                isOpen={isExplore}
                setIsOpen={handleExplore}
                image={image}
                openQuote={() => {
                    handleExplore();
                    setIsOpen(true);
                }}
                details={{
                    name: name,
                    width,
                    height,
                    gusset
                }}
            />
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
                {/* <Link to={detailsUrl}> */}
                    <div className="w-full h-[180px] flex justify-center relative items-center overflow-hidden" onClick={handleExplore}>
                    {/* <div className="w-full h-[180px] flex justify-center relative items-center overflow-hidden"> */}
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
                        <div className="absolute top-1/2 scale-0 group-hover:scale-100 transition-all duration-500  px-4 py-2 bg-green-600/80 text-white font-medium">Explore</div>
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
