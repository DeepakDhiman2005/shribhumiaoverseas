import { useDispatch } from "react-redux";
import { CategoryInterface, SubCategoryInterface } from "../../interfaces/categoryInterface";
import { getCategoryImageRedux, getSubCategoryImageRedux } from "../../redux/features/category";
import MyModal from "./MyModal";
import { Suspense, useEffect, useState } from "react";
import { AppDispatch } from "../../redux/store";

const CategoryViewModal = ({
    isOpen = false,
    data,
    subData,
    type = "category",
    setIsOpen,
}: {
    isOpen?: boolean,
    data?: CategoryInterface | null,
    subData?: SubCategoryInterface | null,
    type?: 'category' | 'subcategory',
    setIsOpen: (value: boolean) => void
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const [imageUrl, setImageUrl] = useState<string>("");

    useEffect(() => {
        if (data?._id as string || subData?._id as string) {
            if (type === "category") {
                dispatch(getCategoryImageRedux(data?._id as string, (blob: Blob) => {
                    const imageObjectUrl = URL.createObjectURL(blob);
                    setImageUrl(imageObjectUrl);
                }));
            } else {
                dispatch(getSubCategoryImageRedux(subData?._id as string, (blob: Blob) => {
                    const imageObjectUrl = URL.createObjectURL(blob);
                    setImageUrl(imageObjectUrl);
                }));
            }
        }
    }, [data, subData]);

    return <>
        <MyModal
            title="Category"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
            <div className="w-full px-2 flex flex-col justify-start items-start gap-y-3 mb-2">
                <div className="w-full h-[200px] flex justify-center items-center">
                    <Suspense fallback={<div className="animate-pulse w-full h-full rounded-md bg-gray-300"></div>}>
                        {imageUrl ? (
                            <img src={imageUrl} alt="Category" className="w-full h-full object-contain rounded-md border border-solid border-gray-400" />
                        ) : (
                            <div className="animate-pulse w-full h-full rounded-md bg-gray-300"></div>
                        )}
                    </Suspense>
                </div>
                <div className="w-full grid text-black grid-cols-1 gap-2">
                    <h2><span className="font-semibold">Category:</span> {type === "category" ? data?.name: (subData?.category as CategoryInterface)?.name}</h2>
                    {
                        type === "subcategory" ?  <h2><span className="font-semibold">SubCategory:</span> {subData?.name}</h2>: null
                    }
                    <p><span className="font-semibold">Description:</span> {type === "category" ? data?.description: subData?.description}</p>
                </div>
            </div>
        </MyModal>
    </>
}

export default CategoryViewModal;