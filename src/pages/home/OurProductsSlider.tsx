import Slider, { Settings } from "react-slick";
import ProductCard, { ProductCardInterface } from "../../components/cards/ProductCard";
import ProductCardSkeleton from "../../components/skeletons/ProductCardSkeleton";
import { Suspense, useMemo } from "react";
import getAllProducts from "../../functions/getAllProducts";

const OurProductsSlider = ({
    products = [],
}: {
    products?: Array<ProductCardInterface>
}) => {
    console.log(products);
    const myProducts = useMemo(() => {
        return getAllProducts(15);
    }, []);
    const settings: Settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
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
    }

    return <>
        <div className="w-full my-4">
            <Suspense fallback={<h2>Loading...</h2>}>

                <Slider {...settings}>
                    {/* {
                    products && products?.length > 0 ? products.map((item, index) => (
                        <div key={index} className="px-6">
                            <ProductCard
                                // image={`/product-images/IMG-20250224-WA000${index + 1}.jpg`}
                                {...item}
                            />
                        </div>
                    )) : Array(5).fill(0).map((_, index) => (
                        <div key={index} className="px-6">
                            <ProductCardSkeleton />
                        </div>
                    ))
                } */}
                    {
                        myProducts && myProducts.length > 0 ? myProducts.map((item, index) => (
                            <div key={index} className="px-6">
                                <ProductCard
                                    // image={`/product-images/IMG-20250224-WA000${index + 1}.jpg`}
                                    {...item}
                                />
                            </div>
                        )) : Array(5).fill(0).map((_, index) => (
                            <div key={index} className="px-6">
                                <ProductCardSkeleton />
                            </div>
                        ))
                    }
                </Slider>
            </Suspense>
        </div>
    </>
}

export default OurProductsSlider;