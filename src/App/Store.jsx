import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Feauters/ProductSlice'
export const store = configureStore({
    reducer: {
        product: productReducer
    }
})