import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from '../store';
import useAxios from "../../hooks/useAxios";

const axios = useAxios();

export interface GalleryInterface {
    images?: Array<string> | null,
    videos?: Array<string> | null,
}

const initialState: GalleryInterface = {
    images: [],
    videos: [],
}

const gallerySlice = createSlice({
    initialState,
    name: 'gallery',
    reducers: {
        setGallery: (state, { payload }: PayloadAction<Partial<GalleryInterface>>) => {
            return { ...state, ...payload };
        }
    }
})

export const { setGallery } = gallerySlice.actions;
export default gallerySlice.reducer;

// functions
export const getGalleryRedux = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(setGallery({ images: [], videos: [] }));
            const response = await axios.get("/gallery/all");
            if (response.status === 200) {
                const data = response.data;
                dispatch(setGallery(data));
            }
        } catch (error) {
            console.log('Get Gallery in Redux', error);
        }
    }
}

export const getGalleryImage = (imageName: string, callback: (imageBlob: Blob) => void) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(setGallery({ images: [] }));
            const response = await axios.get(`/gallery/image/${imageName}`, {
                responseType: 'blob',
            });

            if(response.status === 200){
                callback(response.data);
            }
        } catch (error) {
            console.log("Get Gallery Image in Redux", error);
        }
    }
}

export const getGalleryVideo = (videoName: string, callback: (videoBlob: Blob) => void) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(setGallery({ videos: [] }));
            const response = await axios.get(`/gallery/video/${videoName}`, {
                responseType: 'blob',
            });

            if(response.status === 200){
                callback(response.data);
            }
        } catch (error) {
            console.log("Get Gallery Image in Redux", error);
        }
    }
}