import { Navigate, Outlet, useLocation } from "react-router-dom";
import middleware from "./middleware";

const MiddlewareProvider = ({
    back=""
}: {
    back?: string,
}) => {
    const location = useLocation();

    const isMiddleware = middleware(location);
    if(isMiddleware){
        return <Outlet />
    }

    return <Navigate to={back} />
}

export default MiddlewareProvider;