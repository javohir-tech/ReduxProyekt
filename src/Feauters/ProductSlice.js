import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    allProducts: 0,
    price: 0
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state) => { },
        removeProduct: (state) => { }
    }
})

export const {addProduct, removeProduct} = productSlice.actions
export default productSlice.reducer