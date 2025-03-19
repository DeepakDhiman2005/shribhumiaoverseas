import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import MyButton from '../buttons/MyButton';
import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export interface ImageSliderInterface {
    images?: Array<string>;
    showSlides?: 'right' | 'left';
}

const ImageSlider = ({ images = [], showSlides = "right" }: ImageSliderInterface) => {
    const isMobile = useMediaQuery({ maxWidth: 540 });
    const swiperRef = useRef<any>(null);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleSlidePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const handleSlideNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    const handleImageClick = (img: string) => {
        setSelectedImage(img);
    };

    const ArrowsWrapper = ({
        children,
        onClick,
    }: {
        children: React.ReactNode;
        onClick?: () => void;
    }) => {
        return (
            <div className="flex justify-center items-center w-auto sm:w-full">
                <MyButton
                    className="bg-green-600 cursor-pointer rounded-full p-2 text-white group hover:bg-green-700 transition-all"
                    onClick={onClick}
                >
                    {children}
                </MyButton>
            </div>
        );
    };

    return (
        <div className={`w-full flex justify-center h-auto sm:h-[300px] gap-x-3 gap-y-5 ${showSlides === 'right' ? 'flex-col sm:flex-row': 'flex-col sm:flex-row-reverse'}`}>
            {/* Main Image with Fade Effect using CSS */}
            <div className="w-full sm:w-auto flex justify-center items-center">
                <img
                    key={selectedImage}
                    src={selectedImage}
                    alt="selected"
                    className="w-3/4 sm:w-full h-full object-contain rounded-lg transition-opacity duration-500 opacity-0"
                    onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                />
            </div>

            {/* Thumbnail Images */}
            <div className="w-full sm:w-[20%] h-full overflow-hidden flex flex-row sm:flex-col items-center justify-center gap-2">
                <ArrowsWrapper onClick={handleSlidePrev}>
                    <MdArrowUpward className='-rotate-90 sm:rotate-0' />
                </ArrowsWrapper>

                <Swiper
                    direction={isMobile ? "horizontal": "vertical"}
                    slidesPerView={2}
                    spaceBetween={0}
                    centeredSlides
                    freeMode={true}
                    navigation={false}
                    modules={[FreeMode, Navigation]}
                    className="h-full w-full sm:w-auto flex justify-center items-center"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt={`image-${index}`}
                                onClick={() => handleImageClick(img)}
                                className={`w-[80px] h-[80px] object-cover rounded-lg cursor-pointer transition-all ${
                                    selectedImage === img ? 'border-2 border-green-700' : 'border-2 border-transparent'
                                }`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <ArrowsWrapper onClick={handleSlideNext}>
                    <MdArrowDownward className='-rotate-90 sm:rotate-0' />
                </ArrowsWrapper>
            </div>
        </div>
    );
};

export default ImageSlider;
