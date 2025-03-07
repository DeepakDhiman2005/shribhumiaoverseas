import Slider, { Settings } from "react-slick";
import LineHeading from "../../components/headings/LineHeading";
import clients from "../../configs/clients";
import ClientCard from "../../components/cards/ClientCard";
import ArrowsWrapper from "../../components/arrows/ArrowWrapper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import Dot from "../../components/dots/Dot";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurClientsSlider = () => {
    const sliderRef = useRef<Slider | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const lineHeading = useRef<HTMLDivElement | null>(null);
    const slidingRef = useRef<HTMLDivElement | null>(null);

    const [activeSlide, setActiveSlide] = useState<number>(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 0.5,
                }
            });

            tl.fromTo(lineHeading.current, {
                y: 20,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.inOut'
            });

            tl.fromTo(slidingRef.current, {
                y: 60,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.inOut"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const settings: Settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
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
    }

    return <>
        <div ref={containerRef} className="flex flex-col justify-center items-center w-full">
            <LineHeading ref={lineHeading}>What our Client say About us</LineHeading>

            <div ref={slidingRef} className="w-full relative">
                <ArrowsWrapper onClick={() => sliderRef.current?.slickPrev()} direction="left">
                    <IoIosArrowBack size={20} className="group-hover:-translate-x-1 transition-all duration-500" />
                </ArrowsWrapper>
                <Slider ref={sliderRef} {...settings}>
                    {
                        clients.map((item, index) => (
                            <div key={index} className="w-full outline-none px-4 py-2">
                                <ClientCard {...item} />
                            </div>
                        ))
                    }
                </Slider>
                <ArrowsWrapper onClick={() => sliderRef.current?.slickNext()} direction="right">
                    <IoIosArrowForward size={20} className="group-hover:translate-x-1 transition-all duration-500" />
                </ArrowsWrapper>

                {/* Dots */}
                <div className="w-full flex justify-center items-center gap-3 mt-6">
                    {clients.map((_, index) => (
                        <Dot
                            key={index}
                            index={index}
                            onClick={() => sliderRef.current?.slickGoTo(index)}
                            activeSlide={activeSlide}
                        />
                    ))}
                </div>
            </div>
        </div>
    </>
}

export default OurClientsSlider;