import axios from 'axios'
import { useState, useEffect } from 'react'

import { Header, Container } from "./styles"
import { ButtonStyled } from '../../components/Button/styles';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';

function Home() {
    const [pokemonShow, setPokemonShow] = useState([]);
    const [loadPokemon, setLoadPokemon] = useState(`https://pokeapi.co/api/v2/pokemon?limit=20`)
    const[input, setInput] = useState('')

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
    
    //i use this function to reorganize the array to display pokemons in id order, like a pokedex
    function order(param){
        param.sort((a,b) => a.id - b.id) 
    }
    order(pokemonShow);


    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <>
            <Header>
                <a href="/">Pokedéx</a>
            </Header>

            <Input type='text' placeholder='Search Pokemon' onchange={event => setInput(event.target.value)}></Input>

            <Container>
                {pokemonShow.filter((pkm) => {
                    if(input === ''){
                        return pkm;
                    }
                    else if(pkm.name.toLowerCase().includes(input.toLowerCase())){
                        return pkm;
                    }
                    else if(pkm.id.toString().includes(Number(input))){
                        return pkm;
                    }}).map( (pokemon) =>
                                <Card id={pokemon.id}
                                    src={pokemon.sprites}
                                    name={pokemon.name}
                                    type={pokemon.types}
                                ></Card>
                            )
                    }
            </Container>
            <ButtonStyled onClick={() => getPokemons()} id='loadBtn'>Load More</ButtonStyled>
        </>
    )
}

export default Home