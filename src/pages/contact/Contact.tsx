import React from 'react';
// icons
import { FaUser } from "react-icons/fa6";
import { FaBuilding, FaDirections, FaMapMarkedAlt } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import MyButton from "../../components/buttons/MyButton";
import { useMediaQuery } from "react-responsive";
import ContactInput from './ContactInput';
import ContactMessage from './ContactMessage';
import { IoCall } from 'react-icons/io5';

const Contact = () => {
    const isMobile = useMediaQuery({ maxWidth: 720 });
    const IconBox = ({
        children
    }: {
        children: React.ReactNode,
    }) => {
        return <>
            <div className='bg-green-700 rounded-sm w-8 h-8 flex justify-center items-center text-white'>
                {children}
            </div>
        </>
    }

    const details = [
        {
            title: 'Contact Person',
            icon: <IconBox><FaUser size={14} /></IconBox>,
            content: 'Mr Harish Mehta',
        },
        {
            title: 'Registered Office',
            icon: <IconBox><FaMapMarkedAlt size={14} /></IconBox>,
            showDirection: false,
            direction: 'https://www.google.co.in/maps/dir//28.67666780,77.37120260',
            // content: 'A 112/3 Vrindavan Garden Near Gurudwara Sahibabad Ghaziabad-201005 Regd.',
            content: 'A-112/3, Janakpuri, Vrindavan Garden Near Raj bagh Metro Station',
        },
        // {
        //     title: 'Kolkata Office',
        //     icon: <MdLocationOn size={20} />,
        //     showDirection: false,
        //     direction: 'https://www.google.co.in/maps/dir//28.67666780,77.37120260',
        //     // content: ' L-39 B Lajpat Nagar, Sahibabad Ghaziabad,',
        //     content: '616 A, Green Park, Jessore Road, Kolkata WB 700055',
        // },
        {
            title: 'Kolkata Office',
            icon: <IconBox><FaMapMarkedAlt size={14} /></IconBox>,
            showDirection: true,
            direction: 'https://maps.app.goo.gl/rGS76GtVKNZixga67',
            content: '616 A, Green Park, Jessore Road, Kolkata WB-700055',
        },
        {
            title: 'FACTORY : Village',
            icon: <IconBox><FaMapMarkedAlt size={14} /></IconBox>,
            showDirection: false,
            direction: 'https://maps.app.goo.gl/rGS76GtVKNZixga67',
            content: 'Golabari, P.o : Golabari Bazar, P.S :- Shasan, North 24 Paragana WB 743423',
        },
        {
            title: 'Contact Us',
            icon: <IconBox><MdCall size={14} /></IconBox>,
            content: '+91 9891396603, +91 7678698790',
        }
    ]

    const Heading = ({ children }: { children: React.ReactNode }) => {
        return <h2 className="font-semibold text-[28px]">{children}</h2>
    }

    return <>
        <main className="w-full flex flex-col justify-start items-start gap-y-5">
            <img
                src={
                    isMobile ? "/images/banners/contact-us.jpg" : "/images/banners/contact.png"
                }
                alt="image"
                className="w-full h-auto"
            />
            <div className="w-full py-8 px-4 sm:px-12 flex gap-x-12 justify-start flex-col gap-y-12 md:flex-row items-start">
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-y-6">
                    <Heading>Get In Touch With Us</Heading>
                    {
                        details.map((item, index) => (
                            <div key={index} className="flex justify-start w-full items-start flex-col gap-y-2">
                                <div className="flex justify-start flex-col sm:flex-row gap-y-2 sm:justify-between w-full items-start sm:items-center">
                                    <div className="flex justify-start items-center gap-x-2">
                                        {item.icon}
                                        <span className='font-medium'>{item.title}: <span className='font-normal'>{item.content}</span></span>
                                    </div>
                                    {
                                        item.showDirection ? <>
                                            <div className="flex justify-start items-center gap-x-2">
                                                <span className="text-blue-600"><FaDirections size={18} /></span>
                                                <a href={item.direction} className="underline text-blue-700 cursor-pointer" target="_blank">Get Direction</a>
                                            </div>
                                        </> : null
                                    }
                                </div>
                                {/* <p>{item.content}</p> */}
                            </div>
                        ))
                    }
                </div>
                <div className="w-full md:w-1/2 flex justify-start flex-col items-start gap-y-6">
                    <div className="flex flex-col bg-green-700 rounded-lg p-4 sm:p-8 justify-start items-start gap-y-4 w-full">
                        <div className='grid grid-cols-2 w-full gap-x-4'>
                            <ContactInput
                                name='name'
                                placeholder='Full Name'
                                icon={<FaUser size={15} />}
                                color='white'
                            />
                            <ContactInput
                                name='mobile'
                                placeholder='Phone Number'
                                icon={<IoCall size={16} />}
                                color='white'
                            />
                        </div>
                        <div className='grid grid-cols-2 w-full gap-x-4'>
                            <ContactInput
                                name='email'
                                placeholder='Email'
                                icon={<MdEmail size={16} />}
                                color='white'
                            />
                            <ContactInput
                                name='company' 
                                icon={<FaBuilding size={16} />}
                                placeholder='Company Name'
                                color='white'
                            />
                        </div>
                        <ContactInput
                            name='address' placeholder='Address'
                            icon={<FaMapMarkedAlt size={16} />}
                            color='white'
                        />
                        <ContactMessage
                            placeholder='Message'
                            color='white'
                        />
                        <div className="flex justify-start items-center">
                            <MyButton className="bg-white text-green-700 hover:bg-green-900 transition-all duration-700 hover:text-white">Submit Now</MyButton>
                        </div>
                    </div>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d112013.97187311274!2d77.28881919467095!3d28.676582953764356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d28.676667799999997!2d77.37120259999999!5e0!3m2!1sen!2sin!4v1740817977798!5m2!1sen!2sin"
                width="100%"
                height="300px"
                className='bg-gray-400'
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </main>
    </>
}

export default Contact;