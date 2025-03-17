"use client";

import Slider, { CustomArrowProps, Settings } from "react-slick";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const OurCertificates = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const CustomPrevArrow = (props: CustomArrowProps) => {
        const { onClick } = props;
        return (
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full"
                onClick={onClick}
            >
                <MdOutlineKeyboardArrowLeft size={18} />
            </button>
        );
    }

    const CustomNextArrow = (props: CustomArrowProps) => {
        const { onClick } = props;
        return (
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full"
                onClick={onClick}
            >
                <MdOutlineKeyboardArrowRight size={18} />
            </button>
        );
    }

    const settings: Settings = {
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        variableWidth: true,
        centerMode: true,  // Enables better centering
        centerPadding: "0px",
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        cssEase: 'linear',
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

    const images = [
        "gots.png", "iso.png", "sedex.png",
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const heading = (containerRef.current as HTMLElement).querySelector('h2');
            const desc = (containerRef.current as HTMLElement).querySelector('p');
            const slides = (containerRef.current as HTMLElement).querySelector('div');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',  // Trigger earlier for a smoother entrance
                    end: 'top 50%',
                    // scrub: 0.5,
                }
            });

            tl.fromTo(heading, {
                y: 50,  // Reduce initial movement
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 0.7,  // Increase duration
                ease: "power2.out",  // Smoother easing
            });

            tl.fromTo(desc, {
                y: 50,
                opacity: 0,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
            }, "-=0.8"); // Overlap animations slightly

            tl.fromTo(slides, {
                y: 50,
                opacity: 0,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
            }, "-=0.8");

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full flex flex-col justify-center my-0 items-center gap-y-4">
            <h2 className="font-semibold text-[30px]">Our Certificates</h2>
            <p className="text-center w-full font-medium">We are in the process of obtaining SEDEX, GOTS, and ISO certifications, reinforcing our commitment to quality, sustainability, and ethical business practices.</p>
            <div className="w-full px-8">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="flex justify-center items-center h-full my-2" style={{ width: '200px' }}>
                            <div className="w-full flex justify-center items-center">
                                <div className="w-[120px] h-[120px] flex justify-center items-center">
                                    <img
                                        src={`/images/certificates/${image}`}
                                        alt="certificate"
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default OurCertificates;
