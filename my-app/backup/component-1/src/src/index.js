import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Card from './Card'
import Details from './Details';
import Card_container from "./Card_container"




ReactDOM.render(
  <>
    <h1 className="heading">Netflix series</h1>
    <Card_container/>
  </>,
  document.getElementById("root")
  
)
