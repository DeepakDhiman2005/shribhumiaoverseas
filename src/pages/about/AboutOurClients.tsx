import SubHeading from "../../components/headings/SubHeading";
import OurClientsSlider from "../home/OurClientsSlider";

const AboutOurClients = () => {
    return <>
        <section className="w-full px-4 py-0 sm:px-8">
            <div className="flex justify-center flex-col-reverse lg:flex-row gap-x-6  items-center w-full">
                <div className='flex flex-col gap-y-1 justify-start items-start w-full lg:w-1/2'>
                    <SubHeading>Our Clients</SubHeading>
                    <p>We take pride in our strong, long-standing partnerships with esteemed global brands, including PARRS PRODUCTS (New Zealand), Re-loved Apparel (Australia), Al Haddad (Malaysia), Koopman International BV (Netherlands), Dabur (India), Tree Top Trading (Colombia), and The Domensch Gonza (Uruguay), along with key partners in America, the Gulf, Russia, and across South America, including Brazil, Colombia, and Peru. Our commitment to excellence and reliability has earned us the trust of industry leaders worldwide.</p>
                </div>
                <div className='w-full sm:w-3/4 lg:w-1/2 flex justify-center items-center'>
                    <img src="/images/map2.jpg" alt="image" className='w-3/4 object-fill rounded-lg' />
                </div>
            </div>
            <div className='w-full'>
                <OurClientsSlider />
            </div>
        </section>
    </>
}

export default AboutOurClients;