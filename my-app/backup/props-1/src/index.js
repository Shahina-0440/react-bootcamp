import React from 'react';
import ReactDOM from 'react-dom';


function Card(){
  return (
    <div className="card">
    <div>
      <img src="https://images.pexels.com/photos/3999536/pexels-photo-3999536.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="phone-image"/>
      <a href="https://www.pexels.com/search/cell%20phone/"><button >More Images </button></a>
    </div>
  </div>
  )

}
ReactDOM.render(
  <Card/>,
  document.getElementById("root")
)
