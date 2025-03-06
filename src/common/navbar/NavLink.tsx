import { useLocation } from "react-router-dom";
import "./navbar.scss";

const NavLink = ({
    text = '',
    link = '',
    className = "",
}: {
    text?: string,
    link?: string | null,
    className?: string,
}) => {
    const { pathname } = useLocation();

    return <>
        <p className={`${link && pathname === link ? 'active': "nav-link"} ${className}`}>{text}</p>
    </>
}

export default NavLink;