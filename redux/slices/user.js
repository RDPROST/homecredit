import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: null,
    firstName: "Иван",
    lastName: "Иванов",
    avatar: "https://images.unsplash.com/photo-1656290669371-4df511cc7de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    org: "Руководитель департамента",
    access: {
        isAdmin: false,
        isMethodist: false,
        isTrainer: false,
        isCollaborator: false,
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
})

export const userReducer = userSlice.reducer;