import React from "react";

const Card = (props) => {
    return (
        <div>
            <h1 className="heading">My movies</h1>
            <div className="card">
                <div className="top">
                    <h2>{props.name}</h2>
                    <img src={props.imgURL} alt=""/>
                </div>
                <div className="bottom">
                    <p>{props.liked}</p>
                    <p>{props.year}</p>
                </div>
            </div>
        </div>
    )
}
export default Card