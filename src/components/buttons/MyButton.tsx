
import { Button } from "@material-tailwind/react";

export interface MyButtonInterface {
    type?: 'button' | 'submit' | 'reset',
    className?: string,
    children: React.ReactNode,
    onClick?: () => void,
}
const MyButton = ({
    type = "button",
    className = "",
    children,
    onClick,
}: MyButtonInterface) => {
    return <>
        <Button type={type} onClick={onClick} className={`shadow-none hover:shadow-none normal-case rounded-md font-medium text-[15px] py-2 px-4 ${className}`}>{children}</Button>
    </>
}

export default MyButton;