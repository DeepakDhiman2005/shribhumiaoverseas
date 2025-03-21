import { Suspense } from "react";
import MyButton from "../../components/buttons/MyButton";
import ContactInput from "../contact/ContactInput";
import ContactMessage from "../contact/ContactMessage";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
// import MyInputField from "../../components/fields/MyInputField";
// import "../../styles/custom-form-field.scss";

const ContactForm = () => {
    return <>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-8 py-2 px-4 sm:px-8 bg-gray-100">
            <form className="py-2 px-0 md:px-8 w-full rounded-lg flex flex-col justify-start items-start gap-y-3">
                <h2 className="font-semibold text-[25px] text-green-700 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-3/4 after:bg-green-400 after:h-[2px]">Get In Touch With Us</h2>
                <div className="flex flex-col justify-start items-start gap-y-3 w-full">
                    <ContactInput
                        placeholder="Full Name"
                        name="name"
                        icon={<FaUser size={15} />}
                    />
                    <ContactInput
                        placeholder="Email"
                        name="email"
                        icon={<MdEmail size={16} />}
                    />
                    <ContactInput
                        placeholder="Contact No."
                        name="mobile"
                        icon={<IoCall size={16} />}
                    />
                    <ContactMessage
                        placeholder="Message"
                    />
                    <div className="flex justify-start items-center">
                        <MyButton className="hover:bg-white border border-green-700 hover:border-green-900 transition-all duration-300 text-white bg-green-700 hover:text-green-700">Submit Now</MyButton>
                    </div>
                </div>
            </form>
            <div className="rounded-lg w-full flex justify-center items-center h-full overflow-hidden">
                <Suspense fallback={<h2>Loader...</h2>}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d112013.97187311274!2d77.28881919467095!3d28.676582953764356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d28.676667799999997!2d77.37120259999999!5e0!3m2!1sen!2sin!4v1740817977798!5m2!1sen!2sin"
                        width="100%"
                        height="80%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Suspense>
            </div>

        </div>
    </>
}

export default ContactForm;