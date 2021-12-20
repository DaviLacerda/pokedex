import axios from "axios";
import { Header } from "./styles";
import { Container, PokemonContainer } from "./styles";
import { useState, useEffect } from "react";
import './styles'
import colors from '../../styles/colors.json'

function Pokemon() {
    const url = window.location.href;
    const pokemonId = url.split('/')[4]

    const [pokemon, setPokemon] = useState({});
    const [image, setImage] = useState(null);
    const [types, setTypes] = useState(null);
    const [text, setText] = useState(null);
    const [generation, setGeneration] = useState(null)
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null)

    async function getPokemonId() {
        let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

        setPokemon(result.data)

        console.log(result.data.height);
        setHeight(result.data.height);
        setWeight(result.data.weight);

        result.data.sprites.other.dream_world.front_default ? setImage(result.data.sprites.other.dream_world.front_default) : setImage(result.data.sprites.front_default)

        setTypes(result.data.types)

        getInformations()
    }

    async function getInformations() {
        const info = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
        setText(info.data.flavor_text_entries[0].flavor_text);
        setGeneration(info.data.generation.name)
    }
    
    let colorsKey = Object.keys(colors);
    
    function addColorType(param) {
        if(colorsKey.includes(param)){
            return colors[param]; 
        }
    }

    let bg = null;
    let arrayTypes = []

    if(types !== null){
        bg = addColorType(types[0].type.name)
        arrayTypes = types;
    }

    useEffect(() => {
        getPokemonId()
    }, [])

    return (
        <>
            <Header><a href="/">Pokedéx</a></Header>
            <Container>
                <PokemonContainer>
                    <a href="/">
                        <span>Back</span>
                    </a>
                    <div className='left'>
                        <h1>{pokemon.name}</h1>
                        <h2 id="pokemonId">{`#${pokemon.id}`}</h2>
                        <div className="left__bgPokemon">
                            <span style={{background: bg}} className="circle">
                                <img src={image} alt={pokemon.name}></img>
                            </span>
                            <div className="left__types">
                                {
                                    arrayTypes.map((type) => 
                                        {
                                            bg = addColorType(type.type.name);
                                            return <h3 style={{color:bg}}>{type.type.name}</h3>
                                        })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <h2 className="generation">{generation}</h2>
                        <p>{text}</p>
                        <div className="right__infos">
                            <div className="right__infos__content">
                                <h3>Height:</h3>
                                <p>{`${height/10}m`}</p>
                            </div>
                            <div className="right__infos__content">
                                <h3>Weight:</h3>
                                <p>{`${weight/10}Kg`}</p>
                            </div>
                        </div>
                    </div>
                </PokemonContainer>
            </Container>
        </>
    )
}

export default Pokemon;