import ImageSlider from "../../components/sliders/ImageSlider";
import AboutHeading from "./AboutHeading";

const AboutPackaging = () => {
    const images: Array<string> = [
        "/images/company-images/container-loading/1.jpg",
        "/images/company-images/container-loading/2.jpg",
        "/images/company-images/container-loading/3.jpg",
        "/images/company-images/container-loading/4.jpg",
    ]
    return <>
        <section className="w-full flex px-4 py-3 sm:px-8 gap-x-6 gap-y-4 justify-center flex-col-reverse lg:flex-row items-center">
            <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                <AboutHeading>Packaging & Container Loading</AboutHeading>
                <p>We ensure secure and efficient <b>packaging & container loading</b> to maintain product integrity during transit. Our process includes:</p>
                <ul className="list-disc pl-4">
                    <li><b>Customized Packaging</b> - Using high-quality, eco-friendly materials to protect products from damage.</li>
                    <li><b>Carton & Pallet Packing</b> - Well-organized stacking for easy handling and optimized space utilization.</li>
                    <li><b>Quality Inspection</b> - Every package is thoroughly checked for weight accuracy, labeling, and durability.</li>
                    <li><b>Container Loading Optimization</b> - Strategic arrangement to maximize space, prevent shifting, and ensure safe delivery.</li>
                </ul>
                <p>With a dedicated team and strict compliance with international shipping standards, we guarantee <b>safe, timely, and hassle-free delivery</b> of goods worldwide.</p>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center items-center'>
                <ImageSlider
                    images={images}
                />
            </div>
        </section>
    </>
}

export default AboutPackaging;