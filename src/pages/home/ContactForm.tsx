import { Input, Textarea } from "@material-tailwind/react";
import MyButton from "../../components/buttons/MyButton";
// import MyInputField from "../../components/fields/MyInputField";
// import "../../styles/custom-form-field.scss";

const ContactForm = () => {
    return <>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-8 py-2 px-4 sm:px-8 bg-gray-100">
            <form className="py-2 px-12 w-full bg-gray-200 rounded-lg flex flex-col justify-center items-center gap-y-2">
                <h2 className="font-semibold text-[35px]">Contact Us</h2>
                <div className="flex flex-col justify-start items-start gap-y-4 w-full">
                    <Input
                        crossOrigin="anonymous"
                        label="Full Name"
                        color="black"
                        className="!text-black placeholder-shown:!border-black focus:!border-t-transparent"
                    />
                    <Input
                        crossOrigin="anonymous"
                        label="Email ID"
                        color="black"
                        className="!text-black placeholder-shown:!border-black focus:!border-t-transparent"
                    />
                    <Textarea
                        label="Message"
                        placeholder=" "
                        // color="black"
                        className="!text-black placeholder-shown:!border-black focus:!border-t-transparent !border-t-transparent"
                        labelProps={{
                            className: '!text-black'
                        }}
                    />
                    <div className="flex justify-start items-center">
                        <MyButton className="bg-green-700">Contact Now</MyButton>
                    </div>
                </div>
            </form>
            <div className="rounded-lg w-full flex justify-center items-center h-full overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d112013.97187311274!2d77.28881919467095!3d28.676582953764356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d28.676667799999997!2d77.37120259999999!5e0!3m2!1sen!2sin!4v1740817977798!5m2!1sen!2sin"
                    width="100%"
                    height="80%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </div>
    </>
}

export default ContactForm;