import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AppDispatch } from "../store";
import handleError from "../../constants/handleError";
import { AxiosError } from "axios";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import { AppDispatch } from "../store";
import { CategoryInterface, SubCategoryInterface } from "../../interfaces/categoryInterface";

const axios = useAxios();

export interface CategoryReduxInterface {
    categories: Array<CategoryInterface>,
    subCategories: Array<SubCategoryInterface>,
}

const initialState: CategoryReduxInterface = {
    categories: [],
    subCategories: [],
}

const categorySlice = createSlice({
    initialState,
    name: 'category',
    reducers: {
        setCategory: (state, { payload }: PayloadAction<Partial<CategoryReduxInterface>>) => {
            return { ...state, ...payload };
        }
    }
})

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;

// function
// main category
export const getCategoriesRedux = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get('/category/get-categories');
            if(response.status === 200){
                dispatch(setCategory({ categories: response.data?.categories }));
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                handleError(error);
            }
        }
    }
}

export const getCategoryImageRedux = (id: string, callback: (blob: Blob) => void) => {
    return async () => {
        try {
            const response = await axios.get(`/category/get-category-image/${id}`, {
                responseType: 'blob',
            });
            if(response.status === 200){
                callback(response.data);
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                // handleError(error);
            }
        }
    }
}

export const addCategoryRedux = (data: FormData, callback: (value: boolean) => void) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.postForm('/category/add-category', data);
            if (response.status === 200) {
                toast.success('Category uploaded successfully!');
                callback(true);
                dispatch(getCategoriesRedux());
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                handleError(error);
            }
        }
    }
}

export const editCategoryRedux = (data: FormData, callback: (value: boolean) => void) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.putForm(`/category/edit-category/${data.get('_id')}`, data);
            if (response.status === 200) {
                // toast.success('Category uploaded successfully!');
                toast.success(response.data?.message || 'Category updated successfully')
                callback(true);
                dispatch(getCategoriesRedux());
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                handleError(error);
            }
        }
    }
}

export const deleteCategoryRedux = (id: string, callback: (value: boolean) => void) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.delete(`/category/delete-category/${id}`);
            if (response.status === 200) {
                // toast.success('Category uploaded successfully!');
                toast.success(response.data?.message || 'Category deleted successfully');
                callback(true);
                dispatch(getCategoriesRedux());
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                handleError(error);
            }
        }
    }
}

// sub category
export const addSubCategoryRedux = (data: FormData, callback: (value: boolean) => void) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.postForm('/subcategory/add-subcategory', data);
            if(response.status === 200){
                toast.success('Sub Category uploaded successfully!');
                callback(true);
                dispatch(getSubCategoriesRedux());
            }
        } catch (error: unknown) {
            if(error instanceof AxiosError){
                handleError(error);
            }
        }
    }
}

export const getSubCategoryImageRedux = (id: string, callback: (blob: Blob) => void) => {
    return async () => {
        try {
            const response = await axios.get(`/subcategory/get-sub-category-image/${id}`, {
                responseType: 'blob',
            });
            if(response.status === 200){
                callback(response.data);
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                // handleError(error);
            }
        }
    }
}

export const getSubCategoriesRedux = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get('/subcategory/get-sub-categories');
            if(response.status === 200){
                dispatch(setCategory({ subCategories: response.data?.subCategories }));
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                handleError(error);
            }
        }
    }
}

export const editSubCategoryRedux = (data: FormData, callback: (value: boolean) => void) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.putForm(`/subcategory/edit-sub-category/${data.get('_id')}`, data);
            if (response.status === 200) {
                // toast.success('Category uploaded successfully!');
                toast.success(response.data?.message || 'Sub Category updated successfully')
                callback(true);
                dispatch(getSubCategoriesRedux());
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                handleError(error);
            }
        }
    }
}
