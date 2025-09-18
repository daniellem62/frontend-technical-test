import { useState, useEffect } from "react";
import pokemonLogo from "./assets/pokemon-logo.png";

function App() {
  const [letter, setLetter] = useState("");
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemonData, setPokemonData] = useState({});
  const [codeName, setCodeName] = useState("");

  const adjectives = [
  "Amazing", "Agile", "Adventurous",   
  "Brave", "Bold", "Bouncy",           
  "Clever", "Calm", "Curious",         
  "Daring", "Dynamic", "Determined",   
  "Energetic", "Epic", "Excellent",    
  "Fierce", "Friendly", "Fearless",    
  "Gentle", "Glorious", "Gutsy",       
  "Hungry", "Happy", "Heroic",         
  "Incredible", "Inventive", "Intelligent",
  "Joyful", "Jolly", "Jumpy",          
  "Kind", "Keen", "Kooky",             
  "Loyal", "Lucky", "Lively",          
  "Mighty", "Magical", "Merry",        
  "Noble", "Nifty", "Neat",            
  "Outstanding", "Optimistic", "Odd",  
  "Playful", "Proud", "Powerful",      
  "Quick", "Quirky", "Quiet",          
  "Radiant", "Royal", "Rugged",        
  "Swift", "Strong", "Sneaky",         
  "Tough", "Tiny", "Talented",         
  "Unique", "Upbeat", "Ultra",         
  "Valiant", "Vivid", "Vibrant",       
  "Wise", "Wild", "Witty",             
  "Young", "Yummy", "Yielding",        
  "Zany", "Zippy", "Zealous"           
  ];

  useEffect(() => {
    //get list of pokemon names from pokeapi
    async function getPokemonNames() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1000"
      );
      const data = await response.json();
      setPokemonNames(data.results.map((pokemon) => pokemon.name));
    }
    getPokemonNames();
    // console.log(`Pokemon names: ${pokemonNames}`);
  }, []);

  async function getPokemonData(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    setPokemonData(data);
    return data;
  }

  function handleClick() {
    if (letter) {
      // find a pokemon name that starts with the letter
      const filteredNames = pokemonNames.filter(
        (name) => name[0].toLowerCase() === letter.toLowerCase()
      );
      const chosenPokemon = filteredNames.length > 0 ? filteredNames[Math.floor(Math.random() * filteredNames.length)] : null;

      // find an adjective that starts with the letter
      const adj = adjectives.filter(
        (adj) => adj[0].toLowerCase() === letter.toLowerCase()
      );

      // set code name if both exist
      if (adj && chosenPokemon) {
        setCodeName(
          `${adj[Math.floor(Math.random() * adj.length)]} ${
            chosenPokemon.charAt(0).toUpperCase() + chosenPokemon.slice(1)
          }`
        );
        getPokemonData(chosenPokemon);
        // fetch and set pokemonData
      } else {
        setCodeName(null);
        setPokemonData({});
      }
    }
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <img src={pokemonLogo} className="w-[300px]" alt="Pokemon" />
      <h1>Code name generator</h1>
      <input
        type="text"
        value={letter}
        placeholder="Enter a letter"
        onChange={(e) => setLetter(e.target.value)}
      />
      <button onClick={handleClick}>Get Pokemon</button>
      <div>
        <img src={pokemonData.sprites?.front_default} className="w-[300px]" alt={pokemonData.name} />
        <h1>
          Name:{" "}
          {codeName
            ? codeName.split(" ")[1].charAt(0).toUpperCase() +
              codeName.split(" ")[1].slice(1)
            : "Loading..."}
        </h1>
        <h1>Code Name: {codeName ? codeName : "Loading..."}</h1>
        <h1>
          Stats:{" "}
          {pokemonData.stats
            ? pokemonData.stats.map((stat) => (
                <div key={stat.stat.name}>
                  {stat.stat.name.charAt(0).toUpperCase() +
                    stat.stat.name.slice(1)}
                  : {stat.base_stat}
                </div>
              ))
            : "Loading..."}
        </h1>
      </div>
    </div>
  );
}

export default App;
