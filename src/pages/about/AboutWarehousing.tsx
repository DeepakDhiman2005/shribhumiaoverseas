import LineHeading from "../../components/headings/LineHeading";
import ImageSlider from "../../components/sliders/ImageSlider";

const AboutWarehousing = () => {
    const images: Array<string> = [
        "/images/company-images/warehouse/1.jpg",
        "/images/company-images/warehouse/2.jpg",
        "/images/company-images/warehouse/3.jpg",
    ]
    return <>
        <section className="w-full flex px-4 py-3 bg-gray-200 sm:px-8 gap-x-6 gap-y-4 justify-center flex-col-reverse lg:flex-row-reverse items-center">
            <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                <LineHeading className="!capitalize">Ware Housing</LineHeading>
                <p>Shri Bhumia Overseas operates a well-structured and spacious warehousing facility to ensure efficient inventory management, safe storage, and seamless order fulfillment. <b>Our 15,000 sq. ft. facility in Kolkata, West Bengal,</b> is designed to handle bulk production while maintaining strict quality control standards. Equipped with modern storage systems, <b>we ensure that our eco-friendly jute, cotton, recycled cotton, and canvas bags</b> are stored in optimal conditions to preserve their quality. Our streamlined logistics and warehousing operations enable us to process and dispatch orders promptly, ensuring timely deliveries to <b>our clients across the globe.</b></p>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center items-center'>
                <ImageSlider
                    images={images}
                />
            </div>
        </section>
    </>
}

export default AboutWarehousing;