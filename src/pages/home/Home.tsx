import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import HomeSlider from './HomeSlider';
// import { ProductCardInterface } from '../../components/cards/ProductCard';
import OurProductsSlider from './OurProductsSlider';
import Testimonials from './Testimonials';
import OurCertificates from './OurCertificates';
import ContactForm from './ContactForm';
import WhyChooseUs from './WhyChooseUs';
import OurBlogsSection from './OurBlogsSection';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { getAllProductsRedux } from '../../redux/features/products';
import MyButton from '../../components/buttons/MyButton';
import { Link } from 'react-router-dom';
import OurClientsSlider from './OurClientsSlider';
import CustomizeSection from './CustomizeSection';
// import MyButton from '../../components/buttons/MyButton';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const ourProductsRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const visionRef = useRef<HTMLDivElement | null>(null);
    const dispatch: AppDispatch = useDispatch();
    // const products = useSelector((state: RootState) => state.products.products);

    useEffect(() => {
        dispatch(getAllProductsRedux(() => { }));
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // product section
            const productHeading = (ourProductsRef.current as HTMLElement).querySelector('h2');
            const productDesc = (ourProductsRef.current as HTMLElement).querySelector('p');
            const productSlider = (ourProductsRef.current as HTMLElement).querySelector('div');

            // about section
            const aboutLeft = (aboutRef.current as HTMLElement).querySelector('.left');
            const aboutRight = (aboutRef.current as HTMLElement).querySelector('.right');

            // vision section
            const visionLeft = (visionRef.current as HTMLElement).querySelector('.left');
            const visionRight = (visionRef.current as HTMLElement).querySelector('.right');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ourProductsRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    // scrub: 0.5,
                }
            });
            tl.fromTo(productHeading, {
                y: 100,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.inOut",
            });
            tl.fromTo(productDesc, {
                y: 100,
                opacity: 0,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.inOut",
            });
            tl.fromTo(productSlider, {
                y: 100,
                opacity: 0,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.inOut",
            });

            gsap.fromTo(aboutLeft, {
                x: -200,
                opacity: 0,
            }, {
                opacity: 1,
                x: 0,
                ease: "power2.inOut",
                duration: 0.7,
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    // scrub: 0.5,
                }
            });

            gsap.fromTo(aboutRight, {
                x: 200,
                opacity: 0,
            }, {
                opacity: 1,
                x: 0,
                ease: "power2.inOut",
                duration: 0.7,
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    // scrub: 0.5,
                }
            });

            gsap.fromTo(visionLeft, {
                x: 200,
                opacity: 0,
            }, {
                opacity: 1,
                x: 0,
                ease: "power2.inOut",
                duration: 0.7,
                scrollTrigger: {
                    trigger: visionRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    // scrub: 0.5,
                }
            });

            gsap.fromTo(visionRight, {
                x: -200,
                opacity: 0,
            }, {
                opacity: 1,
                x: 0,
                ease: "power1.inOut",
                duration: 0.7,
                scrollTrigger: {
                    trigger: visionRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    // scrub: 0.5,
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

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
        <main ref={containerRef} className="w-full">
            <HomeSlider />

            {/* about */}
            <div ref={aboutRef} className=" w-full bg-gray-100 py-6 flex overflow-x-hidden overflow-y-auto justify-center flex-col md:flex-row items-center px-4 sm:px-4 gap-y-8 md:gap-y-auto gap-x-4">
                <div className="w-full md:w-1/2 left flex justify-center md:justify-start px-10 items-center">
                    {/* <div className="w-3/4 relative -translate-y-10"> */}
                    <div className="w-full flex justify-center items-center relative">
                        <img
                            // src={"/images/about-uss.jpg"}
                            src={"/images/ourbags.png"}
                            alt="image"
                            className="rounded-md w-full lg:w-[80%] h-full"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-y-4 right">
                    <div className='flex flex-col justify-start items-start'>
                        <h2 className="font-semibold text-[35px] text-gray-900">About us</h2>
                        <p>SHRI BHUMIA OVERSEAS is a  manufacturer supplier and exporter of bags is a renowned jute and cotton, Recycle Cotton, Juco, and Canvas bags manufacturer based in Ghaziabad Uttar Pradesh with 15,000 Sq Ft factory in Kolkata West Bengal. With over 21 years of experience in the industry, we have become a trusted name for delivering high-quality eco-friendly bags. We take pride in our commitment to sustainability and ethical practices.</p>
                    </div>
                    <Link to={'/about'}>
                        <MyButton className='rounded-full bg-green-800'>Learn More</MyButton>
                    </Link>
                </div>
            </div>

            <div ref={ourProductsRef} className="flex justify-center w-full items-center my-3 gap-y-1 flex-col">
                <h2 className="font-semibold text-green-500 text-[30px]">Our Products</h2>
                <p className="text-center w-full font-medium text-gray-900">We offer a wide range of high-quality bags, including shopping bags, tote bags, promotional bags, wine bottle bags, and more-designed for style, durability, and sustainability.</p>
                {/* <OurProductsSlider products={products.products} /> */}
                <OurProductsSlider products={[]} />
            </div>

            {/* vision */}
            <div ref={visionRef} className="my-5 w-full bg-gray-100 py-2 flex justify-center overflow-hidden flex-col md:flex-row-reverse items-center px-4 sm:px-12  gap-y-8 md:gap-y-auto">
                <div className="w-full md:w-1/2 left flex justify-center md:justify-center p-auto md:pl-20 items-center">
                    {/* <div className="w-3/4 relative -translate-y-10"> */}
                    <div className="w-full relative">
                        <img
                            src={"/images/map2.jpg"}
                            alt="image"
                            className="rounded-md object-fill w-full h-full"
                        />
                        {/* <div className="absolute w-full h-full border-[3px] border-solid border-green-700 rounded-md -right-6 -z-[1] -bottom-6"></div> */}
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start right gap-y-2">
                    <h2 className="font-semibold text-[35px] text-gray-900 leading-tight">Our Clients</h2>
                    <p>We take pride in our strong, long-standing partnerships with esteemed global brands, including PARRS PRODUCTS (New Zealand), Re-loved Apparel (Australia), Al Haddad (Malaysia), Koopman International BV (Netherlands), Dabur (India), Tree Top Trading (Colombia), and The Domensch Gonza (Uruguay), along with key partners in America, the Gulf, Russia, and across South America, including Brazil, Colombia, and Peru. Our commitment to excellence and reliability has earned us the trust of industry leaders worldwide.</p>
                    <Link to={'/about'}>
                        <MyButton className='rounded-full bg-green-800'>Learn More</MyButton>
                    </Link>
                </div>
            </div>

            <OurClientsSlider />

            <Div className='flex-col-reverse lg:flex-row-reverse my-5 justify-center items-center'>
                <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                    <div className='flex flex-col justify-start items-start px-4 sm:px-10 md:px-auto'>
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
                </div>
                <div className='w-full sm:w-3/4 lg:w-1/2 flex justify-center items-center'>
                    <img src="/images/mission-vision.png" alt="image" className='w-3/4 object-fill rounded-lg' />
                </div>
            </Div>

            <WhyChooseUs />
            <CustomizeSection />
            <OurBlogsSection />
            <OurCertificates />
            <Testimonials />
            <ContactForm />
        </main>
    </>
}

export default Home;