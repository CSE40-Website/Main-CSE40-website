

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";



export const MainLanding = () => {
    return(
        <ThemeProvider>
            <App />
        </ThemeProvider>
    )
}
