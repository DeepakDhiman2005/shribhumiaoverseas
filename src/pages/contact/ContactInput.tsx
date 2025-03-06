const ContactInput = ({
    placeholder = "",
}: {
    placeholder?: string,
}) => {
    return <>
        <input
            type="text" 
            placeholder={placeholder}
            className="rounded-md bg-white placeholder:text-gray-800 py-2 px-4 outline-none placeholder:text-[14px] text-black w-full"
        />
    </>
}

export default ContactInput;