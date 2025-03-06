import { useEffect, useState } from "react";
import { GalleryInterface, getGalleryImage, getGalleryRedux } from "../../redux/features/gallery";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import "../../styles/gallery.scss";
import GalleryImageCard from "../../components/cards/GalleryImageCard";

const Gallery = () => {
    const gallery: GalleryInterface = useSelector((state: RootState) => state.gallery);
    const dispatch: AppDispatch = useDispatch();
    const [images, setImages] = useState<string[]>([]);
    // const [videos, setVideos] = useState<string[]>([]);

    useEffect(() => {
        dispatch(getGalleryRedux());
    }, []);

    useEffect(() => {
        if (gallery.images && gallery.images.length > 0) {
            // Reset state before setting new images
            setImages([]);

            // Fetch each image
            const newImageUrls: string[] = [];
            gallery.images.forEach((image) => {
                dispatch(getGalleryImage(image, (imageBlob: Blob) => {
                    const imageUrl = URL.createObjectURL(imageBlob);
                    newImageUrls.push(imageUrl);

                    // Only update state once after all images are processed
                    if (newImageUrls.length === gallery.images?.length) {
                        setImages(newImageUrls);
                    }
                }));
            });
        }
    }, [gallery]);


    return <>
        <main className="w-full">
            <img
                src="/images/banners/gallery.png"
                alt="image"
                className="w-full h-auto"
            />
            <div className="flex flex-col justify-center items-center py-10 w-full">
                {/* <div className="flex flex-col justify-center items-center gap-y-4 text-center">
                    <h1 className="font-semibold text-[35px] leading-tight sm:text-[40px] text-green-500">Explore the Shri Bhumia Gallery</h1>
                    <p className="font-semibold text-[16] sm:text-[20px]">Welcome to the Shri Bhumia Gallery, where we showcase a collection of captivating images and videos. Immerse yourself in the visual journey that reflects the essence, heritage, and moments that define our story.</p>
                </div> */}
                <h1 className="font-semibold text-start text-[35px] leading-tight sm:text-[40px] text-green-500">Gallery Images</h1>

                <div className="w-full py-6 px-4">
                    {/* <div className="gallery-section w-full"> */}
                    <div className="grid grid-cols-3 gap-x-5 w-full">
                        {
                            images && images.length > 0 ? images.map((item, index) => (
                                <GalleryImageCard key={index} item={item} />
                            )) : Array(10).fill(0).map((_, index) => (
                                <div key={index} className="skeleton w-full h-[200px] my-2 bg-gray-300 animate-pulse rounded-lg" />
                            ))
                        }
                        {/* {
                        videos && videos.length > 0 ? videos.map((item, index) => (
                            <video key={index} src={item} controls />
                        )) : Array(10).fill(0).map((_, index) => (
                            <div key={index} className="skeleton w-full h-[200px] my-2 bg-gray-300 animate-pulse rounded-lg" />
                        ))
                    } */}
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default Gallery;