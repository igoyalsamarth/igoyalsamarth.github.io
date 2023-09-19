import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCopied: false,
};

export const copySlice = createSlice({
    name: "copy",
    initialState,
    reducers:{
        toggleCopy: (state) => {
            state.isCopied = !state.isCopied;
        },
    },
});

export const {toggleCopy} = copySlice.actions;

export default copySlice.reducer;