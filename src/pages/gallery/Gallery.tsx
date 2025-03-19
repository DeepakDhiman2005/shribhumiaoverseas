import { useEffect, useMemo } from "react";
import { GalleryInterface, getGalleryRedux } from "../../redux/features/gallery";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import "../../styles/gallery.scss";
import GalleryImageCard from "../../components/cards/GalleryImageCard";
import getAllProducts from "../../functions/getAllProducts";
import LineHeading from "../../components/headings/LineHeading";
import { useMediaQuery } from "react-responsive";

const Gallery = () => {
    const gallery: GalleryInterface = useSelector((state: RootState) => state.gallery);
    const dispatch: AppDispatch = useDispatch();
    const isMobile = useMediaQuery({ maxWidth: 720 });
    // const [images, setImages] = useState<string[]>([]);
    // const [videos, setVideos] = useState<string[]>([]);

    const galleryImages = useMemo(() => {
        return getAllProducts(57);
    }, []);

    useEffect(() => {
        dispatch(getGalleryRedux());
    }, []);

    useEffect(() => {
        // if (gallery.images && gallery.images.length > 0) {
        //     // Reset state before setting new images
        //     setImages([]);

        //     // Fetch each image
        //     const newImageUrls: string[] = [];
        //     gallery.images.forEach((image) => {
        //         dispatch(getGalleryImage(image, (imageBlob: Blob) => {
        //             const imageUrl = URL.createObjectURL(imageBlob);
        //             newImageUrls.push(imageUrl);

        //             // Only update state once after all images are processed
        //             if (newImageUrls.length === gallery.images?.length) {
        //                 setImages(newImageUrls);
        //             }
        //         }));
        //     });
        // }
    }, [gallery]);


    return <>
        <main className="w-full">
            <img
                src={isMobile ? "/images/banners/gallery-mobile-banner.png" : "/images/banners/gallery-banner.png"}
                alt="image"
                className="bg-gray-300 h-auto"
                loading="lazy"
            />
            <div className="flex flex-col justify-center items-center py-4 w-full">
                <LineHeading>our Pictures</LineHeading>

                <div className="w-full py-8 px-4">
                    {/* <div className="gallery-section w-full"> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6 lg:px-8 w-full">
                        {
                            galleryImages.length > 0 ? galleryImages.map((item, index) => (
                                <GalleryImageCard key={index} item={item.image} />
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