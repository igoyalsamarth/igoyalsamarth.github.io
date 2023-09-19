import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./reducers/themeSlice";
import navbarSlice from "./reducers/navbarSlice";
import copySlice from "./reducers/copySlice";

export const store = configureStore({
    reducer: {
        theme: themeSlice,
        navbar: navbarSlice,
        copy: copySlice,
    },
})