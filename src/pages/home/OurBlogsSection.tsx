import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MyButton from "../../components/buttons/MyButton";
import BlogCard from "../../components/cards/BlogCard";
import Slider, { Settings } from "react-slick";
import { useRef } from "react";
import blogs from "../../configs/allBlogs";

const OurBlogsSection = () => {
    const sliderRef = useRef<Slider | null>(null);

    const settings: Settings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className="flex justify-start items-start flex-col gap-y-10 sm:flex-row gap-x-8 px-4 sm:px-6 py-8">
            <div className="w-full sm:w-1/2 md:w-[60%] lg:w-[70%] flex flex-col justify-start items-start gap-y-4">
                <div className="flex justify-between items-end w-full">
                    <div className="flex flex-col justify-start items-start gap-y-1">
                        <h2 className="text-green-500">Recent Activities</h2>
                        <h2 className="font-semibold text-[24px]">Our Blogs</h2>
                    </div>

                    {/* Custom Arrows */}
                    <div className="flex justify-center items-center gap-x-2">
                        <MyButton
                            className="rounded-full bg-green-600 text-white p-1"
                            onClick={() => sliderRef.current?.slickPrev()} // Move slide to previous
                        >
                            <IoIosArrowBack size={16} />
                        </MyButton>
                        <MyButton
                            className="rounded-full bg-green-600 text-white p-1"
                            onClick={() => sliderRef.current?.slickNext()} // Move slide to next
                        >
                            <IoIosArrowForward size={16} />
                        </MyButton>
                    </div>
                </div>

                {/* Slider Section */}
                <div className="w-full">
                    <Slider ref={sliderRef} {...settings}>
                        {blogs.map((item, index) => (
                            <div key={index} className="px-2 pb-4 w-full">
                                <BlogCard
                                    {...item}
                                    limit={50}
                                    titleLimit={16}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Latest Updates Section */}
            <div className="w-full sm:w-1/2 md:w-[60%] p-3 rounded-lg bg-gray-100 lg:w-[30%] flex flex-col justify-start items-start gap-y-4">
                <div className="flex flex-col justify-start items-start gap-y-1">
                    <h2 className="text-green-500">Shri Bhumia Overseas</h2>
                    <h2 className="font-semibold text-[24px]">Latest Updates</h2>
                </div>
                <div className="w-full">
                    <BlogCard
                        title={blogs[0].title}
                        description={blogs[0].description}
                        date={blogs[0].date}
                        image={blogs[0].image}
                        limit={50}
                        _id={blogs[0]?._id as string}
                    />
                </div>
            </div>
        </div>
    );
};

export default OurBlogsSection;
