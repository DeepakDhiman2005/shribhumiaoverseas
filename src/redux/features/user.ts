import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import handleError from "../../constants/handleError";
import { AxiosError } from "axios";
import { setAuth } from "./auth";
import { userInterface } from "../../interfaces/authInterface";

const axios = useAxios();

interface userInitialStateInterface {
    user: userInterface | null,
}

const initialState: userInitialStateInterface = {
    user: null,
}

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        setUser: (state, { payload }: PayloadAction<Partial<userInterface>>) => {
            return { ...state, ...payload };
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

// functions
export const authLoginRedux = (data: { email: string, password: string }, callback: (value: boolean) => void) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.post('/auth/login', data);
            if (response.status === 200) {
                console.log(response.data);
                toast.success('Login Successfully!');
                if (response.data?.token) {
                    dispatch(setAuth(response.data.token));
                    callback(true);
                } else {
                    console.error('Token not provided!');
                }
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                handleError(error);
            }
        }
    }
}