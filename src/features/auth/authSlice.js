import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggIn: false,
    user:null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.isLoggIn = true
            state.user=action.payload
        },

        logout(state) {
            state.isLoggIn = false,
    state.user=null
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;