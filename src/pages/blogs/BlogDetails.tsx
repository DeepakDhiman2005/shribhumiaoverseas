import React, { useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import BlogCard from "../../components/cards/BlogCard";
import MyButton from "../../components/buttons/MyButton";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { blogs } from "../home/OurBlogsSection";

const BlogDetails = () => {
    const { search } = useLocation();
    const blogName = useMemo(() => {
        const query = new URLSearchParams(search);
        return query.get("blog");
    }, [search]);

    const sliderRef = useRef<Slider | null>(null);
    const [activeSlide, setActiveSlide] = useState<number>(0);
    // const numOfBlogs: number = 5;

    const settings: Settings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1200,
        beforeChange: (_, next) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const Div = ({
        title = "",
        children,
    }: {
        title?: string,
        children: React.ReactNode,
    }) => {
        return (
            <div className="w-full flex flex-col justify-start items-start gap-y-2">
                <h2 className="font-semibold text-[22px]">{title}</h2>
                <div className="flex flex-col justify-start items-start gap-y-4">
                    {children}
                </div>
            </div>
        );
    };

    const ArrowsWrapper = ({
        onClick,
        children,
    }: {
        onClick: () => void;
        children: React.ReactNode;
    }) => {
        return (
            <div className="h-full flex justify-center items-center w-[10%]">
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
                className={`bg-gray-400 w-2 h-2 transition-all duration-300 cursor-pointer rounded-full ${activeSlide === index ? "scale-150 bg-green-700" : ""
                    }`}
            />
        );
    };

    return (
        <div className="w-full flex flex-col justify-center items-center my-10 gap-y-6">
            <h1 className="font-semibold text-[50px] capitalize">{blogName}</h1>
            <img
                src="/product-images/IMG-20250224-WA0001.jpg"
                className="w-3/4 sm:w-1/2 h-auto"
                alt="Blog"
            />

            <div className="w-full flex flex-col justify-start items-start gap-y-4 px-5 sm:px-8 md:px-14">
                <Div title="Wool Rugs">
                    <p>
                        Are you looking to achieve a royal appearance that is also aesthetically pleasing? A wool rug is all you need. One can find a limited variety of woollen rugs in the market. Oriental rugs made of wool and silk have a traditional feel, whereas shaggy wool rugs have a more modern appearance. Wool Persian rugs instantly transform a space into a classic one. These rugs are handmade & the process can take months or even longer. Although pricey, they are worthwhile to purchase as a family heirloom.
                    </p>
                    <p>
                        Wool rugs are resilient to heavy foot traffic and cosy for the feet. Since wool comes from sheep, it contains oil, which shields it from stains. Due to fibre density, thicker carpets can be made.
                    </p>
                </Div>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-y-3 py-4">
                <h2 className="text-green-500 font-semibold text-[30px] px-5 sm:px-8 md:px-14">
                    Latest Blogs
                </h2>

                <div className="w-full px-0 sm:px-8">
                    <Slider ref={sliderRef} {...settings}>
                        {blogs.map((item, index) => (
                                <div key={index} className="px-6">
                                    <BlogCard {...item} />
                                </div>
                            ))}
                    </Slider>
                </div>

                <div className="w-full flex justify-center gap-x-1 items-center py-4">
                    <ArrowsWrapper onClick={() => sliderRef.current?.slickPrev()}>
                        <IoIosArrowBack
                            size={15}
                            className="group-hover:-translate-x-1 transition-all duration-500"
                        />
                    </ArrowsWrapper>


                    <div className="flex justify-center items-center gap-x-3">
                        {blogs.map((_, index) => (
                                <Dot key={index} index={index} />
                            ))}
                    </div>

                    <ArrowsWrapper onClick={() => sliderRef.current?.slickNext()}>
                        <IoIosArrowForward
                            size={15}
                            className="group-hover:translate-x-1 transition-all duration-500"
                        />
                    </ArrowsWrapper>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
