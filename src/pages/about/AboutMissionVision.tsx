import LineHeading from "../../components/headings/LineHeading";

const AboutMissionVision = () => {
    return <>
        <section className="w-full flex px-4 py-3 bg-gray-200 sm:px-8 gap-x-6 gap-y-4 justify-center flex-col-reverse lg:flex-row-reverse items-center">
            <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                <LineHeading>Mission & Vision</LineHeading>
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
        </section>
    </>
}

export default AboutMissionVision;