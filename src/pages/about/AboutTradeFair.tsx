import ImageSlider from "../../components/sliders/ImageSlider";
import AboutHeading from "./AboutHeading";

const AboutTradeFair = () => {
    const images: Array<string> = [
        "/images/company-images/trade-fair/1.jpg",
        "/images/company-images/trade-fair/2.jpg",
    ]

    return <>
        <section className="w-full flex px-4 py-3 sm:px-8 gap-x-6 gap-y-4 justify-center flex-col-reverse lg:flex-row items-center">
            <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                <AboutHeading>Trade Fair</AboutHeading>
                <p>Shri Bhumia Overseas actively participates in leading national and international trade fairs to showcase <b>our range of eco-friendly jute, cotton, recycled cotton, and canvas bags.</b> These events provide us with an opportunity to <b>connect with global buyers, industry professionals, and sustainability advocates.</b> Through our exhibitions, we highlight our commitment to quality, innovation, and sustainable practices while exploring new business collaborations. Our presence at trade fairs allows customers to experience the craftsmanship and durability of <b>our products firsthand, reinforcing our reputation</b> as a trusted manufacturer and exporter.</p>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center items-center'>
                <ImageSlider
                    images={images}
                />
            </div>
        </section>
    </>
}

export default AboutTradeFair;