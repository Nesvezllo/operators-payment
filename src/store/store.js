import { configureStore, combineReducers} from "@reduxjs/toolkit";

import { popupReducer } from "./popupSlice"

const reducers = combineReducers({
    popupReducer: popupReducer,
})

export const store = configureStore({
    reducer: reducers,   
})

window.store = window;

