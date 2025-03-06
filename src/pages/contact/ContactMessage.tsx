const ContactMessage = ({
    placeholder = "",
}: {
    placeholder?: string,
}) => {
    return <>
        <textarea
            placeholder={placeholder}
            className="rounded-md bg-white placeholder:text-gray-800 py-2 px-4 placeholder:text-[14px] h-[100px] outline-none text-black w-full"
        />
    </>
}

export default ContactMessage;