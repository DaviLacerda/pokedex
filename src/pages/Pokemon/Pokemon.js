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
    const [evolutionsImg, setEvolutionsImg] = useState([])

    async function getPokemonInformations() {
        let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        let data = result.data;

        setPokemon(data)

        //get pokemon height and weight
        setHeight(data.height);
        setWeight(data.weight);

        data.sprites.other.dream_world.front_default ? setImage(data.sprites.other.dream_world.front_default) : 
        setImage(data.sprites.front_default)

        setTypes(data.types)

        getMoreInformations()
    }

    // this function is appart because the request is in another url
    async function getMoreInformations() {
        const info = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
        let data = info.data;

        //i use a for instead a .map because if language 'EN' is in initial part, i dont need to go in all array
        for(let i = 0; i < data.flavor_text_entries.length; i++){
            if(data.flavor_text_entries[i].language.name === 'en'){
                setText(data.flavor_text_entries[i].flavor_text);
                break;
            }
        }
        
        setGeneration(data.generation.name)

        let evolutionURL = data.evolution_chain.url;

        getEvolutions(evolutionURL);
    }


    // this function is appart because the request is in another url
    async function getEvolutions(url){
        const evolutions_result = await axios.get(url);
        let data = evolutions_result.data.chain;

        async function getImages(param){
            let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${param}`) 
            let resultId = result.data.id;
            setEvolutionsImg(currentList => [...currentList, resultId])
        }
        
        // this part, i traverse in object and his array to get all pokemons evolutions possible (in special, Eevee!)
        if(data.species.name){
            setEvolutions(currentList => [...currentList, data.species.name])
            await getImages(data.species.name)
            if(data.evolves_to.length !== 0){
                data.evolves_to.map(async (pokemon) => {
                    if(pokemon.species.name){
                        setEvolutions(currentList => [...currentList, pokemon.species.name])
                        await getImages(pokemon.species.name);
                    }
                    if(pokemon.evolves_to.length !== 0){
                        pokemon.evolves_to.map(async (pokemonAux) => {
                            if(pokemonAux.species.name){
                                setEvolutions(currentList => [...currentList, pokemonAux.species.name])
                                await getImages(pokemonAux.species.name);
                            }
                        })
                    }
                })
            }
        }
    }

    function firstLetterUpper(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    function order(array){
        array.sort((a,b) => a - b) 
    }
    // order the evolutions!!!
    order(evolutionsImg)
    
    //i get all hexadecimal codes about colors, in a JSON, and transform in a array
    let colorsKey = Object.keys(colors);
    
    function addColorType(param) {
        if(colorsKey.includes(param)){
            return colors[param]; 
        }
    }

    let circleBg = null;
    let arrayTypes = []
    let typeColor = null;

    if(types !== null){
        circleBg = addColorType(types[0].type.name)
        arrayTypes = types;
    }

    useEffect(() => {
        getPokemonInformations()
    }, [])

    return (
        <>
            <Header>
                <a href="/">Pokedéx</a></Header>
            <Container>
                <PokemonContainer>
                    <a href="/" className="back">
                        <span>Back</span>
                    </a>

                    <div className='left'>
                        <h1>{pokemon.name}</h1>
                        <h2 id="pokemonId">{`#${pokemon.id}`}</h2>
                        <div className="left__circlePokemon">
                            <span style={{background: circleBg}} className="circle">
                                <img src={image} alt={pokemon.name} height='100%' width='100%'></img>
                            </span>
                            <div className="left__types">
                                {
                                    arrayTypes.map((type) => 
                                        {
                                            typeColor = addColorType(type.type.name);
                                            return <h3 style={{color:typeColor}}>{type.type.name}</h3>
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
                                        evolutionsImg.length && evolutions.map((evolve, index) => {
                                            return (
                                                <div className="evolution">
                                                    <p>{firstLetterUpper(evolve)}</p>
                                                    <a href={`${evolutionsImg[index]}`}>
                                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolutionsImg[index]}.png`} alt={evolve} width='100%' height='100%' ></img>
                                                    </a>
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