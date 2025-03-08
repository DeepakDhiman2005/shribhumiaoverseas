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
                            <SubHeading>Make Your Own Bag</SubHeading>
                        </Div>
                        <p>At <Bold>Shri Bhumia Overseas,</Bold> we specialize in crafting eco-friendly jute and cotton bags customized to your preferences. Whether you need <Bold>unique sizes, personalized prints, branded logos, or detailed embroidery,</Bold> our artisans ensure top-quality craftsmanship with sustainability at the core.</p>
                        <p>Perfect for <Bold>corporate branding, promotional campaigns,</Bold> and <Bold>everyday use,</Bold> our durable and stylish jute and cotton bags bring your vision to life. <Bold>Designed for sustainability, crafted for excellence!</Bold></p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className='w-full sm:w-3/4 flex justify-center items-center'>
                        <img src="/images/crafted-image.png" alt="Customized Jute and Cotton Bags" className='object-fill rounded-lg' />
                    </div>
                </div>
            </Div>

            <Div className='flex-col-reverse lg:flex-row-reverse my-5 lg:px-8 justify-center items-center'>
                <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                    <div className='flex flex-col justify-start items-start px-5 sm:px-7 md:px-auto'>
                        <Div className='flex-col -space-x-1 -space-y-1 w-full text-start'>
                            <SubHeading>Personalize Your Eco-Friendly Bags</SubHeading>
                        </Div>
                        <p>At <Bold>Shri Bhumia Overseas,</Bold> we craft high-quality, sustainable jute and cotton bags, tailored to your needs. Choose from <Bold>custom sizes, prints, logos, and embroidery</Bold> to create a unique and eco-conscious product.</p>
                        <p>Ideal for <Bold>business promotions, gifting, and retail,</Bold> our eco-friendly bags offer durability, style, and sustainability. <Bold>Your brand, our expertise—crafted with precision, delivered with care!</Bold></p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className='w-full sm:w-3/4 flex justify-center items-center'>
                        <img src="/images/make-your-own-bag.png" alt="Personalized Jute and Cotton Bags" className='w-full object-fill rounded-lg' />
                    </div>
                </div>
            </Div>

            <Div className='flex-col-reverse lg:flex-row my-5 lg:px-8 justify-center items-center'>
                <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                    <div className='flex flex-col justify-start items-start px-5 sm:px-7 md:px-auto'>
                        <Div className='flex-col -space-x-1 -space-y-1 w-full text-start'>
                            <SubHeading>Crafted for You, Naturally</SubHeading>
                        </Div>
                        <p>At Shri Bhumia Overseas, we design and produce custom jute and cotton bags that blend sustainability with style. Whether for promotions or everyday use, our bags are crafted to your exact specifications.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className='w-full sm:w-3/4 flex justify-center items-center'>
                        <img src="/images/personalize-your-eco-friendly.png" alt="Eco-Friendly Custom Bags" className='object-fill rounded-lg' />
                    </div>
                </div>
            </Div>
        </div>
    </>
}

export default CustomizeSection;
