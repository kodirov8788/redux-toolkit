export const AddUser = (state, action) => {
    state.value.push(action.payload)
}

export const DeleteUser = (state, action) => {
    state.value = state.value.filter((user) => user.id !== action.payload.id);
}

export const UpdateUser = (state, action) => {
    state.value.map(user => {
        if (user.id === action.payload.id) {
            return user.username = action.payload.username
        }
    })
}