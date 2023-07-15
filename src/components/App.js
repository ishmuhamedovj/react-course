import React from "react";
import Card from "./Card";

const App = () => {
    return (
        <div>
            <h1 className="heading">My movies</h1>
            <Card
                name="The social network"
                imgURL="https://pics.filmaffinity.com/The_Social_Network-460155430-large.jpg"
                liked: "90%"
                year: "October 1, 2010"
            />

            <Card
                name="Inception"
                imgURL="https://www.themoviedb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg"
                liked: "88%"
                year: "July 8, 2010"
            />

            <Card
                name="Gravity"
                imgURL="https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg"
                liked: "79%"
                year: "October 4, 2013"
            />
        </div>
    )
}
export default App