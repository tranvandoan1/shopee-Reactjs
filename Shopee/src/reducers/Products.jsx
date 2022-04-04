import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProAPI from "../API/ProAPI";

export const getProduct=createAsyncThunk(
    "products/getProduct",
    async ()=>{
        const {data:products}=await ProAPI.getAll()
        console.log(products)
        return products
    }
)
const productSlice=createSlice({
    name:"products",
    initialState:{
        value:[]
    },
    reducers:{
        addProduct(state,action){
            // state.value.push(action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.value = action.payload
        })
    }
    
})
export default productSlice.reducer