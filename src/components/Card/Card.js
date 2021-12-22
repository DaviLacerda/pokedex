import './styles'
import { PokemonContainer } from './styles';
import colors from '../../styles/colors.json'
import { Link } from 'react-router-dom';

function Card(props) {
    let img;
    props.src.other.dream_world.front_default ? img = props.src.other.dream_world.front_default :  img = props.src.front_default;

    let colorsKey = Object.keys(colors);
    var bg;

    function addColorType(param) {
        if(colorsKey.includes(param)){
            return colors[param]; 
        }
    }

    return (
            <PokemonContainer id={props.id} className='pokemon-container'>
                <Link to={`/pokemon/${props.name}`}></Link>
                <span>#{props.id}</span>
                <img src={img} alt={props.name}/>
                <h2>{props.name}</h2>
                <div className='types'>
                    {props.type.map((array) => 
                        {   bg = addColorType(array.type.name)
                            {
                                return <button style={{background: bg}} key={`${props.id}-${bg}`}>{array.type.name}</button> 
                            }
                        }     
                    )}
                </div>
        </PokemonContainer>
    )
}

export default Card;