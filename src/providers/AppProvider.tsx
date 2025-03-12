import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ToastContainer } from "react-toastify";

// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/page-loader.css";

import { BrowserRouter } from "react-router-dom";
import ScreenProvider from "./ScreenProvider";


const AppProvider = ({
    children,
}: {
    children: React.ReactNode,
}) => {
    return <>
        <BrowserRouter>
            <Provider store={store}>
                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    style={{
                        zIndex: 1000000,
                    }}
                />
                <ScreenProvider>
                    {children}
                </ScreenProvider>
            </Provider>
        </BrowserRouter>
    </>
}

export default AppProvider;