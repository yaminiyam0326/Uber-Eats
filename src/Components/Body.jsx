import React from "react";
import Card from "./Card.jsx"

function Body(){
    return(
        <>
        
        <h1 className="px-10 font-bold text-3xl">National Brands</h1>
        <div className="flex flex-wrap">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <h1 className="px-10 font-bold text-3xl">Under $2 delivery</h1>
        <div className="flex flex-wrap">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <h1 className="px-10 font-bold text-3xl">Local Legends</h1>
        <div className="flex flex-wrap">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <h1 className="px-10 font-bold text-3xl">Popular Near you</h1>
        <div className="flex flex-wrap">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        </>
    );
}

export default Body;