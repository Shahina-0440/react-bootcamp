import {createStore} from "redux";
import { productReducer } from "./product/Product.reducer";
import {composeWithDevTools} from "@redux-devtools/extension"
let Store=createStore(productReducer,composeWithDevTools())

    
export {Store}