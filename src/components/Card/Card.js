import './styles'
import { PokemonContainer } from './styles';

function Card(props) {
    function addColorType(param) {
        if(param === 'normal'){
            return '#A4ACAF'
        }
        else if(param === 'fighting'){
            return '#D56723'
        }
        else if(param === 'flying'){
            return 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)'
        }
        else if(param === 'poison'){
            return '#B97FC9'
        }
        else if(param === 'ground'){
            return 'linear-gradient( 180deg, #f7de3f 50%, #ab9842 50%)'
        }
        else if(param === 'rock'){
            return '#A38C21'
        }
        else if(param === 'bug'){
            return '#729F3F'
        }
        else if(param === 'ghost'){
            return '#7B62A3'
        }
        else if(param === 'steel'){
            return '#9EB7B8'
        }
        else if(param === 'fire'){
            return '#FD7D24'
        }
        else if(param === 'water'){
            return '#4592C4'
        }
        else if(param === 'grass'){
            return '#9BCC50'
        }
        else if(param === 'eletric'){
            return '#EED535'
        }
        else if(param === 'psychic'){
            return '#F366B9'
        }
        else if(param === 'ice'){
            return '#51C4E7'
        }
        else if(param === 'dragon'){
            return 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)'
        }
        else if(param === 'dark'){
            return '#707070'
        }
        else {
            return '#FDB9E8'
        }
    }

    let img;
    props.src.other.dream_world.front_default ? img = props.src.other.dream_world.front_default :  img = props.src.front_default;

    var bg;

    return (
        <PokemonContainer id={props.id} className='pokemon-container' key={props.id}>
            <span>#{props.id}</span>
            <img src={img} alt={props.name}/>
            <h2>{props.name}</h2>
            <div className='types'>
                {props.type.map((array) => 
                    {   bg = addColorType(array.type.name)
                        {return (
                            <button style={{background: bg}} key={`${props.id}-${bg}`}>{array.type.name}</button>
                        )
                        }
                    }     
                )}
            </div>
        </PokemonContainer>
    )
}

export default Card;