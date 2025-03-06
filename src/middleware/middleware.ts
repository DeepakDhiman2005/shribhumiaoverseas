interface LocationInterface {
    pathname: string;   // The URL path (e.g., "/products")
    search: string;     // The query string (e.g., "?category=electronics&page=2")
    hash: string;       // The fragment/hash (e.g., "#section1")
    state: any;         // State passed with navigation (if any)
    key: string;        // Unique key for location history entry
}

const middleware = (location: LocationInterface): boolean => {
    console.log(location);
    return false;
}

export default middleware;