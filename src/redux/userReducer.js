import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../static_data";
import { AddUser, DeleteUser, UpdateUser } from "./action";
const userSlice = createSlice({
    name: "Users",
    initialState: {
        value: Users
    },
    reducers: {
        addUser: AddUser,
        deleteUser: DeleteUser,
        updateUser: UpdateUser
    }
})

export const { addUser, deleteUser, updateUser } = userSlice.actions
export default userSlice.reducer