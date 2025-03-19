import LineHeading from "../../components/headings/LineHeading";

const OurFactory = () => {
    return <>
        <section className="w-full flex px-4 py-3 bg-gray-200 sm:px-8 gap-x-6 gap-y-4 justify-center flex-col-reverse lg:flex-row-reverse items-center">
            <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                <LineHeading className="!capitalize">Our Factory</LineHeading>
                <p>Our 15,000 sq. ft. factory in Kolkata, West Bengal is equipped with advanced facilities and skilled artisans, ensuring high-quality production of eco-friendly jute, cotton, and recycled cotton bags. We follow ethical and sustainable manufacturing practices to deliver durable and stylish products. With a strong focus on quality control, we ensure each bag meets international standards and customer expectations.</p>
            </div>
            <div className='w-full sm:w-3/4 lg:w-1/2 flex justify-center items-center'>
                {/* <img src="/images/bags.jpg" alt="image" className='w-1/2 rounded-lg' /> */}
                <video
                    src="/images/company-images/factory/1.mp4"
                    controls
                    className="w-full sm:w-3/4 rounded-lg"
                ></video>
            </div>
        </section>
    </>
}

export default OurFactory;