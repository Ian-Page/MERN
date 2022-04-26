import axios from 'axios';
import React, {useState,useEffect} from 'react';

const PokeCall = (props) => {
    const [pokemon, setPokemon] = useState([]);

    
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            /*.then(response => {
            return response.json()
            })*/
            .then(response => {
                console.log(response)
                setPokemon(response.data.results)
            })
            .catch((err) => {
                console.log(err);
            })
    
    }, []);
    console.log(pokemon);  
    return (
    <div className="App">
        <ul>
        {
        pokemon.map((pokemon1, index)=>{
        return (<li key={index}>{pokemon1.name}</li>)
        })
        }
        
        </ul>
    </div>
    );
}

export default PokeCall