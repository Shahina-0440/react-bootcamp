import React from "react";

const Card=function(props){
    return(
        <>
            <div className="card">
                <h1>{props.title}</h1>
                <img src={props.imgsrc} alt="series-image"/>
                <a href={props.website}><button className="btn">Watch Now</button></a>
            </div>
        </>
    )
}
export default Card;