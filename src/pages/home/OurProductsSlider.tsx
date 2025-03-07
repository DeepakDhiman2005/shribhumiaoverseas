import Slider, { Settings } from "react-slick";
import ProductCard, { ProductCardInterface } from "../../components/cards/ProductCard";
import ProductCardSkeleton from "../../components/skeletons/ProductCardSkeleton";
import { Suspense, useMemo, useRef, useState } from "react";
import getAllProducts from "../../functions/getAllProducts";
import MyButton from "../../components/buttons/MyButton";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const OurProductsSlider = ({
    products = [],
}: {
    products?: Array<ProductCardInterface>
}) => {
    const sliderRef = useRef<Slider | null>(null);
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const myProducts = useMemo(() => {
        console.log(products);
        return getAllProducts(15);
    }, []);

    const settings: Settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        beforeChange: (_, next: number) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    const ArrowsWrapper = ({
        onClick,
        direction,
        children,
    }: {
        onClick: () => void;
        direction: "left" | "right";
        children: React.ReactNode;
    }) => {
        return (
            <div
                className={`absolute top-1/2 transform -translate-y-3/4 ${
                    direction === "left" ? "left-0 translate-x-2" : "right-0 -translate-x-2"
                } z-10`}
            >
                <MyButton
                    className="bg-green-600 cursor-pointer rounded-full p-2 text-white group hover:bg-green-700 transition-all"
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
                className={`bg-gray-300 w-2 h-2 transition-all duration-300 cursor-pointer rounded-full ${
                    activeSlide === index ? "scale-125 bg-green-700" : ""
                }`}
            />
        );
    };

    return (
        <div className="w-full my-4 relative">
            <Suspense fallback={<h2>Loading...</h2>}>
                <div className="relative w-full">
                    <ArrowsWrapper onClick={() => sliderRef.current?.slickPrev()} direction="left">
                        <IoIosArrowBack size={20} className="group-hover:-translate-x-1 transition-all duration-500" />
                    </ArrowsWrapper>
                    
                    <Slider ref={sliderRef} {...settings}>
                        {myProducts.length > 0
                            ? myProducts.map((item, index) => (
                                  <div key={index} className="px-4">
                                      <ProductCard {...item} />
                                  </div>
                              ))
                            : Array(5)
                                  .fill(0)
                                  .map((_, index) => (
                                      <div key={index} className="px-4">
                                          <ProductCardSkeleton />
                                      </div>
                                  ))}
                    </Slider>

                    <ArrowsWrapper onClick={() => sliderRef.current?.slickNext()} direction="right">
                        <IoIosArrowForward size={20} className="group-hover:translate-x-1 transition-all duration-500" />
                    </ArrowsWrapper>

                    {/* Dots */}
                    <div className="w-full flex justify-center items-center gap-3 mt-6">
                        {myProducts.map((_, index) => (
                            <Dot key={index} index={index} />
                        ))}
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default OurProductsSlider;
