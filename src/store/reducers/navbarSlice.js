import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navSelect: 'home',
};

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers:{
        toggleHome: (state) => {
            state.navSelect = 'home';
        },
        toggleAbout: (state) => {
            state.navSelect = 'about';
        },
        toggleWork: (state) => {
            state.navSelect = 'work';
        },
        toggleMedia: (state) => {
            state.navSelect = 'media';
        },
    },
});

export const {toggleHome, toggleAbout, toggleMedia, toggleWork} = navbarSlice.actions;

export default navbarSlice.reducer;