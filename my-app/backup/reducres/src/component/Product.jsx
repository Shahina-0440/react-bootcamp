import React from "react";
import { incrAction,decrAction } from "../reducers/product/Product.action";
import { useDispatch, useSelector } from "react-redux";

let Product=()=>{
    let dispatch=useDispatch();
    let Product=useSelector((state)=>{
        return state
    })
    return <>
        <button onClick={()=>{dispatch(decrAction())}}>-</button>
        <span>{Product.qty}</span>
        <button onClick={()=>{dispatch(incrAction())}}>+</button>
    </>
}

export default Product;