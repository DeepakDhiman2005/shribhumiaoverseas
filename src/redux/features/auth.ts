import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface authInterface {
    name?: string,
    email?: string,
    token?: string | null,
    isAuthenticated?: boolean,
    _id?: string,
}

const initialState: authInterface = {
    name: '',
    email: '',
    token: null,
    isAuthenticated: false,
    _id: '',
}

const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        setAuth: (state, action: PayloadAction<authInterface>) => {
            return { ...state, ...action.payload };
        },
        logoutAuth: () => initialState, // Reset state on logout
    }
});

export const { setAuth, logoutAuth } = authSlice.actions;
export default authSlice.reducer;