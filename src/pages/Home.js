import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Container } from "../styles/Home"
import { ButtonStyled } from '../components/Button/styles';
import Card from '../components/Card/Card';

function Home() {
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
                    await pokemonShow.sort((a, b) => a.id - b.id)
                });
            }
            createPokemon(promise.data.results)
        }
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <>
            <Header>Pokedéx</Header>
            <Container>
                {pokemonShow.map( (pokemon, index) =>                     
                    <Card key={pokemon.id} id={pokemon.id}
                    src={pokemon.sprites}
                    name={pokemon.name}
                    type={pokemon.types[0].type.name}
                    ></Card>
                )}
                <ButtonStyled onClick={() => getPokemons()} id='loadBtn'>Load More</ButtonStyled>
            </Container>
        </>
    )
}

export default Home