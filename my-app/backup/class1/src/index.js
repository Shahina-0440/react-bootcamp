import React from 'react';
import ReactDOM from 'react-dom';


let curDate=new Date();
curDate=curDate.getHours();
let greetings="";
const cssStyle={};
if (curDate>=1 && curDate<12){
  greetings="Good Morning";
  cssStyle.color='green'
}else if(curDate>=12 && curDate<19){
  greetings="Good Afternoon";
  cssStyle.color="orange"
}else{
  greetings="Good Night";
  cssStyle.color="black"
}
ReactDOM.render(
  <h1>Hello, <span style={cssStyle}>{greetings}</span></h1>,
  document.getElementById("root")
)
