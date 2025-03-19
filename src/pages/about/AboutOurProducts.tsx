import LineHeading from "../../components/headings/LineHeading";

const AboutOurProducts = () => {
    return <>
        <section className="w-full flex px-4 py-3 bg-gray-200 sm:px-8 gap-x-6 gap-y-4 justify-center flex-col-reverse lg:flex-row-reverse items-center">
            <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                <LineHeading className="!capitalize">Our Product</LineHeading>
                <p>Our products are designed with sustainability and functionality at their core, offering a wide range of eco-friendly bag solutions. Shopping bags provide a stylish and durable alternative for everyday use, while tote bags cater to both casual and professional needs with their versatile design. Promotional bags serve as an excellent branding tool, customized to enhance corporate identity. </p>
                <p>Wine bottle bags offer an elegant and sustainable way to carry and present wine. Additionally, customized bags are tailored to meet specific design, size, and branding requirements, ensuring a perfect fit for every need. Each bag is crafted from high-quality natural materials, promoting sustainability without compromising on style or durability.</p>
            </div>
            <div className='w-full sm:w-3/4 lg:w-1/2 flex justify-center items-center'>
                <img src="/images/bags.jpg" alt="image" className='w-1/2 rounded-lg' />
            </div>
        </section>
    </>
}

export default AboutOurProducts;