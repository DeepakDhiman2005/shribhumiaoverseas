import Slider, { Settings } from "react-slick";
import ProductCard, { ProductCardInterface } from "../../components/cards/ProductCard";
import ProductCardSkeleton from "../../components/skeletons/ProductCardSkeleton";
import { Suspense, useMemo, useRef, useState } from "react";
import getAllProducts from "../../functions/getAllProducts";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ArrowsWrapper from "../../components/arrows/ArrowWrapper";
import Dot from "../../components/dots/Dot";
// import allProducts from "../../configs/products";

const OurProductsSlider = ({
    products = [],
}: {
    products?: Array<ProductCardInterface>
}) => {
    const sliderRef = useRef<Slider | null>(null);
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const myProducts = useMemo<ProductCardInterface[]>(() => {
        console.log(products);
        return getAllProducts(15);
        // return allProducts;
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
                            <Dot
                                key={index} 
                                index={index} 
                                onClick={() => sliderRef.current?.slickGoTo(index)}
                                activeSlide={activeSlide}
                            />
                        ))}
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default OurProductsSlider;
