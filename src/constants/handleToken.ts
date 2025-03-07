import { jwtDecode } from "jwt-decode";
import { TOKEN_NAME } from "../configs/globalVariables";
import useStorage from "../hooks/useStorage";
import { authInterface } from "../interfaces/authInterface";

const handleToken = (): authInterface | null => {
    try {
        const storage = useStorage();
        const token = storage.get(TOKEN_NAME);

        if (!token) return null; // No token found

        const decoded = jwtDecode<{ exp?: number } & authInterface>(token);

        // Check if the token is expired
        if (decoded.exp && decoded.exp * 1000 < Date.now()) {
            console.warn("Token has expired");
            storage.remove(TOKEN_NAME); // Remove expired token
            return null;
        }

        return { ...decoded, token, isAuthenticated: true };
    } catch (error) {
        console.error("Error decoding token:", error);
        return null;
    }
};

export default handleToken;
