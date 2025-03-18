import { FaRupeeSign } from "react-icons/fa";
import { ProductCardInterface } from "./ProductCard";
import MyButton from "../buttons/MyButton";
import QuoteModal from "../../components/modals/QuoteModal";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import ImageViewModal from "../modals/ImageViewModal";

interface stateInterface {
    isImageView?: boolean,
    isQuoteView?: boolean,
}

const ProductDetailCard = ({
    image,
    name,
    price,
    material,
    capacity,
    quantity,
    pattern,
    weight,
    height,
    width,
    // _id
}: ProductCardInterface) => {
    const [state, setState] = useState<stateInterface>({
        isImageView: false,
        isQuoteView: false,
    });
    const manageState = (props: stateInterface) => {
        setState({ ...state, ...props });
    }

    const ListItem = ({
        label,
        value,
    }: {
        label: string,
        value: string,
    }) => {
        return <div className="w-full grid grid-cols-2 my-1 justify-start items-center">
            <div className="w-full font-medium">
                {label}
            </div>
            <div className="w-full">
                {value}
            </div>
        </div>
    }

    const details: Array<{ label?: string, value?: string }> = [
        {
            label: 'Product Name',
            value: name as string,
        },
        {
            label: 'Material',
            value: material as string,
        },
        // {
        //     label: 'Brand',
        //     value: 'JBI',
        // },
        {
            label: 'Weight',
            value: weight,
        },
        {
            label: 'Height',
            value: `${height} inches`
        },
        {
            label: 'Width',
            value: `${width} inches`,
        },
        {
            label: 'Capacity',
            value: capacity,
        },
        // {
        //     label: 'Number of Zip',
        //     value: '2 Zip'
        // },
        {
            label: 'Minimum order quantity',
            value: `${quantity} piece`
        },
        ...(pattern && pattern !== '' ? [{ label: 'Design/Pattern', value: pattern }] : [{}]),
    ]

    return <>
        <ImageViewModal
            isOpen={state.isImageView as boolean}
            image={image as string}
            setIsOpen={() => manageState({ isImageView: false })}
        />
        <QuoteModal
            isOpen={state.isQuoteView as boolean}
            productCode={name}
            setIsOpen={() => manageState({ isQuoteView: false })}
        />
        <div className="w-full grid grid-cos-1 md:grid-cols-2 gap-6 my-5">
            <div className="w-full flex justify-center items-center">
                <img src={image} alt="image" className="w-full sm:w-[65%] rounded-xl cursor-pointer" onClick={() => manageState({ isImageView: true })} />
            </div>
            <div className="w-full flex flex-col gap-y-2 justify-start items-start">
                <h2 className="flex justify-start text-[22px] items-center gap-x-1">
                    <FaRupeeSign size={16} />
                    <span className="font-medium">{price || '-'}</span>
                    <span className="text-[14px]">/ piece</span>
                </h2>
                <div className="w-full lg:w-3/4 flex flex-col justify-start items-start">
                    {
                        details.map((item, index) => (
                            <ListItem
                                key={index}
                                label={item.label as string}
                                value={item.value as string}
                            />
                        ))
                    }
                </div>
                <p className="font-normal text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi maxime explicabo consequatur repellendus ad nostrum architecto. <b>Aspernatur, dolore et, commodi sint minima</b> consequuntur aperiam odit cumque aut excepturi repellendus cum temporibus voluptatem nemo ad ut exercitationem tempora! Non, quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, accusamus.</p>
                <div>
                    <MyButton
                        className="bg-green-700 text-white px-8 text-[16px] flex justify-center items-center gap-x-2"
                        onClick={() => manageState({ isQuoteView: true })}
                    >
                        <MdEmail size={18} />
                        <span>
                            Yes, I am interested
                        </span>
                    </MyButton>
                </div>
            </div>
        </div>
    </>
}

export default ProductDetailCard;