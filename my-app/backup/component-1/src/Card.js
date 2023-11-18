import React from "react";
function Card(props){
    return (
      <div className="card">
      <div>
        <img src={props.imgsrc} alt="phone-image"/>
        <a href={props.link} target="_blank"><button >More Images </button></a>
      </div>
    </div>
    )
}
export default Card;