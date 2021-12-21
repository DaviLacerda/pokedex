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
    const [evolutions, setEvolutions] = useState([])
    const [firstEvolutionId, setFirstEvolutionId] = useState(null)

    async function getPokemonId() {
        let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

        setPokemon(result.data)

        //get pokemon height and weight
        setHeight(result.data.height);
        setWeight(result.data.weight);

        result.data.sprites.other.dream_world.front_default ? setImage(result.data.sprites.other.dream_world.front_default) : setImage(result.data.sprites.front_default)

        setTypes(result.data.types)

        getInformations()
    }

    async function getInformations() {
        const info = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
        for(let i = 0; i < info.data.flavor_text_entries.length; i++){
            if(info.data.flavor_text_entries[i].language.name === 'en'){
                setText(info.data.flavor_text_entries[i].flavor_text);
                break;
            }
        }
        
        setGeneration(info.data.generation.name)

        let evolutionURL = info.data.evolution_chain.url;
        getEvolutions(evolutionURL);
    }

    async function getEvolutions(url){
        const evolutions_result = await axios.get(url);
        let data = evolutions_result.data.chain;
        
        if(data.species.name){
            setEvolutions(currentList => [...currentList, data.species.name])
            let id = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data.species.name}`)
            setFirstEvolutionId(id.data.id)
            if(data.evolves_to.length !== 0){
                setEvolutions(currentList => [...currentList, data.evolves_to[0].species.name])
                if(data.evolves_to[0].evolves_to.length !== 0){
                    setEvolutions(currentList => [...currentList, data.evolves_to[0].evolves_to[0].species.name])
                }
            }
        }
    }

    function firstLetterUpper(param){
        return param.charAt(0).toUpperCase() + param.slice(1);
    }

    function plus(a,b){
        return Number(a) + Number(b);
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
                                <img src={image} alt={pokemon.name} height='100%' width='100%'></img>
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
                            <div className="right__infos__evolutions">
                            <h2>Evolutions:</h2>
                            <div className="right__infos__evolutions__container">
                                {
                                    evolutions.length && evolutions.map((evolve, index) => {
                                        return (
                                            <div className="evolution">
                                                <p>{firstLetterUpper(evolve)}</p>
                                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${plus(firstEvolutionId,index)}.png`} alt={evolve} width='100%' height='100%'></img>
                                            </div>   
                                        )
                                    })
                                }
                            </div>
                            </div>
                        </div>
                    </div>
                </PokemonContainer>
            </Container>
        </>
    )
}

export default Pokemon;