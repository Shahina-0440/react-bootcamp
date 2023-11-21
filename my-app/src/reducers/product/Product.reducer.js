
let intialState={
    qty:1
}

let productReducer=(state=intialState,action)=>{
    switch(action.type){
        case "INCR":
            return {qty:state.qty+1}
        case "DECR":
            return {qty:state.qty-1}
        default:
            return state
    }
}

export {productReducer}