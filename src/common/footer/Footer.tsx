import { Input } from "@material-tailwind/react";
import MyButton from "../../components/buttons/MyButton";
import FooterDiv from "./FooterDiv";
import FooterLink from "./FooterLink";

// icons
import { FaFacebookF, FaInstagram, FaUser } from "react-icons/fa";
import SocialMediaButton from "../../components/buttons/SocialMediaButton";
import { RiTwitterXLine } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";
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
        // {
        //     name: 'Gallery',
        //     link: '/gallery',
        // },
        {
            name: 'Contact Us',
            link: '/contact us'
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
        {
            name: 'Handicrafts',
            link: '/products?category=handicrafts'
        },
        // {
        //     name: 'View All',
        //     link: '/products?category=shopping-bags'
        // },
    ]

    return <>
        <footer className="text-white bg-[#0e0e0e]">
            <div className="w-full flex justify-start items-start flex-col xl:flex-row text-white  py-8 px-8 sm:px-10 gap-x-10 gap-y-14">
                <FooterDiv className="gap-y-3" title="About Shri Bhumia Overseas" parentClass="w-full">
                    {/* <p className="text-[14px] font-medium">Shri Bhumia Overseas is a manufacturer supplier and exporter of bags is a renowned jute and cotton, Recycle Cotton, Juco, and Canvas bags manufacturer based in Ghaziabad Uttar Pradesh with 5000 Sq Ft factory in Kolkata West Bengal.</p> */}
                    <p className="text-[14px] font-medium">Shri Bhumia Overseas is a manufacturer supplier and exporter...</p>
                    {/* <Link to={"/about"} className="w-auto h-auto">
                        <MyButton className="bg-green-700 font-normal rounded-sm">Read More...</MyButton>
                    </Link> */}
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
                </FooterDiv>

                <FooterDiv title="Useful Links" className="gap-y-2" parentClass="w-full">
                    {
                        accountLinks.map((item, index) => (
                            <FooterLink key={index} {...item} />
                        ))
                    }
                </FooterDiv>

                <div className="flex justify-end items-center w-full">
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
                            <div className="flex justify-start items-center gap-x-2 w-full">
                                <div className="w-[12%]">
                                    <FaUser size={16} className="text-green-700" />
                                </div>
                                <div className="flex justify-start w-[88%] flex-col text-[14px] items-start">
                                    <p className="w-full">Mr Harish Mehta</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center gap-x-2 w-full">
                                <div className="w-[12%]">
                                    <IoCall size={16} className="text-green-700" />
                                </div>
                                <div className="flex w-[88%] justify-start flex-col text-[14px] items-start">
                                    <p>+91-9891396603,</p>
                                    <p>+91-7678698790</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center gap-x-2 w-full">
                                <div className="w-[12%]">
                                    <FaMapMarkedAlt size={16} className="text-green-700" />
                                </div>
                                <div className="flex justify-start w-[88%] flex-col text-[12px] items-start">
                                    <p className="w-full">A 112/3, Janakpuri, Vrindavan Garden Near Raj bagh Metro Station</p>
                                </div>
                            </div>
                        </div>
                    </FooterDiv>
                </div>

                <FooterDiv title="New Sletters" className="gap-y-3" parentClass="w-full">
                    {/* <p className="text-[14px]">Subscribe to our newsletter and keep up with news, promotions, sales and discounts!</p> */}
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
                </FooterDiv>
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