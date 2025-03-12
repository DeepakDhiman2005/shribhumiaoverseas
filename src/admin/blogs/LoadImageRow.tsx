import { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getBlogImageRedux } from "../../redux/features/blog";

const LoadImageRow = ({ id = "" }: { id: string }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [imageUrl, setImageUrl] = useState<string>("");

    useEffect(() => {
        if (id) {
            dispatch(getBlogImageRedux(id, (blob: Blob) => {
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

export default LoadImageRow;
