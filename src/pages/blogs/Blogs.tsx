
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import BlogCard from "../../components/cards/BlogCard";
import { useMediaQuery } from "react-responsive";
import { blogs } from "../home/OurBlogsSection";
import LineHeading from "../../components/headings/LineHeading";
// import BlogCardSkeleton from "../../components/skeletons/BlogCardSkeleton";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
    const containerRef = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: 720 });

    useEffect(() => {
        const ctx = gsap.context(() => {
            const blogsHeading = document.querySelector('#blogs-heading');
            const blogsSection = document.querySelectorAll('#blogs-section > div');

            blogsSection.forEach((item) => {
                gsap.fromTo(item, {
                    y: 200,
                    opacity: 0,
                }, {
                    opacity: 1,
                    y: 0,
                    ease: 'power1.inOut',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        end: 'top 70%',
                        scrub: 0.5,
                    }
                });
            });

            gsap.fromTo(blogsHeading, {
                scale: 0.5,
            }, {
                scale: 1,
                duration: 0.4,
                ease: 'power1.inOut'
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);
    return <>
        <main ref={containerRef} className="w-full">
            <img
                src={
                    isMobile ?
                    "/images/banners/blog.jpg"
                    :"/images/banners/blog.png"
                }
                loading="lazy"
                alt="image"
                className="w-full h-auto"
            />
            <div className="w-full px-4 sm:px-10 py-4 flex flex-col justify-center items-center gap-y-10">
            <LineHeading>Our Blogs</LineHeading>
                {/* <h2 className="font-semibold text-[40px] text-green-500" id="blogs-heading">Our Blogs</h2> */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden" id="blogs-section">
                    {/* {
                    Array(10).fill(0).map((_, index) => (
                        <BlogCardSkeleton key={index} />
                    ))
                } */}
                    {
                        blogs.map((item, index) => (
                            <div key={index}>
                                <BlogCard 
                                    {...item}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    </>
}

export default Blogs;