import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';
import OurClientsSlider from '../home/OurClientsSlider';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const isMobile = useMediaQuery({ maxWidth: 720 });
    const containerRef = useRef<HTMLDivElement | null>(null);


    // const LineHeading = ({
    //     children,
    // }: {
    //     children: React.ReactNode,
    // }) => {
    //     return <div className='flex justify-center w-full items-center gap-x-2'>
    //         <div className='h-[2px] w-[10%] bg-green-600 '></div>
    //         <h2 className='text-green-600 font-semibold text-[30px] uppercase'>
    //             {children}
    //         </h2>
    //         <div className='h-[2px] w-[10%] bg-green-600'></div>
    //     </div>
    // }

    const SubHeading = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
        return <h2 className={`text-green-600 font-semibold text-[30px] ${className}`}>{children}</h2>
    }

    const Div = ({
        children,
        className = "",
    }: {
        children: React.ReactNode,
        className?: string,
    }) => {
        return <>
            <div className={`w-full flex justify-start items-start gap-x-6 ${className}`}>
                {children}
            </div>
        </>
    }

    return <>
        <main ref={containerRef} className='w-full'>
            <div className='w-full'>
                <img
                    src={
                        isMobile ?
                            "/images/banners/About-banner.jpg"
                            : "/images/banners/about.png"
                    }
                    alt='image'
                    className='w-full h-auto'
                />
            </div>
            <div className='w-full flex flex-col py-4 gap-y-6 px-4 sm:px-14 justify-start items-start'>
                <Div className='justify-center flex-col-reverse lg:flex-row items-center'>
                    <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                        <Div className='flex flex-col -space-x-1 -space-y-1 w-full text-start'>
                            <h2>About us</h2>
                            <SubHeading>Shri Bhumia Overseas</SubHeading>
                        </Div>
                        <p><b>Shri Bhumia Overseas</b> is a leading manufacturer, supplier, and exporter of high-quality eco-friendly bags. With over 21 years of expertise, we specialize in crafting premium Jute, Cotton, Recycled Cotton, Juco, and Canvas bags that align with sustainable and ethical production practices.</p>
                        <p>Our state-of-the-art manufacturing unit in Kolkata, West Bengal spans 5,000 sq. ft., equipped with advanced production facilities to ensure superior craftsmanship, durability, and timely delivery.</p>
                        <p>We take pride in delivering stylish, durable, and sustainable alternatives to plastic bags while supporting local artisans and eco-conscious initiatives.</p>
                    </div>
                    <div className='w-full sm:w-3/4 lg:w-1/2 flex justify-center items-center'>
                        <img src="/images/about-us.jpg" alt="image" className='w-full object-fill rounded-lg' />
                    </div>
                </Div>
                <Div className='flex-col-reverse lg:flex-row-reverse justify-center items-center'>
                    <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                        <Div className='flex-col -space-x-1 -space-y-1 w-full text-start'>
                            <SubHeading>Mission & Vision</SubHeading>
                        </Div>
                        <p><b>Mission:</b> We are committed to reducing plastic waste by promoting eco-friendly, reusable bags, contributing to a greener planet.</p>
                        <p><b>Vision:</b> To see Jute and Cotton bags in every household, eliminating single-use plastics and encouraging sustainable choices worldwide.</p>
                        <b>Core Values:</b>
                        <ul className='list-disc pl-4'>
                            <li><b>Sustainability -</b> Prioritizing eco-friendly materials with minimal environmental impact.</li>
                            <li><b>Quality Excellence -</b> Ensuring top-tier craftsmanship in every product.</li>
                            <li><b>Ethical Manufacturing -</b> Supporting fair employment and local artisan empowerment.</li>
                            <li><b>Customer Satisfaction -</b> Delivering timely service with exceptional quality.</li>
                        </ul>
                    </div>
                    <div className='w-full sm:w-3/4 lg:w-1/2 flex justify-center items-center'>
                        <img src="/images/mission-vision.png" alt="image" className='w-3/4 object-fill rounded-lg' />
                    </div>
                </Div>

                <Div className='flex-col-reverse lg:flex-row justify-center items-center'>
                    <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                        <Div className='flex-col -space-x-1 -space-y-1 w-full text-start'>
                            <SubHeading>Our Clients</SubHeading>
                        </Div>
                        <p>We take pride in our strong, long-standing partnerships with esteemed global brands, including PARRS PRODUCTS (New Zealand), Re-loved Apparel (Australia), Al Haddad (Malaysia), Koopman International BV (Netherlands), Dabur (India), Tree Top Trading (Colombia), and The Domensch Gonza (Uruguay), along with key partners in America, the Gulf, and Russia. Our commitment to excellence and reliability has earned us the trust of industry leaders worldwide.</p>
                    </div>
                    <div className='w-full sm:w-3/4 lg:w-1/2 flex justify-center items-center'>
                        <img src="/images/map.png" alt="image" className='w-3/4 object-fill rounded-lg' />
                    </div>
                </Div>

                <OurClientsSlider />

                <Div className='justify-center flex-col-reverse lg:flex-row-reverse items-center'>
                    <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                        <SubHeading>Our Product</SubHeading>
                        <p>Our products are designed with sustainability and functionality at their core, offering a wide range of eco-friendly bag solutions. Shopping bags provide a stylish and durable alternative for everyday use, while tote bags cater to both casual and professional needs with their versatile design. Promotional bags serve as an excellent branding tool, customized to enhance corporate identity. </p>
                        <p>Wine bottle bags offer an elegant and sustainable way to carry and present wine. Additionally, customized bags are tailored to meet specific design, size, and branding requirements, ensuring a perfect fit for every need. Each bag is crafted from high-quality natural materials, promoting sustainability without compromising on style or durability.</p>
                    </div>
                    <div className='w-full sm:w-3/4 lg:w-1/2 flex justify-center items-center'>
                        <img src="/images/bags.jpg" alt="image" className='w-1/2 rounded-lg' />
                    </div>
                </Div>

                {/* <Div className=''>
                    <LineHeading>Quality Processes</LineHeading>
                </Div> */}

                <Div className='flex-col-reverse lg:flex-row justify-center items-center'>
                    <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                        <Div className='flex-col -space-x-1 -space-y-1 w-full text-start'>
                            <SubHeading>Why Choose Us?</SubHeading>
                        </Div>
                        <ul className='list-disc pl-4'>
                            <li><b>Timely Delivery -</b> Meeting bulk order deadlines with efficiency.</li>
                            <li><b>Customization & OEM Services -</b> Tailored size, design, and printing options.</li>
                            <li><b>Sustainable Materials -</b> Biodegradable, durable, and eco-friendly solutions.</li>
                            <li><b>Global Clientele -</b> Trusted by international brands across New Zealand, Australia, Malaysia, Netherlands, India, and more.</li>
                        </ul>
                    </div>
                    <div className='w-full sm:w-3/4 lg:w-1/2 flex justify-center items-center'>
                        <img src="/images/why-choose-us.png" alt="image" className='w-1/2 rounded-lg' />
                    </div>
                </Div>
            </div>
        </main>
    </>
}

export default About;