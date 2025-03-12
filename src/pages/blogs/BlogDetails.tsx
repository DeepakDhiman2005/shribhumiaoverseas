import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import BlogCard from "../../components/cards/BlogCard";
import MyButton from "../../components/buttons/MyButton";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { useDispatch } from "react-redux";
import { blogs } from "../home/OurBlogsSection";
// import { AppDispatch } from "../../redux/store";
// import { getBlogImageRedux } from "../../redux/features/blog";
import { FaRegCalendarAlt } from "react-icons/fa";
import BlogCardSkeleton from "../../components/skeletons/BlogCardSkeleton";
import { blogInterface } from "../../interfaces/blogInterface";
import { useMediaQuery } from "react-responsive";

const BlogDetails = () => {
    const { search } = useLocation();
    // const dispatch = useDispatch<AppDispatch>();
    // const blogDetails = useSelector((state: RootState) => state.blogs.blogDetails);
    // const blogs = useSelector((state: RootState) => state.blogs.blogs);
    const descriptionRef = useRef<HTMLDivElement | null>(null);
    const isMobile = useMediaQuery({ maxWidth: 720 });
    // const [imageUrl, setImageUrl] = useState<string>('');

    const blogName = useMemo(() => {
        const query = new URLSearchParams(search);
        return query.get("blog");
    }, [search]);

    const blogDetails = useMemo<blogInterface | null>(() => {
        if (search) {
            return blogs.filter((item) => (
                item._id === blogName
            ))[0];
        }
        return null;
    }, [search]);

    useEffect(() => {
        // dispatch(getAllBlogsRedux());
    }, []);

    useEffect(() => {
        if (blogName && blogName !== '') {
            // dispatch(getBlogDetailsRedux(blogName as string));
        }
    }, [blogName]);

    useEffect(() => {
        if (blogDetails?.description && descriptionRef.current) {
            descriptionRef.current.innerHTML = blogDetails.description;
        }
        // if (blogDetails?.image) {
        //     dispatch(getBlogImageRedux(blogDetails?._id as string, (blob: Blob) => {
        //         const _url = URL.createObjectURL(blob);
        //         setImageUrl(_url);
        //     }));
        // }
    }, [blogDetails]);

    const sliderRef = useRef<Slider | null>(null);
    const [activeSlide, setActiveSlide] = useState<number>(0);
    // const numOfBlogs: number = 5;

    const settings: Settings = {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1200,
        beforeChange: (_, next) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 720,
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

    return <>
        <img
            src={
                isMobile ?
                    "/images/banners/blog.jpg"
                    : "/images/banners/blog.png"
            }
            loading="lazy"
            alt="image"
            className="w-full h-auto"
        />
        <div className="flex justify-start flex-col md:flex-row items-start w-full">
            <div className="flex flex-col justify-start items-start w-full md:w-[70%] my-4 px-4 sm:px-6 md:px-10 gap-y-3">

                {/* {
                imageUrl && imageUrl !== '' ?
                    <img
                        src={imageUrl}
                        className="w-[95%] h-auto"
                        loading="lazy"
                        alt="Blog"
                    /> :
                    <div
                        className="w-3/4 sm:w-1/2 h-auto animate-pulse"
                    ></div>
            } */}
                {
                    blogDetails?.image && blogDetails.image !== '' ?
                        <img
                            src={blogDetails.image as string}
                            className="w-full h-auto"
                            loading="lazy"
                            alt="Blog"
                        /> :
                        <div
                            className="w-full h-[200px] animate-pulse"
                        ></div>
                }
                <div className="leading-[40px]">
                    <h1 className="font-semibold text-[30px] sm:text-[40px] text-green-700 text-center capitalize">{blogDetails?.title || ''}</h1>
                    <div className="text-[16px] flex justify-start items-center gap-x-2">
                        <FaRegCalendarAlt size={13} />
                        {blogDetails?.date || '-'}
                    </div>
                </div>

                <div ref={descriptionRef} className="w-full flex flex-col justify-start items-start gap-y-4"></div>
            </div>
            <div className="w-full md:w-[30%] flex sticky top-[55px] left-0 md:px-auto flex-col justify-start items-start gap-y-3 py-4">
                <h2 className="text-green-500 font-semibold text-[30px] px-4 sm:px-6">
                    Latest Blogs
                </h2>

                <div className="w-full">
                    <Slider ref={sliderRef} {...settings}>
                        {blogs?.length > 0 ? blogs.map((item, index) => (
                            <div key={index} className="pr-6 pl-4 sm:pl-6 md:pl-0">
                                <BlogCard {...item} />
                            </div>
                        )) : Array(6).fill(0).map((_, index) => (
                            <div key={index} className="pr-6 pl-4 sm:pl-6 md:pl-0">
                                <BlogCardSkeleton />
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


                    <div className="flex justify-center items-center gap-x-2 lg:gap-x-3">
                        {blogs.length > 0 ? blogs.map((_, index) => (
                            <Dot key={index} index={index} />
                        )) : Array(6).fill(0).map((_, index) => (
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
    </>
};

export default BlogDetails;
