import React from "react";

function Card({head,image,mid,para}){
    return(
    <div className="flex flex-col  m-10 w-350 bg-white bg-opacity-75 rounded-sm shadow-lg p-5 hover:bg-opacity-100 mt-24">
          <div style={{fontFamily:'PokeFont'}} className="flex flex-row justify-between items-center text-xl font-bold mb-4 ">
            <div className="text-2xl text-red-800 justify-center align-middle">{head[0]}</div>
            <div className="bg-red-500 text-white px-2 py-1 rounded-lg justify-center align-middle pb-3">HP {head[1]}</div>
          </div>
          <img className=" border-yellow-400 border-8 rounded-lg mb-4 h-52 object-contain" src={image} alt="Pokemon" />
          <h4 className=" bg-yellow-400 pl-3 rounded-md text-lg mb-2 text-red-800 font-medium italic">{mid}</h4>
          <h1 className="text-xl font-bold mb-2 text-center" style={{fontFamily:"oswald"}}>ABILITIES</h1>
          <div className="text-left text-gray-700" style={{fontFamily:"oswald"}}>{para}</div>
        </div>
    );
}

export default Card;