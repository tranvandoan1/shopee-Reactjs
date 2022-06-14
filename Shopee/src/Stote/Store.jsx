import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../reducers/Products'
import saveOrderSlice from '../reducers/saveOrder'
import categorisSlice from '../reducers/CategoriSlice'
export const store = configureStore({
  reducer :{
    product:productSlice,
    saveorder:saveOrderSlice,
    categori:categorisSlice,
  }
});

