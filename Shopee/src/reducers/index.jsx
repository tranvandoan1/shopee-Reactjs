import { combineReducers } from "redux";
import orderSlice from "./Order";
import productSlice from "./Products";
import saveOrderSlice from "./SaveOrder";

const rootReducer = combineReducers({
    product: productSlice,
    order: orderSlice,
    saveorder:saveOrderSlice
});
export default rootReducer;