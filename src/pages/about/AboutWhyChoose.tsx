import AboutHeading from "./AboutHeading";

const AboutWhyChoose = () => {
    return <>
        <section className="w-full flex px-4 py-3 sm:px-8 gap-x-6 justify-center flex-col-reverse lg:flex-row items-center">
            <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                <AboutHeading>Why Choose Us?</AboutHeading>
                <ul className='list-disc pl-4'>
                    <li><b>Timely Delivery -</b> Meeting bulk order deadlines with efficiency.</li>
                    <li><b>Customization & OEM Services -</b> Tailored size, design, and printing options.</li>
                    <li><b>Sustainable Materials -</b> Biodegradable, durable, and eco-friendly solutions.</li>
                    <li><b>Global Clientele -</b> Trusted by international brands across New Zealand, Australia, Malaysia, Netherlands, India, and more.</li>
                </ul>
            </div>
            <div className='w-full sm:w-3/4 lg:w-1/2 flex justify-center items-center'>
                <img src="/images/why-choose-us.png" alt="image" className='w-1/2 rounded-lg' />
            </div>
        </section>
    </>
}

export default AboutWhyChoose;