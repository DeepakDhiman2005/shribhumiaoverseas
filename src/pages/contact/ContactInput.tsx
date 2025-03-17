import { useMemo } from "react";

const ContactInput = ({
    placeholder = "",
    name = "",
    color = "gray",
    icon,
}: {
    placeholder?: string,
    name: string,
    color?: 'gray' | 'white',
    icon?: React.ReactNode,
}) => {
    const bgColor = useMemo(() => (color === 'white' ? "bg-white": 'bg-gray-300'), [color]);
    return <>
        <div className={`w-full flex justify-start items-center gap-x-3 box-border rounded-md py-2 px-4 ${bgColor}`}>
            <div className="w-[20px] flex justify-center items-center">
                {icon}
            </div>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                className=" placeholder:text-gray-800 w-full outline-none placeholder:text-[14px] p-0 h-full bg-transparent text-black"
            />
        </div>
    </>
}

export default ContactInput;