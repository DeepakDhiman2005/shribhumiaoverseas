
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import BlogCard from "../../components/cards/BlogCard";
import { useMediaQuery } from "react-responsive";
import blogs from "../../configs/allBlogs";
import LineHeading from "../../components/headings/LineHeading";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import BlogCardSkeleton from "../../components/skeletons/BlogCardSkeleton";
import { getAllBlogsRedux } from "../../redux/features/blog";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
    const containerRef = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: 720 });
    // const blogs = useSelector((state: RootState) => state.blogs.blogs);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getAllBlogsRedux());
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const blogsHeading = document.querySelector('#blogs-heading');
            const blogsSection = document.querySelectorAll('#blogs-section > div');

            blogsSection.forEach((item) => {
                gsap.fromTo(item, {
                    y: 150,
                    opacity: 0,
                }, {
                    opacity: 1,
                    y: 0,
                    ease: 'power1.inOut',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        end: 'top 70%',
                        scrub: 0.7,
                    }
                });
            });

            gsap.fromTo(blogsHeading, {
                scale: 0.5,
            }, {
                scale: 1,
                duration: 3,
                ease: 'power2.inOut'
            });
        }, containerRef);
        return () => ctx.revert();
    }, [blogs]);

    return <>
        <main ref={containerRef} className="w-full">
            <img
                src={
                    isMobile ?
                        "/images/banners/blog.jpg"
                        : "/images/banners/blog-banner.png"
                }
                loading="lazy"
                alt="image"
                className="object-fill bg-gray-300 h-auto"
            />
            <div className="w-full px-4 sm:px-10 py-4 flex flex-col justify-center items-center gap-y-10">
                <LineHeading>Our Blogs</LineHeading>
                {/* <h2 className="font-semibold text-[40px] text-green-500" id="blogs-heading">Our Blogs</h2> */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden" id="blogs-section">
                    {
                        blogs?.length > 0 ? blogs.map((item, index) => (
                            <div key={index}>
                                <BlogCard
                                    {...item}
                                />
                            </div>
                        )) : Array(10).fill(0).map((_, index) => (
                            <BlogCardSkeleton key={index} />
                        ))
                    }
                </div>
            </div>
        </main>
    </>
}

export default Blogs;