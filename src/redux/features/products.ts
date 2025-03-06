import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductRow } from "../../admin/products/columns";
import { AppDispatch } from "../store"; // Import dispatch type
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";

export interface ProductsInterface {
    page: number,
    limit: number,
    totalPages: number,
    totalProduct: number,
    products: ProductRow[],
}

// Define Redux state interface
interface ReduxProductsState {
    // products: ProductRow[],
    products: ProductsInterface,
    product: ProductRow | null,
}

// Initial state
const initialState: ReduxProductsState = {
    // products: [],
    products: {
        page: 1,
        limit: 10,
        totalPages: 0,
        totalProduct: 0,
        products: [],
    },
    product: null
};

const axios = useAxios();

// Create Redux slice
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, { payload }: PayloadAction<Partial<ReduxProductsState>>) => {
            return { ...state, ...payload };
        }
    },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;

// Async function to fetch products
export const getAllProductsRedux = (callback: (value: boolean) => void) => {
    return async (dispatch: AppDispatch) => {
        try {
            const { data } = await axios.get("/products/all-products?page=1&limit=10");

            dispatch(setProducts({ products: data })); // Dispatch extracted products array
            callback(true);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            callback(false);
        }
    };
};

export const uploadProductRedux = (data: FormData, callback: (value: boolean) => void) => {
    return async () => {
        try {
            const response = await axios.postForm("/products/upload", data);
            if (response.status === 200) {
                toast.success("Product Upload Successfully!");
                callback(true);
            }
        } catch (error) {
            console.log("Upload Product Redux:", error);
        }
    }
}

export const updateProductRedux = (data: FormData, callback: (value: boolean) => void) => {
    return async () => {
        try {
            const response = await axios.postForm("/products/update", data);
            if (response.status === 200) {
                toast.success("Product Update Successfully!");
                callback(true);
            }
        } catch (error) {
            console.log("Upload Product Redux:", error);
        }
    }
}

export const getProductRedux = ({
    category = "",
    page = 1,
}: {
    category: string,
    page?: number,
}) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get(`/products/get?category=${category}&page=${page}&limit=10`);
            if (response.status === 200) {
                dispatch(setProducts({ products: response.data || [] }));
            }
        } catch (error) {
            console.log("Get Product Redux:", error);
        }
    }
}

export const getProductImageRedux = (productImage: string, callback: (imageBlob: Blob) => void) => {
    return async () => {
        try {
            const response = await axios.get(`/products/product-image/${productImage}`, {
                responseType: 'blob',
            });
            if (response.status === 200) {
                callback(response.data);
            }
        } catch (error) {
            console.log("Get Product Redux:", error);
        }
    }
}

export const getProductDetails = (id: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get(`/products/product-details/${id}`);
            if (response.status === 200) {
                dispatch(setProducts({ product: response.data?.product }));
            }
        } catch (error) {
            console.log('Get Product Details', error);
        }
    }
}

// delete
export const deleteProductRedux = (id: string, callback: (value: boolean) => void) => {
    return async () => {
        try {
            const response = await axios.delete(`/products/delete/${id}`);
            if (response.status === 200) {
                toast.success('Product Delete Successfully!');
                callback(true);
            }
        } catch (error) {
            console.log('Get Product Details', error);
        }
    }
}
