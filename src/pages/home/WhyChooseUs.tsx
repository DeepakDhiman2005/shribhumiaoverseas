import { FaUserCheck } from "react-icons/fa";
import WhyChooseUsCard from "../../components/cards/WhyChooseUsCard";
import { MdHistory } from "react-icons/md";
import { LiaCertificateSolid } from "react-icons/lia";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const gridBoxRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: 'top 20%',
                    // scrub: 0.5,
                }
            });
            const heading = contentRef.current?.querySelector('h2') as HTMLElement;
            const para = contentRef.current?.querySelectorAll('p');
            const gridBoxs = gridBoxRef.current?.querySelectorAll('#grid-box-child');

            tl.fromTo(heading, {
                opacity: 0,
                y: 40,
            }, {
                opacity: 1,
                y: 0,
                ease: "power2.inOut",
                duration: 0.3,
            });

            para?.forEach((item) => {
                const ele = item as HTMLElement;
                tl.fromTo(ele, {
                    opacity: 0,
                    y: 40,
                }, {
                    opacity: 1,
                    y: 0,
                    ease: "power2.inOut",
                    duration: 0.3,
                });
            })

            gridBoxs?.forEach((box) => {
                tl.fromTo(box, {
                    opacity: 0,
                    y: 20,
                    scale: 0.4,
                }, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    ease: "power1.inOut",
                    duration: 0.3,
                });
            })

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full flex justify-end items-center py-4 px-10 sm:px-12 relative">
            {/* Background Overlay */}
            <div
                className="absolute inset-0 -z-[1] brightness-[0.55] bg-black/50 bg-fixed bg-cover bg-right-bottom"
                style={{ backgroundImage: "url('/images/fream-image.jpg')" }}
            ></div>

            {/* Content */}
            <div className="w-full xl:w-[60%] flex flex-col justify-start text-white items-start gap-y-4">
                <div ref={contentRef} className="flex flex-col justify-start items-start gap-y-1">
                    <h2 className="font-semibold text-gray-100 text-[18px]">Why Choose Us</h2>
                    <p className="font-semibold text-white text-[22px]">We present work from skilled hands to perfection.</p>
                    <p className="text-white">
                        We make high-quality, eco-friendly jute, cotton, recycled cotton, Juco, and canvas bags with 21+ years of expertise, blending sustainability with innovation.
                    </p>
                </div>

                <div ref={gridBoxRef} className="grid grid-cols-1 md:grid-cols-2 w-full h-full gap-5">
                    <WhyChooseUsCard
                        icon={<FaUserCheck size={20} />}
                        title="Certified Experts & Skilled Team"
                        description="A team of experienced artisans and certified experts crafting high-quality, eco-friendly jute and cotton bags with precision and sustainability."
                    />
                    <WhyChooseUsCard
                        icon={<MdHistory size={20} />}
                        title="Fast & Reliable Services"
                        description="Delivering high-quality, custom-designed bags with efficient production and timely delivery, ensuring customer satisfaction and reliability."
                    />
                    <WhyChooseUsCard
                        icon={<LiaCertificateSolid size={20} />}
                        title="Sustainable & Eco-Friendly"
                        description="We use biodegradable materials like jute, cotton, and recycled cotton, offering stylish, durable, and sustainable alternatives to plastic bags."
                    />
                    <WhyChooseUsCard
                        icon={<LiaCertificateSolid size={20} />}
                        title="Ethical & Community-Driven"
                        description="Committed to ethical practices, fair employment, and empowering artisans while providing high-quality, customizable bags for diverse needs."
                    />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
