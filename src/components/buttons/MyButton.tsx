
import { Button } from "@material-tailwind/react";
import { Tooltip } from "antd";
import { TooltipPlacement } from "antd/es/tooltip";

export interface MyButtonInterface {
    type?: 'button' | 'submit' | 'reset',
    className?: string,
    children: React.ReactNode,
    placement?: TooltipPlacement,
    title?: string | null,
    disabled?: boolean,
    onClick?: () => void,
}
const MyButton = ({
    type = "button",
    className = "",
    title = null,
    placement = "top",
    disabled = false,
    children,
    onClick,
}: MyButtonInterface) => {
    return <>
        <Tooltip title={title} placement={placement} className="outline-none">
            <Button disabled={disabled} type={type} onClick={onClick} className={`shadow-none outline-none hover:shadow-none normal-case rounded-md font-medium text-[15px] py-2 px-4 ${className}`}>{children}</Button>
        </Tooltip>
    </>
}

export default MyButton;