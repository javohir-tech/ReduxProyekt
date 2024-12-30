import { createSlice } from "@reduxjs/toolkit";

// toast
import { toast } from "react-toastify";

const dataFormLocal = ()=>{
    return (
        JSON.parse(localStorage.getItem('products')) ?? {
            products: [],
            allProducts: 0,
            price: 0
        }
    )
}

const productSlice = createSlice({
    name: "product",
    initialState: dataFormLocal(),
    reducers: {
        addProduct: (state, { payload }) => {
            const product = state.products.find((prod) => prod.id == payload.id)
            if (product) {
                toast.warning("Already added")
            } else {
                state.products = [...state.products, payload]
                productSlice.caseReducers.Canculate(state)
            }
        },
        removeProduct: (state, {payload}) => { 
            state.products = state.products.filter((prod)=>prod.id != payload)
            productSlice.caseReducers.Canculate(state)
        },
        addAmount: (state, { payload }) => {
            const item = state.products.find((prod) => prod.id == payload)
            item.amount += 1
            productSlice.caseReducers.Canculate(state)
        },
        removeAmount: (state, { payload }) => {
            const item = state.products.find((prod) => prod.id == payload)
            item.amount -= 1
            productSlice.caseReducers.Canculate(state)
        }, 
        Canculate : (state) =>{
            let allProductCounter = 0;
            let AllProductPrice = 0
            state.products.forEach((product) => {
                allProductCounter += product.amount;
                AllProductPrice += product.amount * product.price
            })

            state.allProducts = allProductCounter;
            state.price = AllProductPrice
            localStorage.setItem('products', JSON.stringify(state))
        }
    }
})

export const { addProduct, removeProduct, addAmount, removeAmount } = productSlice.actions
export default productSlice.reducer