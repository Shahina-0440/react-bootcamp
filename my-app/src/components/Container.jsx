import React from "react";
import Card from "./Card";
import Details from "../details/Details"

function Container(){
    return(
        <>
            <div className="card_container">
                   {Details.map((value,index)=>{
                    return(
                        <Card
                            key={value.id}
                            title={value.title}
                            imgsrc={value.imgsrc}
                            website={value.website}
                        />
                    )
                   })} 
            </div>
        </>
    )
}

export default Container;