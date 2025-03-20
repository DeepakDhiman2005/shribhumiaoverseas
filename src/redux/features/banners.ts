import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import bannersInterface from "../../interfaces/bannersInterface";
import { AppDispatch } from "../store";
import useAxios from "../../hooks/useAxios";

const axios = useAxios();

const initialState: bannersInterface = {
    desktop: null,
    mobile: null,
}

const bannersSlice = createSlice({
    initialState,
    name: 'banners',
    reducers: {
        setBanners: (state, { payload }: PayloadAction<Partial<bannersInterface>>) => {
            return { ...state, ...payload };
        }
    }
});

export const { setBanners } = bannersSlice.actions;
export default bannersSlice.reducer;

// functions
export const getAllBannersRedux = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get('/banners/get-banners');
            if (response.status === 200) {
                if (response.data?.desktop || response.data?.mobile) {
                    dispatch(setBanners({
                        ...response.data
                    }))
                }
            }
        } catch (error) {
            // error
        }
    }
}

export const getDesktopBannerImageRedux = ({
    filename = '',
    callback,
}: {
    filename: string,
    callback: (value: Blob) => void,
}) => {
    return async () => {
        try {
            const response = await axios.get(`/banners/get-desktop/${filename}`, {
                responseType: 'blob',
            });
            if(response.status === 200){
                callback(response.data);
            }
        } catch (error) {
            // error
        }
    }
}

// post
// export const postDesk