import { useEffect, useRef } from "react";
import SubHeading from "../../components/headings/SubHeading";
import Bold from "../../components/tags/Bold";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CustomizeSection = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const customizeClass = document.querySelectorAll('div.customize-class');
            customizeClass.forEach((item) => {
                const element = item as HTMLElement;
                const divs = element.querySelectorAll('div');
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: 0.5,
                    }
                });
                tl.fromTo(divs[0] as HTMLElement, {
                    x: 100,
                    opacity: 0,
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.inOut',
                });
                tl.fromTo(divs[1] as HTMLElement, {
                    x: 100,
                    opacity: 0,
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.inOut',
                });
            })
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const Div = ({
        children,
        className = "",
    }: {
        children: React.ReactNode,
        className?: string,
    }) => {
        return <>
            <div className={`w-full flex justify-start items-start gap-x-6 customize-class ${className}`}>
                {children}
            </div>
        </>
    }

    return <>
        <div ref={containerRef} className="w-full flex flex-col overflow-hidden justify-center items-center">
            <Div className='flex-col-reverse lg:flex-row my-5 lg:px-8 justify-center items-center'>
                <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                    <div className='flex flex-col justify-start items-start px-5 sm:px-7 md:px-auto'>
                        <Div className='flex-col -space-x-1 -space-y-1 w-full text-start'>
                            <SubHeading>Customize Your Handicraft</SubHeading>
                        </Div>
                        <p>At <Bold>Shri Bhumia Overseas,</Bold> we specialize in crafting eco-friendly jute, cotton, recycled cotton, Juco, and canvas bags tailored to your unique needs. Whether you require <Bold>custom sizes, exclusive prints, branded logos, or intricate embroidery,</Bold> our skilled artisans ensure top-notch craftsmanship with a focus on sustainability.</p>
                        <p>From <Bold>corporate gifting and promotional bags</Bold> to <Bold>retail and personal use,</Bold> we transform your ideas into high-quality, durable, and stylish eco-friendly products. <Bold>Your vision, our craftsmanship—crafted with care, delivered with excellence!</Bold></p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className='w-full sm:w-[65%] flex justify-center items-center'>
                        <img src="/images/customize.jpg" alt="image" className='w-3/4 object-fill rounded-lg' />
                    </div>
                </div>
            </Div>

            <Div className='flex-col-reverse lg:flex-row-reverse my-5 lg:px-8 justify-center items-center'>
                <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                    <div className='flex flex-col justify-start items-start px-5 sm:px-7 md:px-auto'>
                        <Div className='flex-col -space-x-1 -space-y-1 w-full text-start'>
                            <SubHeading>Customize Your Handicraft</SubHeading>
                        </Div>
                        <p>At <Bold>Shri Bhumia Overseas,</Bold> we specialize in crafting eco-friendly jute, cotton, recycled cotton, Juco, and canvas bags tailored to your unique needs. Whether you require <Bold>custom sizes, exclusive prints, branded logos, or intricate embroidery,</Bold> our skilled artisans ensure top-notch craftsmanship with a focus on sustainability.</p>
                        <p>From <Bold>corporate gifting and promotional bags</Bold> to <Bold>retail and personal use,</Bold> we transform your ideas into high-quality, durable, and stylish eco-friendly products. <Bold>Your vision, our craftsmanship—crafted with care, delivered with excellence!</Bold></p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className='w-full sm:w-3/4 flex justify-center items-center'>
                        <img src="/images/customize-with-us.png" alt="image" className='w-3/4 object-fill rounded-lg' />
                    </div>
                </div>
            </Div>

            <Div className='flex-col-reverse lg:flex-row my-5 lg:px-8 justify-center items-center'>
                <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                    <div className='flex flex-col justify-start items-start px-5 sm:px-7 md:px-auto'>
                        <Div className='flex-col -space-x-1 -space-y-1 w-full text-start'>
                            <SubHeading>Crafted Just for You!</SubHeading>
                        </Div>
                        <p>At Shri Bhumia Overseas, we create custom eco-friendly bags tailored to your needs. From unique prints and logos to custom sizes and embroidery, our expert craftsmanship ensures quality, style, and sustainability.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className='w-full sm:w-[65%] flex justify-center items-center'>
                        <img src="/images/customize.jpg" alt="image" className='w-3/4 object-fill rounded-lg' />
                    </div>
                </div>
            </Div>
        </div>
    </>
}

export default CustomizeSection;