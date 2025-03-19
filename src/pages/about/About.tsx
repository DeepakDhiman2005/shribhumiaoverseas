import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';
import OurFactory from './OurFactory';
import AboutIntroduction from './AboutIntroduction';
import AboutMissionVision from './AboutMissionVision';
import AboutOurClients from './AboutOurClients';
import AboutOurProducts from './AboutOurProducts';
import AboutWhyChoose from './AboutWhyChoose';
import AboutQualityControl from './AboutQualityControl';
import AboutPrinting from './AboutPrinting';
import AboutPackaging from './AboutPackaging';
import AboutWarehousing from './AboutWarehousing';
import AboutTradeFair from './AboutTradeFair';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const isMobile = useMediaQuery({ maxWidth: 720 });
    const containerRef = useRef<HTMLDivElement | null>(null);

    return <>
        <main ref={containerRef} className='w-auto'>
            <div className='w-auto'>
                <img
                    src={
                        isMobile ?
                            "/images/banners/About-banner.jpg"
                            // : "/images/banners/about.png"
                            : "/images/banners/about-banner-2.png"
                    }
                    alt='image'
                    className='h-auto object-fill w-auto bg-gray-300'
                />
            </div>
            <div className='w-full flex flex-col py-4 gap-y-6 justify-start items-start'>
                <AboutIntroduction />
                <AboutMissionVision />
                <AboutOurClients />

                <AboutOurProducts />
                <AboutWhyChoose />

                <OurFactory />
                <AboutQualityControl />
                <AboutPrinting />
                <AboutPackaging />
                <AboutWarehousing />
                <AboutTradeFair />
            </div>
        </main>
    </>
}

export default About;