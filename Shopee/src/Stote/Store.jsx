import { configureStore ,getDefaultMiddleware } from '@reduxjs/toolkit'
import {
    FLUSH, PAUSE,
    PERSIST, persistReducer,
     PURGE,
    REGISTER, REHYDRATE
  } from "redux-persist";
import rootReducer from '../reducers';
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "root",
    storage,
    blacklist: ["saveorders","products","order"],
  };
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

});
export default store;