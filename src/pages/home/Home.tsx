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
                    scrub: 0.5,
                }
            });
            tl.fromTo(productHeading, {
                y: 100,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.inOut",
            });
            tl.fromTo(productDesc, {
                y: 100,
                opacity: 0,
            }, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.inOut",
            });
            tl.fromTo(productSlider, {
                y: 100,
                opacity: 0,
            }, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.inOut",
            });

            gsap.fromTo(aboutLeft, {
                x: -200,
                opacity: 0,
            }, {
                opacity: 1,
                x: 0,
                ease: "power2.inOut",
                duration: 1.2,
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 0.5,
                }
            });

            gsap.fromTo(aboutRight, {
                x: 200,
                opacity: 0,
            }, {
                opacity: 1,
                x: 0,
                ease: "power2.inOut",
                duration: 1.2,
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 0.5,
                }
            });

            gsap.fromTo(visionLeft, {
                x: 200,
                opacity: 0,
            }, {
                opacity: 1,
                x: 0,
                ease: "power2.inOut",
                duration: 1.2,
                scrollTrigger: {
                    trigger: visionRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 0.5,
                }
            });

            gsap.fromTo(visionRight, {
                x: -200,
                opacity: 0,
            }, {
                opacity: 1,
                x: 0,
                ease: "power1.inOut",
                duration: 1.2,
                scrollTrigger: {
                    trigger: visionRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 0.5,
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    // const products: Array<ProductCardInterface> = Array(8).fill(0).map((_, index) => ({
    //     image: `IMG-20250224-WA000${index + 1}.jpg`,
    //     id: `${index + 1}`,
    //     height: '14 inches',
    //     width: '15 inches',
    //     gusset: '17 inches',
    //     title: 'Color Full Bags',
    // }))

    return <>
        <main ref={containerRef} className="w-full">
            <HomeSlider className=''>
                {/* <div className='w-full h-full flex flex-col justify-center items-start text-start gap-y-4 py-10 text-white'>
                    <h2 className='font-semibold text-[40px] leading-tight uppercase text-gray-200'>Eco-Friendly Craftsmanship by Shri Bhumia Overseas</h2>
                    <p>Shri Bhumia Overseas is a leading manufacturer and exporter of premium jute, cotton, recycled cotton, Juco, and canvas bags. With 21+ years of expertise, we prioritize sustainability, ethical production, and high-quality craftsmanship.</p>
                    <MyButton className='bg-green-800 border border-solid border-green-800 transition-all duration-500 hover:bg-white hover:text-green-800'>Learn More</MyButton>
                </div> */}
            </HomeSlider>

            {/* about */}
            <div ref={aboutRef} className=" w-full bg-gray-300 py-6 flex overflow-x-hidden overflow-y-auto justify-center flex-col md:flex-row items-center px-4 sm:px-12 gap-y-8 md:gap-y-auto gap-x-4">
                <div className="w-full md:w-1/2 left flex justify-center md:justify-start px-10 items-center">
                    {/* <div className="w-3/4 relative -translate-y-10"> */}
                    <div className="w-full relative">
                        <img
                            src={"/images/about-uss.jpg"}
                            alt="image"
                            className="rounded-md w-full h-full"
                        />
                        {/* <div className="absolute w-full h-full border-[3px] border-solid border-green-700 rounded-md -right-6 -z-[1] -bottom-6"></div> */}
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-y-4 right">
                    <div className='flex flex-col justify-start items-start'>
                        <h2 className="font-semibold text-[35px] text-gray-900">About us</h2>
                        <p>SHRI BHUMIA OVERSEAS is a  manufacturer supplier and exporter of bags is a renowned jute and cotton, Recycle Cotton, Juco, and Canvas bags manufacturer based in Ghaziabad Uttar Pradesh with 5000 Sq Ft factory in Kolkata West Bengal. With over 21 years of experience in the industry, we have become a trusted name for delivering high-quality eco-friendly bags. We take pride in our commitment to sustainability and ethical practices.</p>
                    </div>
                    <Link to={'/about'}>
                        <MyButton className='rounded-full bg-green-800'>Learn More...</MyButton>
                    </Link>
                    {/* <p>Our wide range of products includes shopping bags, tote bags, promotional bags, wine bottle bags, and much more. We prioritize using natural and biodegradable materials that have minimal impact on the environment. Our range of products includes durable jute and cotton and Recycle cotton bags that are not only stylish but also sustainable alternatives to single-use plastic bags.</p> */}
                </div>
            </div>

            <div ref={ourProductsRef} className="flex justify-center w-full items-center my-3 gap-y-1 flex-col">
                <h2 className="font-semibold text-green-500 text-[30px]">Our Products</h2>
                <p className="text-center w-full font-medium text-gray-900">We offer a wide range of high-quality bags, including shopping bags, tote bags, promotional bags, wine bottle bags, and more-designed for style, durability, and sustainability.</p>
                {/* <OurProductsSlider products={products.products} /> */}
                <OurProductsSlider products={[]} />
            </div>

            <Testimonials />

            {/* vision */}
            <div ref={visionRef} className="my-8 w-full bg-gray-300 py-2 flex justify-center overflow-hidden flex-col md:flex-row-reverse items-center px-4 sm:px-12  gap-y-8 md:gap-y-auto">
                <div className="w-full md:w-1/2 left flex justify-center md:justify-center p-auto md:pl-20 items-center">
                    {/* <div className="w-3/4 relative -translate-y-10"> */}
                    <div className="w-full relative">
                        <img
                            src={"/images/map.jpg"}
                            alt="image"
                            className="rounded-md object-fill w-full h-full"
                        />
                        {/* <div className="absolute w-full h-full border-[3px] border-solid border-green-700 rounded-md -right-6 -z-[1] -bottom-6"></div> */}
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start right gap-y-2">
                    <h2 className="font-semibold text-[35px] text-gray-900 leading-tight">Our Clients</h2>
                    <p>We take pride in our strong, long-standing partnerships with esteemed global brands, including PARRS PRODUCTS (New Zealand), Re-loved Apparel (Australia), Al Haddad (Malaysia), Koopman International BV (Netherlands), Dabur (India), Tree Top Trading (Colombia), and The Domensch Gonza (Uruguay). Our commitment to excellence and reliability has earned us the trust of industry leaders worldwide.</p>
                    <Link to={'/about'}>
                        <MyButton className='rounded-full bg-green-800'>Learn More...</MyButton>
                    </Link>
                </div>
            </div>
            {/* <div ref={visionRef} className="my-16 w-full overflow-hidden bg-gray-300 py-8 flex justify-center gap-x-20 flex-col md:flex-row-reverse items-center px-8">
                <div className="w-full md:w-1/2 left">
                    <div className="w-3/4 relative -translate-y-10">
                        <img
                            src={"/product-images/IMG-20250224-WA0008.jpg"}
                            alt="image"
                            className="rounded-md w-full h-full"
                        />
                        <div className="absolute w-full h-full border-[3px] border-solid border-green-700 rounded-md -right-6 -z-[1] -bottom-6"></div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-y-5 right">
                    <h2 className="font-semibold text-[35px] text-gray-900 leading-tight">Our Clients</h2>
                    <p>We are proud to serve renowned brands across the globe, including:</p>
                    <ul>
                        <li>PARRS PRODUCTS (New Zealand)</li>
                        <li>Re-loved Apparel (Australia)</li>
                        <li>Al Haddad (Malaysia)</li>
                        <li>Koopman International BV (The Netherlands)</li>
                        <li>Dabur (India)</li>
                        <li>Tree Top Trading (Colombia)</li>
                        <li>The Domensch Gonza (Uruguay)</li>
                    </ul>
                </div>
            </div> */}
            <WhyChooseUs />
            <OurBlogsSection />
            <OurCertificates />
            <ContactForm />
        </main>
    </>
}

export default Home;