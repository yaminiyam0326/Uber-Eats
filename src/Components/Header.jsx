import React from "react";


function Header(){
    return(
        <>
        <div className=" flex justify-between p-4 position:sticky top-0 bottom-0">
            <h1 className=" font-semibold text-3xl">Uber <span className="font-extrabold">Eats</span></h1>
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
                <button className="px-4 py-1.5 text-sm font-medium text-black bg-white rounded-full shadow">Delivery</button>
                <button className="px-4 py-1.5 text-sm font-medium text-gray-500">Pickup</button>
            </div>
            <input className="rounded-full px-5 w-96 bg-gray-100 " type="text" placeholder=" Search Uber Eats"/>
            <p>Login</p>
            <p>Sign up</p>
        </div>
        </>
    );
}

export default Header;