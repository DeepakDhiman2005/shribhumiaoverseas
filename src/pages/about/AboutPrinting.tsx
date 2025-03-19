import LineHeading from "../../components/headings/LineHeading";
import ImageSlider from "../../components/sliders/ImageSlider";

const AboutPrinting = () => {
    const images: Array<string> = [
        "/images/company-images/printing/1.jpg",
        "/images/company-images/printing/2.jpg",
    ]
    return <>
        <section className="w-full flex px-4 py-3 bg-gray-200 sm:px-8 gap-x-6 gap-y-4 justify-center flex-col-reverse lg:flex-row-reverse items-center">
            <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                <LineHeading className="!capitalize">Printing Unit</LineHeading>
                <p>Our state-of-the-art <b>Printing Unit</b> is equipped with advanced technology to deliver high-quality prints with precision and durability. We specialize in various printing techniques, including:</p>
                <ul className="list-disc pl-4">
                    <li><b>Screen Printing</b> - Vibrant and long-lasting prints for bulk production.</li>
                    <li><b>Heat Transfer Printing</b> - Ideal for intricate and colorful designs.</li>
                    <li><b>Digital Printing</b> - High-resolution prints for small and customized batches.</li>
                    <li><b>Embossing & Foil Stamping</b> - Premium finishes for an elegant touch.</li>
                </ul>
                <p>We use eco-friendly, non-toxic inks and follow strict quality control measures to ensure <b>color accuracy, sharp details, and lasting durability.</b> Our skilled team ensures every print meets <b>international quality standards,</b> making our products both stylish and sustainable.</p>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center items-center'>
                <ImageSlider
                    images={images}
                    showSlides="left"
                />
            </div>
        </section>
    </>
}

export default AboutPrinting;