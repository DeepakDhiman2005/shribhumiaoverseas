import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MyModal from "./MyModal";
import { Input, Textarea } from "@material-tailwind/react";
import MyButton from "../buttons/MyButton";

const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    message: yup.string().required("Message is required")
});

const QuoteModal = ({
    isOpen = false,
    setIsOpen,
}: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
}) => {
    const handleOpen = () => setIsOpen(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            message: "",
            email: ""
        }
    });

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
        // handleOpen();
    };

    return (
        <MyModal isOpen={isOpen} setIsOpen={handleOpen}>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full text-black px-8 pb-10 flex flex-col justify-start items-start gap-y-6">
                <h2 className="font-semibold text-[18px]">Get quote for this product</h2>
                <div className="flex flex-col justify-start items-start w-full gap-y-6">
                    <div className="w-full">
                        <Input
                            crossOrigin="anonymous"
                            {...register("email")}
                            label="Email Id"
                            color="black"
                            className="!text-black placeholder-shown:!border-black focus:!border-t-transparent !font-medium"
                            labelProps={{ className: '!font-medium' }}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="w-full">
                        <Textarea
                            {...register("message")}
                            color="black"
                            className="placeholder-shown:!border-t-black focus:!border-t-transparent !border-t-transparent !font-medium"
                            labelProps={{ className: 'peer-placeholder-shown:before:!border-t-transparent peer-placeholder-shown:after:!border-t-transparent !font-medium' }}
                            label="Add your requirements"
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>
                    <div className="grid grid-cols-2 w-full justify-center items-center gap-x-4">
                        <MyButton
                            type="button"
                            className="bg-gray-200 text-gray-900 border border-solid border-gray-900"
                            onClick={handleOpen}
                        >Cancel</MyButton>
                        <MyButton
                            type="submit"
                            className="border border-solid border-green-700 bg-green-700"
                        >Submit</MyButton>
                    </div>
                </div>
            </form>
        </MyModal>
    );
};

export default QuoteModal;
