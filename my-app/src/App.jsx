import React from "react";

export default class  App extends React.Component(){
    constructor(props){
        super(props);
        this.state={
            products:[{id:1,qty:1},
             {id:2,qty:2}] 
         }
    }
   
    render(){

            return (
                <>
                <span>{this.state.qty}</span>
                
                </>
            )
    }
}






















