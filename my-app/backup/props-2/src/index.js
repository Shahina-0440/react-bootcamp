import React from 'react';
import ReactDOM from 'react-dom';


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
ReactDOM.render(
  <Card
    imgsrc="https://images.pexels.com/photos/3999536/pexels-photo-3999536.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    link="https://www.pexels.com/search/cell%20phone/"
  />,
  document.getElementById("root")
)
