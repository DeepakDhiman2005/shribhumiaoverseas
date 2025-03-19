import ImageSlider from "../../components/sliders/ImageSlider";
import AboutHeading from "./AboutHeading";

const AboutQualityControl = () => {
    const images: Array<string> = [
        "/images/company-images/quality-control/1.jpg",
        "/images/company-images/quality-control/2.jpg",
    ]
    return <>
        <section className="w-full flex px-4 py-3 sm:px-8 gap-x-6 gap-y-4 justify-center flex-col-reverse lg:flex-row items-center">
            <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                <AboutHeading>Quality Control</AboutHeading>
                <p>Our factory maintains rigorous quality control at every stage, from sourcing raw materials to final packaging. Each bag undergoes thorough inspection for <b>fabric strength, stitching durability, print accuracy, and finishing to meet international standards.</b> We prioritize eco-friendly production, using sustainable materials and precision craftsmanship to create durable, stylish, and high-quality products that exceed customer expectations.</p>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center items-center'>
                <ImageSlider
                    images={images}
                />
            </div>
        </section>
    </>
}

export default AboutQualityControl;