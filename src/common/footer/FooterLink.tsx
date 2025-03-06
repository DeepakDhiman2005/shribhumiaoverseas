import { Link } from "react-router-dom"
import { FaRegDotCircle } from "react-icons/fa";

const FooterLink = ({
    name = "",
    link = "",
}: {
    name?: string,
    link?: string,
}) => {
    return <Link to={link as string} className="text-[14px] flex group justify-start items-center gap-x-2">
        <FaRegDotCircle size={10} />
        <span className="transition-all duration-500 group-hover:text-green-600 group-hover:translate-x-2">{name}</span>
    </Link>
}

export default FooterLink;