import React from "react";

function Card(){
    return(
       <>
       <div className="h-[300px] w-[280px] p-4 m-4 rounded-xl shadow-lg hover:bg-blue-200">
        <img className="h-40 w-80 rounded-xl" alt="Panda Express Image" src="https://upload.wikimedia.org/wikipedia/commons/4/45/Panda_Express_Storefront_%2848128044623%29.jpg"/>
        <div className="flex justify-between font-bold text-xl">
            <div>
                <h1>Panda Express</h1>
                <p>15-30 min</p>
            </div>
            <div>
                <p>4.5</p>
            </div>
       </div>
       </div>
       </> 
    );
}

export default Card;