import { useState , useEffect, useRef} from 'react'
import Card from './components/Card';
import Setpoke from './custhooks/setpoke';
import SetOptions from './custhooks/setoptions';

function App() {

  let url2="https://ex.traction.one/pokedex/pokemon";

  const pokeref=useRef(null);
  const[pokemon,setpokemon]=useState("Bulbasaur");
  const[image,setimage]=useState("");
  const[para,setpara]=useState("");
  const[head,sethead]=useState([]);
  const[mid,setmid]=useState("");
  const[options,setoptions]=useState(null);

  let url=`https://ex.traction.one/pokedex/pokemon/${pokemon}`;

  useEffect(()=>{SetOptions(url2,setoptions)} ,[]);
  
  useEffect(()=>{Setpoke(url,setimage,sethead,setpara,setmid)},[pokemon]);

  return (
    <>
      <div className='relative'>
      <h1 style={{fontFamily:"PokeFont",position:'relative'}} className=" absolute text-center text-7xl bg-transparent top-0 left-0 z-20 text-emerald-900">Generate Pokemon Cards</h1>
      <div className="flex flex-row w-full h-screen items-center justify-evenly absolute bg-gray-100 top-0 left-0 z-10" style={{backgroundImage: "url('https://wallpapercave.com/wp/wp2595099.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',}}>

        <Card head={head} image={image} mid={mid} para={para}/>

        <div className="flex flex-col items-center">
          <div style={{fontFamily:"oswald"}} className="flex flex-row items-center m-3">
          <input
            ref={pokeref}
            className="border-2 border-solid border-gray-300 p-2 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search Pokemon"
          />
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg mb-2 w-fit hover:bg-red-600"
            onClick={() => {
              setpokemon(pokeref.current.value);
            }}
          >
            Search
          </button>
          </div>
          <h3 style={{fontFamily:"oswald"}}>Select from dropdown list or write pokedex number in search field</h3>
          <select style={{fontFamily:"oswald"}}
            className=" mt-5 border-2 border-solid border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setpokemon(e.target.value)}
          >
            {options}
          </select>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
