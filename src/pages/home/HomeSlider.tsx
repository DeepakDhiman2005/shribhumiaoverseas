import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import Slider, { Settings } from "react-slick";
import { useRef, useState } from "react";
import MyButton from "../../components/buttons/MyButton";

const HomeSlider = ({
    children,
    className = "",
}: {
    children?: React.ReactNode,
    className?: string,
}) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const sliderRef = useRef<Slider | null>(null);
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const settings: Settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2400,
        // fade: true,
        // lazyLoad: 'progressive', 
        // vertical: true,
        beforeChange: (_, next: number) => setActiveSlide(next),
    };

    const images = [
        "bags-banner2.png",
        "Canvas-bag.png",
        "wine-bottle-bags.png",
        "Latop-bag.png",
        "lpad-sleeve-bag.png",
        "Lunch-bags-beach-bag.png",
        // "onference-bags.png",
        "Juco-promotional-bags.png",
        "shopping-bag.jpg",
        "Tote-bag.jpg",
        "women-Trendy-Bags-Drawstring-pouches.png"
    ];

    const phoneImages = [
        "phone-size.jpg",
        "Canvas-bag-phone-size.png",
        "wine-bottle-bags-phone-size.jpg",
        // "conference-bags-phone.png",
        "laptop-bag-phone.png",
        "lpad-bag-phone.png",
        "lunch-bags-phhone.png",
        "Juco-promotional-bags-PHONE.jpg",
        "phone-size-shopping-bag.jpg",
        "phone-size-tote-bags.jpg",
        "women-Trendy-Bags-Drawstring-pouches-phone.jpg",
    ];

    const ArrowsWrapper = ({
        onClick,
        children,
    }: {
        onClick: () => void;
        children: React.ReactNode;
    }) => {
        return (
            <div className="h-full flex justify-center items-center w-[20%] sm:w-[10%]">
                <MyButton
                    className="bg-green-600 cursor-pointer rounded-full p-2 text-white group"
                    onClick={onClick}
                >
                    {children}
                </MyButton>
            </div>
        );
    };

    const Dot = ({ index }: { index: number }) => {
        return (
            <div
                onClick={() => sliderRef.current?.slickGoTo(index)}
                className={`bg-gray-200 w-2 h-2 transition-all duration-300 cursor-pointer rounded-full ${
                    activeSlide === index ? "scale-150 bg-green-700" : ""
                }`}
            />
        );
    };

    return (
        <div className={`w-full relative`}>
            <Slider ref={sliderRef} {...settings} className="!m-0 !p-0">
                {(isMobile ? phoneImages : images).map((item, index) => (
                    <div key={index} className="w-full h-auto overflow-hidden !p-0 !m-0 leading-none">
                        <div className="w-full h-auto">
                            <img
                                // src={item}
                                src={`/images/banners/${item}`}
                                alt="image"
                                className="w-full h-[450px] brightness-[1.15] block"
                            />
                        </div>
                    </div>
                ))}
            </Slider>

            <div className={`absolute top-0 left-0 w-full flex justify-center h-full ${className}`}>
                <ArrowsWrapper onClick={() => sliderRef.current?.slickPrev()}>
                    <IoIosArrowBack size={18} className="group-hover:-translate-x-1 transition-all duration-500" />
                </ArrowsWrapper>
                <div className="w-[60%] sm:w-[80%] flex flex-col justify-start items-start">
                    <div className="w-full h-[90%]">{children}</div>
                    <div className="w-full h-[10%] flex justify-center items-center gap-x-3 ">
                        {(isMobile ? phoneImages : images).map((_, index) => (
                            <Dot key={index} index={index} />
                        ))}
                    </div>
                </div>
                <ArrowsWrapper onClick={() => sliderRef.current?.slickNext()}>
                    <IoIosArrowForward size={18} className="group-hover:translate-x-1 transition-all duration-500" />
                </ArrowsWrapper>
            </div>
        </div>
    );
};

export default HomeSlider;
