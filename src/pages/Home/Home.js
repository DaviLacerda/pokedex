import axios from 'axios'
import { useState, useEffect } from 'react'

import { Header, Container } from "./styles"
import { ButtonStyled } from '../../components/Button/styles';
import Card from '../../components/Card/Card';

function Home() {
    //i use this function always before a .map, to reorganize the array to display pokemons in id order, like a pokedex
    function order(){
        pokemonShow.sort((a,b) => a.id - b.id) 
    }

    const [pokemonShow, setPokemonShow] = useState([]);

    const [loadPokemon, setLoadPokemon] = useState(`https://pokeapi.co/api/v2/pokemon?limit=20`)

    var promise = null;

    async function getPokemons() {
        if(loadPokemon === null){
            alert(`There are no more Pokemons!`)
            const loadBtn = document.getElementById('loadBtn').style.display = 'none'
        }
        else{
            promise = await axios.get(loadPokemon);
            setLoadPokemon(promise.data.next)

            async function createPokemon(array) {
                array.forEach(async (pokemon) => {
                    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                    const data = result.data;
                    setPokemonShow( currentList => [...currentList, data]);
                });
            }
            createPokemon(promise.data.results)
        }
    }

    useEffect(() => {
        getPokemons()
    }, [])

    order();

    return (
        <>
            <Header><a href="/">Pokedéx</a></Header>
            <Container>
            {pokemonShow.map( (pokemon) =>
                <>
                    <Card key={pokemon.id} id={pokemon.id}
                        src={pokemon.sprites}
                        name={pokemon.name}
                        type={pokemon.types}
                    ></Card>   
                </>
            )}
            </Container>
            <ButtonStyled onClick={() => getPokemons()} id='loadBtn'>Load More</ButtonStyled>
        </>
    )
}

export default Home