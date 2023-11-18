import React from "react";
import './index.css'
function Card(props){
    return (
            <div className="card-item">
                <h3>{props.title}</h3>
                <img src={props.imgsrc} alt="phone-image"/>
                <a href={props.link} target="_blank"><button >Watch Now </button></a>
            </div>
    )
}
export default Card;