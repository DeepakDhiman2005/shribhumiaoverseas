import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface ErrorResponse {
    error?: string;
    message?: string;
    [key: string]: any; // Allows additional properties
}

const handleError = (error: AxiosError<ErrorResponse>) => {
    const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "An unexpected error occurred";

    toast.error(errorMessage);
};

export default handleError;
