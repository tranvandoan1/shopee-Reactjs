import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SaveOrderAPI from "../API/SaveOrder";

export const getSaveOrder=createAsyncThunk(
    "saveorders/getSaveOrder",
    async ()=>{
        const {data:saveorder}=await SaveOrderAPI.getAll()
        console.log(saveorder)
        return saveorder
    }
)
const saveOrderSlice=createSlice({
    name:"saveorders",
    initialState:{
        value:[]
    },
    reducers:{
        addProduct(state,action){
            // state.value.push(action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getSaveOrder.fulfilled,(state,action)=>{
            state.value = action.payload
        })
    }
    
})
export default saveOrderSlice.reducer