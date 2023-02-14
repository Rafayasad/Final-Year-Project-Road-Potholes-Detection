import { createSlice } from "@reduxjs/toolkit";

export const locationDataSlice = createSlice({
    name: "location",
    initialState: {
        data: {}
    },
    reducers: {
        setLocationData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { setLocationData } = locationDataSlice.actions;

export const getLocationData = (state) => state;

export default locationDataSlice.reducer;