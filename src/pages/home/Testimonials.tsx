// styles
// import "../../styles/slider.scss";

import Slider, { Settings } from "react-slick";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialCard from "../../components/cards/TestimonialCard";
import Dot from "../../components/dots/Dot";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
    const sliderRef = useRef<Slider | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const isMobile = useMediaQuery({ maxWidth: 850 });

    const settings: Settings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        autoplay: true,
        beforeChange: (_, next: number) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    }

    const details = [
        // {
        //     title: 'PARRS PRODUCTS (New Zealand)',
        //     content: 'Shri Bhumia Overseas has been an incredible partner in providing high-quality, eco-friendly bags. Their attention to detail and commitment to sustainability make them our go-to supplier. The craftsmanship is top-notch, and deliveries are always on time!',
        //     timing: '1 months ago',
        //     color: 'bg-purple-800',
        //     image: '/images/clients/1.png',
        // },
        {
            title: 'Re-loved Apparel (Australia)',
            content: 'We were looking for ethically made, reusable bags for our brand, and Shri Bhumia Overseas exceeded our expectations. Their team worked closely with us to customize our designs, and the final product was exactly what we envisioned!',
            timing: '1 months ago',
            color: 'bg-green-700',
            image: '/images/clients/1.png',
        },
        {
            title: 'Al Haddad (Malaysia)',
            content: 'Exceptional quality and service! The team at Shri Bhumia Overseas delivered beautifully crafted jute and cotton bags that perfectly aligned with our brand values. Their dedication to sustainability is truly inspiring.',
            timing: '2 months ago',
            color: 'bg-blue-700',
            image: '/images/clients/2.png',
        },
        {
            title: 'Koopman International BV (The Netherlands)',
            content: "We've been sourcing bags from Shri Bhumia Overseas for years, and they never disappoint. Their commitment to quality, ethical manufacturing, and timely delivery makes them a reliable partner for our business.",
            timing: '2 months ago',
            color: 'bg-orange-700',
            image: '/images/clients/3.png',
        },
        {
            title: 'Dabur India',
            content: 'As a leading brand, we needed sustainable packaging solutions, and Shri Bhumia Overseas provided just that. Their bags are durable, stylish, and eco-friendly – exactly what we needed!',
            timing: '3 months ago',
            color: 'bg-purple-800',
            image: '/images/clients/4.png',
        },
        {
            title: 'Tree Top Trading (Colombia)',
            content: 'The best supplier we have worked with! Their professionalism, attention to detail, and ability to meet bulk order demands set them apart from the competition. Highly recommended!',
            timing: '4 months ago',
            color: 'bg-gray-800',
            image: '/images/clients/5.png',
        },
        // {
        //     title: 'The Domensch Gonza (Uruguay)',
        //     content: 'Shri Bhumia Overseas stands out for their commitment to sustainability and product excellence. Their jute and cotton bags are not just high-quality but also help us promote an eco-conscious brand image.',
        //     timing: '4 months ago',
        //     color: 'bg-red-700',
        // }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!isMobile) {
                const heading = containerRef.current?.querySelector('h2') as HTMLElement;
                const desc = containerRef.current?.querySelector('p') as HTMLElement;
                const sliderContainer = containerRef.current?.querySelector('.slider-container-testimonials') as HTMLElement;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "top 50%",
                        // scrub: 0.5,
                    },
                });

                tl.fromTo(
                    heading,
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.3, ease: "power2.inOut" }
                )
                    .fromTo(
                        desc,
                        { y: 100, opacity: 0 },
                        { opacity: 1, y: 0, duration: 0.4, ease: "power2.inOut" },
                        "-=0.2"
                    )
                    .fromTo(
                        sliderContainer,
                        { y: 100, opacity: 0 },
                        { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut" },
                        "-=0.3"
                    );
            }
        }, containerRef);

        return () => ctx.revert();
    }, [isMobile]);

    return <>
        <div ref={containerRef} className="flex flex-col justify-center items-center w-full my-6">
            <h2 className="font-semibold text-[35px]">Testimonials</h2>
            <p className="text-center w-full font-medium px-4 md:px-16">Our clients trust us for high-quality, eco-friendly bags, timely service, and exceptional craftsmanship. Their satisfaction drives our commitment to sustainability and excellence.</p>
            <div className="w-full slider-container-testimonials">
                <Slider ref={sliderRef} {...settings}>
                    {
                        details.map((item, index) => (
                            <div key={index} className="px-8 my-2 w-full">
                                <TestimonialCard {...item} />
                            </div>
                        ))
                    }
                </Slider>
            </div>
            {/* Dots */}
            <div className="w-full flex justify-center items-center gap-3 mt-6">
                {details.map((_, index) => (
                    <Dot
                        key={index}
                        index={index}
                        onClick={() => sliderRef.current?.slickGoTo(index)}
                        activeSlide={activeSlide}
                    />
                ))}
            </div>
        </div>
    </>
}

export default Testimonials;