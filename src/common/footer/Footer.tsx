import MyButton from "../../components/buttons/MyButton";
import FooterDiv from "./FooterDiv";
import FooterLink from "./FooterLink";

// icons
import { FaFacebookF, FaInstagram, FaUser } from "react-icons/fa";
import SocialMediaButton from "../../components/buttons/SocialMediaButton";
import { RiTwitterXLine } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Suspense } from "react";
// import { Link } from "react-router-dom";

const Footer = () => {
    const accountLinks: Array<{ name?: string, link?: string }> = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About us',
            link: '/about',
        },
        {
            name: 'Blogs',
            link: '/blogs'
        },
        {
            name: 'Gallery',
            link: '/gallery',
        },
        {
            name: 'Contact Us',
            link: '/contact'
        }
    ]

    const informationLinks: Array<{ name?: string, link?: string }> = [
        {
            name: 'Cotton Bags',
            link: '/products?category=cotton-bags'
        },
        {
            name: 'Jute Bags',
            link: '/products?category=jute-bags'
        },
        {
            name: 'Juco Bags',
            link: '/products?category=juco-bags'
        },
        {
            name: 'Canvas Bags',
            link: '/products?category=canvas-bags'
        },
        // {
        //     name: 'View All',
        //     link: '/products?category=shopping-bags'
        // },
    ]

    return <>
        <footer className="text-white bg-[#0e0e0e]">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 justify-center items-start gap-y-6 bg-green-800 text-white py-8 px-8 sm:px-10">
                <div className="flex flex-col justify-start items-start gap-y-2">
                    <h2 className="font-medium text-[18px]">Follow Ups</h2>
                    <p className="text-[15px]">We post regularly interesting application photos and articles regarding drilling & bevelling.</p>
                    <div className="flex justify-center items-center gap-x-2">
                        <SocialMediaButton
                            title="Facebook"
                            icon={<FaFacebookF size={16} />}
                            className="hover:bg-blue-700"
                        />
                        <SocialMediaButton
                            title="Instagram"
                            icon={<FaInstagram size={18} />}
                            className="hover:bg-purple-900"
                        />
                        <SocialMediaButton
                            title="Twitter"
                            icon={<RiTwitterXLine size={18} />}
                            className="hover:bg-blue-400"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-y-2">
                    <h2 className="font-medium text-[18px]">Sign Up To Newsletter</h2>
                    <p className="text-[15px]">Join 500+ subscribers and get regular discount coupons and offer updates.</p>
                    <div className="w-full sm:w-3/4 flex justify-center overflow-hidden rounded-sm">
                        <input type="text" className="outline-none px-2 h-full py-1.5 w-full text-black placeholder:text-gray-600" placeholder="Enter Your Email" />
                        <div>
                            <MyButton
                                className="rounded-none h-full py-1.5"
                            >Subscribe</MyButton>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-y-2">
                    <h2 className="font-medium text-[18px]">Our Factory Location</h2>
                    <Suspense fallback={<h2>Loader...</h2>}>
                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d112013.97187311274!2d77.28881919467095!3d28.676582953764356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d28.676667799999997!2d77.37120259999999!5e0!3m2!1sen!2sin!4v1740817977798!5m2!1sen!2sin"
                            width="100%"
                            height="100px"
                            style={{ border: 0, borderRadius: '6px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe> */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d8238.954879724293!2d88.56582636758233!3d22.703995564724696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGolabari%2C%20P.o%20%3A%20Golabari%20Bazar%2C%20P.S%20%3A-%20Shasan%2C%20North%2024%20Paragana%20WB%20743423!5e0!3m2!1sen!2sin!4v1742296978423!5m2!1sen!2sin"
                            width="100%"
                            height="100px"
                            style={{ border: 0, borderRadius: '6px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Suspense>
                </div>
            </div>
            <div className="w-full flex justify-start items-start flex-col xl:flex-row text-white  py-8 px-8 sm:px-10 gap-x-10 gap-y-8">
                <FooterDiv className="gap-y-3" title="About Shri Bhumia Overseas" parentClass="w-full">
                    {/* <p className="text-[14px] font-medium">Shri Bhumia Overseas is a manufacturer supplier and exporter of bags is a renowned jute and cotton, Recycle Cotton, Juco, and Canvas bags manufacturer based in Ghaziabad Uttar Pradesh with 5000 Sq Ft factory in Kolkata West Bengal.</p> */}
                    <p className="text-[14px] font-medium">Shri Bhumia Overseas is a manufacturer supplier and exporter of bags is a renowned jute and cotton, Recycle Cotton, Juco, and Canvas bags manufacturer based in Ghaziabad Uttar Pradesh with 15,000 Sq Ft factory in Kolkata West Bengal. With over 21 years of experience in the industry, we have become a trusted name for delivering high-quality eco-friendly bags.</p>
                    {/* <div className="flex justify-center items-center gap-x-2">
                        <SocialMediaButton
                            title="Facebook"
                            icon={<FaFacebookF size={16} />}
                            className="hover:bg-blue-700"
                        />
                        <SocialMediaButton
                            title="Instagram"
                            icon={<FaInstagram size={18} />}
                            className="hover:bg-purple-900"
                        />
                        <SocialMediaButton
                            title="Twitter"
                            icon={<RiTwitterXLine size={18} />}
                            className="hover:bg-blue-400"
                        />
                    </div> */}
                </FooterDiv>

                <FooterDiv title="Useful Links" className="gap-y-2" parentClass="w-full xl:w-1/2">
                    {
                        accountLinks.map((item, index) => (
                            <FooterLink key={index} {...item} />
                        ))
                    }
                </FooterDiv>

                <div className="flex justify-end items-center w-full xl:w-1/2">
                    <FooterDiv title="Our Products" className="gap-y-2" parentClass="w-full md:w-1/2 xl:w-full">
                        {
                            informationLinks.map((item, index) => (
                                <FooterLink key={index} {...item} />
                            ))
                        }
                    </FooterDiv>
                </div>

                <div className="flex justify-start items-center w-full">
                    <FooterDiv title="Contact Us" className="gap-y-2" parentClass="w-full md:w-1/2 xl:w-full">
                        <div className="flex flex-col justify-start items-start gap-y-2 w-full ">
                            <div className="flex justify-start items-center w-full">
                                <div className="w-[8%]">
                                    <FaUser size={16} className="text-green-700" />
                                </div>
                                <div className="flex justify-start w-[88%] flex-col text-[14px] items-start">
                                    <p className="w-full">Mr Harish Mehta</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center w-full">
                                <div className="w-[8%]">
                                    <IoCall size={16} className="text-green-700" />
                                </div>
                                <div className="flex w-[88%] justify-start flex-col text-[14px] items-start">
                                    <p>+91-9891396603,</p>
                                    <p>+91-7678698790</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center w-full">
                                <div className="w-[8%]">
                                    <FaMapMarkedAlt size={16} className="text-green-700" />
                                </div>
                                <div className="flex justify-start w-[88%] flex-col text-[12px] items-start">
                                    <p className="w-full">Registered Office: A 112/3, Janakpuri, Vrindavan Garden Near Raj bagh Metro Station</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center w-full">
                                <div className="w-[8%]">
                                    <FaMapMarkedAlt size={16} className="text-green-700" />
                                </div>
                                <div className="flex justify-start w-[88%] flex-col text-[12px] items-start">
                                    <p className="w-full">Factory Location: Golabari, P.o : Golabari Bazar, P.S :- Shasan, North 24 Paragana WB 743423</p>
                                </div>
                            </div>
                        </div>
                    </FooterDiv>
                </div>

                {/* <FooterDiv title="New Sletters" className="gap-y-3" parentClass="w-full">
                    <Input
                        crossOrigin={"anonymous"}
                        label="Username"
                        color="white"
                        className="!text-white placeholder-shown:!border-white focus:!border-t-transparent"
                    />
                    <Input
                        crossOrigin={"anonymous"}
                        label="Email"
                        color="white"
                        className="!text-white placeholder-shown:!border-white focus:!border-t-transparent"
                    />
                    <MyButton className="bg-green-700 font-normal rounded-sm">Subscribe!</MyButton>
                </FooterDiv> */}
            </div>
            <div className="border-t-2 border-t-white border-solid flex justify-between items-center flex-col gap-y-8 lg:flex-row py-2 px-16">
                {/* <div className="flex justify-center items-center gap-x-2">
                    <SocialMediaButton
                        title="Facebook"
                        icon={<FaFacebookF size={16} />}
                        className="hover:bg-blue-700"
                    />
                    <SocialMediaButton
                        title="Instagram"
                        icon={<FaInstagram size={18} />}
                        className="hover:bg-purple-900"
                    />
                    <SocialMediaButton
                        title="Twitter"
                        icon={<RiTwitterXLine size={18} />}
                        className="hover:bg-blue-400"
                    />
                </div> */}

                <div className="text-[14px] font-light w-full flex justify-between items-center flex-col-reverse md:flex-row-reverse text-center">
                    <p className="w-full md:w-auto">
                        © 2025 Designed & Developed By <a href="https://www.jaikviktechnology.com/" target="_blank" className="text-green-500 hover:underline hover:underline-offset-2">Jaikvik Technology India Pvt Ltd</a>.
                    </p>
                    <p className="w-full md:w-auto">
                        All Rights Reserved By <a href="" target="_blank" className="text-green-500 hover:underline hover:underline-offset-2">Shri Bhumia Overseas</a>
                    </p>
                </div>

                {/* <img
                    src="/logo.png"
                    className="w-12 h-12 className='w-full rounded-full"
                /> */}
            </div>
        </footer>
    </>
}

export default Footer;