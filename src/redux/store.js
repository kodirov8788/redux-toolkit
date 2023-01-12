import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    users: userReducer,
})
const store = configureStore({
    reducer: rootReducer
})

export default store