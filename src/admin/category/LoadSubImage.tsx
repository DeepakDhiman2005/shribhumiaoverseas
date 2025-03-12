import { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getSubCategoryImageRedux } from "../../redux/features/category";

const LoadSubImage = ({ id = "" }: { id: string }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [imageUrl, setImageUrl] = useState<string>("");

    useEffect(() => {
        if (id) {
            dispatch(getSubCategoryImageRedux(id, (blob: Blob) => {
                const imageObjectUrl = URL.createObjectURL(blob);
                setImageUrl(imageObjectUrl);
            }));
        }
    }, [id, dispatch]);

    return (
        <Suspense fallback={<div className="animate-pulse w-14 h-8 rounded-md bg-gray-300"></div>}>
            {imageUrl ? (
                <img src={imageUrl} alt="Category" className="w-14 h-8 object-cover rounded-md border border-solid border-green-700" />
            ) : (
                <div className="animate-pulse w-14 h-8 rounded-md bg-gray-300"></div>
            )}
        </Suspense>
    );
};

export default LoadSubImage;
