
import { Button } from "@material-tailwind/react";
import { Tooltip } from "antd";
import { TooltipPlacement } from "antd/es/tooltip";

export interface MyButtonInterface {
    type?: 'button' | 'submit' | 'reset',
    className?: string,
    children: React.ReactNode,
    placement?: TooltipPlacement,
    title?: string | null,
    onClick?: () => void,
}
const MyButton = ({
    type = "button",
    className = "",
    title = null,
    placement = "top",
    children,
    onClick,
}: MyButtonInterface) => {
    return <>
        <Tooltip title={title} placement={placement}>
            <Button type={type} onClick={onClick} className={`shadow-none hover:shadow-none normal-case rounded-md font-medium text-[15px] py-2 px-4 ${className}`}>{children}</Button>
        </Tooltip>
    </>
}

export default MyButton;