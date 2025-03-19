import AboutHeading from "./AboutHeading";

const AboutIntroduction = () => {
    return <>
        <section className="w-full flex px-4 py-3 sm:px-8 gap-x-6 justify-center flex-col-reverse lg:flex-row items-center">
            <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                <div className='flex flex-col -space-x-1 -space-y-1 w-full justify-start items-start text-start !px-0'>
                    <h2>About us</h2>
                    <AboutHeading>Shri Bhumia Overseas</AboutHeading>
                </div>
                <p><b>Shri Bhumia Overseas</b> is a leading manufacturer, supplier, and exporter of high-quality eco-friendly bags. With over 21 years of expertise, we specialize in crafting premium Jute, Cotton, Recycled Cotton, Juco, and Canvas bags that align with sustainable and ethical production practices.</p>
                <p>Our state-of-the-art manufacturing unit in Kolkata, West Bengal spans 15,000 sq. ft., equipped with advanced production facilities to ensure superior craftsmanship, durability, and timely delivery.</p>
                <p>We take pride in delivering stylish, durable, and sustainable alternatives to plastic bags while supporting local artisans and eco-conscious initiatives.</p>
            </div>
            <div className='w-full sm:w-3/4 lg:w-1/2 flex justify-center items-center'>
                <img src="/images/about-us.jpg" alt="image" className='w-full object-fill rounded-lg' />
            </div>
        </section>
    </>
}

export default AboutIntroduction;