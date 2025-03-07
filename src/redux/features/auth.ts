import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import useStorage from "../../hooks/useStorage";
import { jwtDecode } from "jwt-decode";
import { TOKEN_NAME } from "../../configs/globalVariables";
import { authInterface } from "../../interfaces/authInterface";
import handleToken from "../../constants/handleToken";

const storage = useStorage();

const initialState: authInterface = {
    name: handleToken()?.name || '',
    email: handleToken()?.email || '',
    token: handleToken()?.token,
    isAuthenticated: handleToken()?.isAuthenticated ?? false,
    _id: handleToken()?._id || '',
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, { payload }: PayloadAction<string>) => {
            const decoded = jwtDecode<authInterface>(payload); // Ensure payload is a string

            // Store token & authentication status
            storage.set(TOKEN_NAME, payload);
            storage.set("isAuthenticated", true);

            return {
                ...state,
                ...decoded,
                token: payload, // Store the token in state
                isAuthenticated: true,
            };
        },
        logoutAuth: () => {
            // Clear storage on logout
            storage.remove(TOKEN_NAME);
            storage.remove("isAuthenticated");

            return {
                name: '',
                email: '',
                isAuthenticated: false,
                _id: '',
                token: null,
            };
        },
    },
});

export const { setAuth, logoutAuth } = authSlice.actions;
export default authSlice.reducer;
