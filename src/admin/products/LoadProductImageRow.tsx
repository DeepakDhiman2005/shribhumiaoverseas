import { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getProductImageRedux } from "../../redux/features/products";

const LoadProductImageRow = ({ id = "" }: { id: string }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [imageUrl, setImageUrl] = useState<string>("");

    useEffect(() => {
        if (id) {
            dispatch(getProductImageRedux(id, (blob: Blob) => {
                const imageObjectUrl = URL.createObjectURL(blob);
                setImageUrl(imageObjectUrl);
            }));
        }
    }, [id, dispatch]);

    return (
        <Suspense fallback={<div className="animate-pulse w-14 h-10 rounded-md bg-gray-300"></div>}>
            {imageUrl ? (
                <img src={imageUrl} alt="Blog Image" className="w-14 h-8 object-cover rounded-sm border border-solid border-blue-700" />
            ) : (
                <div className="animate-pulse w-14 h-8 rounded-md bg-gray-300"></div>
            )}
        </Suspense>
    );
};

export default LoadProductImageRow;
