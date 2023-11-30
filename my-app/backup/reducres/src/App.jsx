import React from "react";
import Product from "./component/Product";
import {Provider} from  "react-redux";
import { Store } from "./reducers/Store";
function App(){
    return (
        <>
        <Provider  store={Store}>
                <Product/>
        </Provider>
        
        </>
    )

}























export default App;