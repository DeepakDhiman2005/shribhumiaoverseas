import { useMemo } from "react";

const ContactMessage = ({
    placeholder = "",
    color = "gray",
}: {
    placeholder?: string,
    color?: 'gray' | 'white',
}) => {
    const bgColor = useMemo(() => (color === 'white' ? 'bg-white': 'bg-gray-300'), [color]);
    return <>
        <textarea
            placeholder={placeholder}
            className={`rounded-md placeholder:text-gray-800 py-2 px-4 placeholder:text-[14px] h-[100px] outline-none text-black w-full ${bgColor}`}
        />
    </>
}

export default ContactMessage;