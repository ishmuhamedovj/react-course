import React from "react";

const Card = ({name, imgURL, liked, year}) => {
    return (
        <div>
            <h1 className="heading">My movies</h1>
            <div className="card">
                <div className="top">
                    <h2>{name}</h2>
                    <img src={imgURL} alt=""/>
                </div>
                <div className="bottom">
                    <p>{liked}</p>
                    <p>{year}</p>
                </div>
            </div>
        </div>
    )
}
export default Card