import { createSlice } from "@reduxjs/toolkit";

// toast
import { toast } from "react-toastify";

const initialState = {
    products: [],
    allProducts: 0,
    price: 0
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            const product = state.products.find((prod) => prod.id == payload.id)
            if (product) {
                toast.warning("Already added")
            } else {
                state.products = [...state.products, payload]

                let allProductCounter = 0;
                let AllProductPrice = 0
                state.products.forEach((product) => {
                    allProductCounter += product.amount;
                    AllProductPrice += product.amount * product.discountPercentage
                })

                state.allProducts = allProductCounter;
                state.price = AllProductPrice
            }
        },
        removeProduct: (state) => { }
    }
})

export const { addProduct, removeProduct } = productSlice.actions
export default productSlice.reducer