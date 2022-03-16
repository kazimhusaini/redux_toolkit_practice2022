import { createSlice, configureStore } from '@reduxjs/toolkit'


export const UserSlice = createSlice({
    name: "user",
    initialState: {
        name: "husaini",
        email: "husaini12@gmail.com"
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        remove: (state => (state = {})),

    }
});
export const { update, remove } = UserSlice.actions
export default UserSlice.reducer; 