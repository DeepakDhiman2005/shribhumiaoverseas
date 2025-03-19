import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MyModal from "./MyModal";
import { Input, Textarea } from "@material-tailwind/react";
import MyButton from "../buttons/MyButton";
import { useEffect } from "react";

const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    name: yup.string().required('Name is required'),
    code: yup.string().required('Product code is required'),
    mobile: yup.string().required('Mobile number is required'),
    message: yup.string().required("Message is required"),
    address: yup.string().required("Address is required"),
});

const QuoteModal = ({
    isOpen = false,
    productCode = '',
    setIsOpen,
}: {
    isOpen: boolean,
    productCode?: string,
    setIsOpen: (value: boolean) => void,
}) => {
    const handleOpen = () => setIsOpen(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            message: "",
            email: "",
            mobile: '',
            code: '',
            address: '',
            name: ''
        }
    });

    useEffect(() => {
        if (productCode) {
            setValue('code', productCode);
        }
    }, [productCode]);

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
        // handleOpen();
    };

    return (
        <MyModal isOpen={isOpen} setIsOpen={handleOpen}>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full text-black px-8 pb-8 flex flex-col justify-start items-start gap-y-4">
                <h2 className="font-semibold text-[18px]">Get quote for this product</h2>
                <div className="flex flex-col justify-start items-start w-full gap-y-4">
                    <div className="w-full">
                        <Input
                            crossOrigin="anonymous"
                            {...register("code")}
                            label="Product Code"
                            color="black"
                            className="!text-black placeholder-shown:!border-black focus:!border-t-transparent !font-medium"
                            labelProps={{ className: '!font-medium' }}
                            disabled
                        />
                        {errors.code && <p className="text-red-500 text-sm mt-1">{errors.code?.message}</p>}
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4">
                        <div className="w-full">
                            <Input
                                crossOrigin="anonymous"
                                {...register("name")}
                                label="Full Name"
                                color="black"
                                className="!text-black placeholder-shown:!border-black focus:!border-t-transparent !font-medium"
                                labelProps={{ className: '!font-medium' }}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div className="w-full">
                            <Input
                                crossOrigin="anonymous"
                                {...register("address")}
                                label="Address"
                                color="black"
                                className="!text-black placeholder-shown:!border-black focus:!border-t-transparent !font-medium"
                                labelProps={{ className: '!font-medium' }}
                            />
                            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4">
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
                            <Input
                                crossOrigin="anonymous"
                                {...register("mobile")}
                                label="Mobile No."
                                type="number"
                                color="black"
                                className="!text-black placeholder-shown:!border-black focus:!border-t-transparent !font-medium"
                                labelProps={{ className: '!font-medium' }}
                            />
                            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
                        </div>
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
