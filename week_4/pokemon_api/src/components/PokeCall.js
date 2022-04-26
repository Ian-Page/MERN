import React, {useState,useEffect} from 'react';

const PokeCall = (props) => {
    const [pokemon, setPokemon] = useState([]);

    
    useEffect(() => {fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {
        return response.json()
        })
        .then(response => {
        setPokemon(response.results)
        })
        .catch((err) => {
        console.log(err);
        })
    
    }, []);  
    return (
    <div className="App">
        <ul>
        {
        pokemon.map((pokemon, index)=>{
        return (<li key={index}>{pokemon.name}</li>)
    })
}
        </ul>
    </div>
    );
}

export default PokeCall