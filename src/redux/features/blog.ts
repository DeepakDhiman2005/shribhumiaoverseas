import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { blogInterface } from "../../interfaces/blogInterface";
import { AxiosError } from "axios";
import useAxios from "../../hooks/useAxios";
import { AppDispatch } from "../store";
import handleError from "../../constants/handleError";
import { toast } from "react-toastify";

const axios = useAxios();

interface BlogReduxInterface {
    blogs: Array<blogInterface>,
    blogDetails: blogInterface | null,
}

const initialState: BlogReduxInterface = {
    blogs: [],
    blogDetails: null,
}

const blogSlice = createSlice({
    initialState,
    name: 'blogs',
    reducers: {
        setBlog: (state, { payload }: PayloadAction<Partial<BlogReduxInterface>>) => {
            return { ...state, ...payload };
        }
    }
});

export const { setBlog } = blogSlice.actions;
export default blogSlice.reducer;

// function
export const getAllBlogsRedux = (callback?: (value: boolean) => void) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get('/blogs/all-blogs');
            if (response.status === 200) {
                dispatch(setBlog({ blogs: response.data?.blogs }));
                callback?.(true);
            }
        } catch (error: unknown) {

        }
    }
}

export const getBlogDetailsRedux = (id: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get(`/blogs/blog-details/${id}`);
            if (response.status === 200) {
                dispatch(setBlog({ blogDetails: response.data?.blog }));
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                handleError(error);
            }
        }
    }
}

export const uploadBlogRedux = (data: FormData, callback: (value: boolean) => void) => {
    return async () => {
        try {
            const response = await axios.postForm('/blogs/upload', data);
            if (response.status === 200) {
                toast.success('blog upload successfully!')
                callback(true);
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                handleError(error);
            }
        }
    }
}

export const getBlogImageRedux = (_id: string, callback: (value: Blob) => void) => {
    return async () => {
        try {
            const response = await axios.get(`/blogs/get-blog-image/${_id}`, {
                responseType: 'blob',
            });
            if (response.status === 200) {
                callback(response.data);
            }
        } catch (error: unknown) {
            
        }
    }
}

export const updateBlogRedux = (data: FormData, callback: (value: boolean) => void) => {
    return async () => {
        try {
            const response = await axios.putForm(`/blogs/update/${data.get('_id')}`, data);
            if (response.status === 200) {
                toast.success('Blog updated successfully!')
                callback(true);
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                handleError(error);
            }
        }
    }
}

export const deleteBlogRedux = (id: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.delete(`/blogs/delete/${id}`);
            if (response.status === 200) {
                toast.success('Blog deleted successfully!');
                dispatch(getAllBlogsRedux());
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                handleError(error);
            }
        }
    }
}
