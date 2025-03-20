import handleToken from "../constants/handleToken";

interface LocationInterface {
    pathname: string;   // The URL path (e.g., "/products")
    search: string;     // The query string (e.g., "?category=electronics&page=2")
    hash: string;       // The fragment/hash (e.g., "#section1")
    state: any;         // State passed with navigation (if any)
    key: string;        // Unique key for location history entry
}

const middleware = (location: LocationInterface): boolean => {
    const token = handleToken();
    if (token) {
        if (location.pathname.startsWith('/admin')) {
            return token?.isAuthenticated ? true : false;
        } else if (location.pathname.startsWith('/auth')) {
            return !token?.isAuthenticated ? true : false;
        } else {
            return true;
        }
    } else {
        if (location.pathname.startsWith('/admin')) {
            return false;
        } else {
            return true;
        }
    }
}

export default middleware;