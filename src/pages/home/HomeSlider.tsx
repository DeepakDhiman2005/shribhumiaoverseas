import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper/modules";
import { useState, useRef } from "react";
import MyButton from "../../components/buttons/MyButton";
import Dot from "../../components/dots/Dot";
import { Swiper as SwiperType } from "swiper";

const HomeSlider = ({
    // children,
    className = "",
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const swiperRef = useRef<SwiperType | null>(null);

    const images = [
        "Canvas-bag.png",
        "Laptop-bag.png",
        "lpad-sleeve-bag.png",
        "Lunch-bags-beach-bags.png",
        "conference-bags.png",
        "women-Trendy-Bags-Drawstring-pouches.png"
    ];

    const phoneImages = [
        "phone-size.jpg",
        "Canvas-bag-phone-size.png",
        "wine-bottle-bags-phone-size.jpg",
        "conference-bags-phone.png",
        "laptop-bag-phone.png",
        "lpad-bag-phone.png",
        "lunch-bags-phhone.png",
        "Juco-promotional-bags-PHONE.jpg",
        "phone-size-shopping-bag.jpg",
        "phone-size-tote-bags.jpg",
        "women-Trendy-Bags-Drawstring-pouches-phone.jpg",
    ];

    return (
        <div className={`w-full relative overflow-hidden h-auto`}>
            {/* Swiper with Cube Effect */}
            <Swiper
                effect="cube"
                grabCursor
                loop={true}
                cubeEffect={{
                    shadow: false,
                    slideShadows: false,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                speed={2000}
                autoplay={{
                    delay: 1400,
                    disableOnInteraction: false,
                }}
                modules={[EffectCube, Autoplay]}
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="max-w-full"
            >
                {(isMobile ? phoneImages : images).map((item, index) => (
                    <SwiperSlide key={index} className="w-full h-auto overflow-hidden !p-0 !m-0 leading-none">
                        <div className="w-full h-auto">
                            <img
                                src={`/images/banners/${item}`}
                                alt="image"
                                className="w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className={`absolute top-0 left-0 w-full z-20 items-center flex justify-between h-full px-4 ${className}`}>
                <MyButton
                    className="bg-green-600 cursor-pointer group rounded-full p-2 text-white"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <IoIosArrowBack size={18} className="group-hover:-translate-x-1 transition-all duration-300" />
                </MyButton>

                <MyButton
                    className="bg-green-600 cursor-pointer group rounded-full p-2 text-white"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <IoIosArrowForward size={18} className="group-hover:translate-x-1 transition-all duration-300" />
                </MyButton>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 transform z-20 -translate-x-1/2 flex gap-x-3">
                {(isMobile ? phoneImages : images).map((_, index) => (
                    <Dot
                        key={index}
                        index={index}
                        onClick={() => swiperRef.current?.slideTo(index)}
                        activeSlide={activeSlide}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomeSlider;
