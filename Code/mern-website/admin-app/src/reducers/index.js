import authReducer from "./auth.reducers";
import userReducer from "./user.reducer";
import { combineReducers } from "redux";
import productReducer from "./product.reducer";
import orderReducer from "./order.reducer";
import categoryReducer from "./category.reducer";
import pageReducer from "./page.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    order: orderReducer,
    product: productReducer,
    category: categoryReducer,
    page: pageReducer,
});
export default rootReducer;