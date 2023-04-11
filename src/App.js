//1. 리덕스를 사용하지 않을 때 예제

// import React, { useState } from "react";
// import "./style.css"

// export default function App(){

//   const [number, setNumber]= useState(1);

//   return(
//     <div id="container">
//       <h1 style={{color:"red"}}>Start: {number}</h1>
//       <div id="grid">
//           <Left1 number={number}></Left1>
//           <Right1></Right1>
//       </div>
      
//     </div>
//   )

// }

// function Left1(props){
//   return(
//     <div>
//       <h1> Left 1: {props.number}</h1>
//       <Left2 number={props.number}></Left2>   
//     </div>
//   )
// }

// function Left2(props){
//   return(
//     <div>
//       <h1> Left 2: {props.number}</h1>
//       <Left3 number={props.number}></Left3>
//     </div>
//   )
// }

// function Left3(props){
//   return(
//     <div>
//       <h1> Left 3: {props.number}</h1>
//     </div>
//   )
// }

// function Right1(props){
//   return(
//     <div>
//       <h1> Right 1 </h1>
//       <Right2 onIncrease ={()=>{
//         props.onIncrease();}}>
//       </Right2>
//     </div>
//   )
// }

// function Right2(props){
//   return(
//     <div>
//       <h1>Right 2</h1>
//       <Right3 onIncrease ={()=>{
//         props.onIncrease();}}>
//       </Right3>
//     </div>
//   )
// }

// function Right3(props){
//   return(
//     <div>
//       <h1>Right 3</h1>
//       <input type="button" value="number+1" onClick={()=>{props.onIncrease()}}></input>
//     </div>
//   )
// }


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;