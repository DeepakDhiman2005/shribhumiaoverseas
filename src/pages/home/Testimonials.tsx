"use client";

// styles
import "../../styles/slider.scss";

import Slider from "react-slick";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialCard from "../../components/cards/TestimonialCard";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
    const testimonialsRef = useRef<HTMLDivElement | null>(null);

    const settings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        autoplay: true,
        dots: true,
        customPaging: () => (
            <div className="w-2 h-2 bg-gray-400 rounded-full transition-all duration-300 hover:bg-gray-600"></div>
        ),
        dotsClass: "slick-dots custom-dots",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }

    const details = [
        {
            title: 'PARRS PRODUCTS (New Zealand)',
            content: 'Shri Bhumia Overseas has been an incredible partner in providing high-quality, eco-friendly bags. Their attention to detail and commitment to sustainability make them our go-to supplier. The craftsmanship is top-notch, and deliveries are always on time!',
            timing: '1 months ago',
            color: 'bg-purple-800',
        },
        {
            title: 'Re-loved Apparel (Australia)',
            content: 'We were looking for ethically made, reusable bags for our brand, and Shri Bhumia Overseas exceeded our expectations. Their team worked closely with us to customize our designs, and the final product was exactly what we envisioned!',
            timing: '1 months ago',
            color: 'bg-green-700',
        },
        {
            title: 'Al Haddad (Malaysia)',
            content: 'Exceptional quality and service! The team at Shri Bhumia Overseas delivered beautifully crafted jute and cotton bags that perfectly aligned with our brand values. Their dedication to sustainability is truly inspiring.',
            timing: '2 months ago',
            color: 'bg-blue-700',
        },
        {
            title: 'Koopman International BV (The Netherlands)',
            content: "We've been sourcing bags from Shri Bhumia Overseas for years, and they never disappoint. Their commitment to quality, ethical manufacturing, and timely delivery makes them a reliable partner for our business.",
            timing: '2 months ago',
            color: 'bg-orange-700',
        },
        {
            title: 'Dabur India',
            content: 'As a leading brand, we needed sustainable packaging solutions, and Shri Bhumia Overseas provided just that. Their bags are durable, stylish, and eco-friendly – exactly what we needed!',
            timing: '3 months ago',
            color: 'bg-purple-800',
        },
        {
            title: 'Tree Top Trading (Colombia)',
            content: 'The best supplier we have worked with! Their professionalism, attention to detail, and ability to meet bulk order demands set them apart from the competition. Highly recommended!',
            timing: '4 months ago',
            color: 'bg-gray-800',
        },
        {
            title: 'The Domensch Gonza (Uruguay)',
            content: 'Shri Bhumia Overseas stands out for their commitment to sustainability and product excellence. Their jute and cotton bags are not just high-quality but also help us promote an eco-conscious brand image.',
            timing: '4 months ago',
            color: 'bg-red-700',
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            const heading = (testimonialsRef.current as HTMLElement).querySelector('h2');
            const desc = (testimonialsRef.current as HTMLElement).querySelector('p');
            const slides = (testimonialsRef.current as HTMLElement).querySelector('div');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: testimonialsRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 0.5,
                }
            });
            tl.fromTo(heading, {
                y: 100,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 0.2,
                ease: "power2.inOut",
            });
            tl.fromTo(desc, {
                y: 100,
                opacity: 0,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.inOut",
            });
            tl.fromTo(slides, {
                y: 100,
                opacity: 0,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.inOut",
            });

        }, testimonialsRef);
        return () => ctx.revert();
    }, []);

    return <>
        <div ref={testimonialsRef} className="flex flex-col justify-center items-center w-full my-6">
            <h2 className="font-semibold text-[35px]">Testimonials</h2>
            <p className="text-center w-full font-medium px-4 md:px-16">Our clients trust us for high-quality, eco-friendly bags, timely service, and exceptional craftsmanship. Their satisfaction drives our commitment to sustainability and excellence.</p>
            <div className="w-full">
                <Slider {...settings}>
                    {
                        details.map((item, index) => (
                            <div key={index} className="px-8 my-2 w-full">
                                <TestimonialCard {...item} />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </>
}

export default Testimonials;