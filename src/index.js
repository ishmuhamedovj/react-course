import ReactDOM from "react-dom"
import React from "react";
import App from "./components/App";

// const Card = (props) => {
//     return (
//         <div>
//             <h2>{props.name}</h2>
//             <img src={props.src} alt={props.alt}/>
//             <p>{props.liked}</p>
//             <p>{props.produced}</p>
//         </div>
//     )
// }

ReactDOM.render(App(), document.querySelector(".root"))

