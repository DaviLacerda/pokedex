import './styles'
import { PokemonContainer } from './styles';
import colors from '../../styles/colors.json'
import { Link } from 'react-router-dom';

function Card(props) {
    let img;
    props.src.other.dream_world.front_default ? img = props.src.other.dream_world.front_default :  img = props.src.front_default;

    let colorsKey = Object.keys(colors);
    var bg = addColorType(props.type[0].type.name)

    function addColorType(param) {
        if(colorsKey.includes(param)){
            return colors[param]; 
        }
    }

    return (
            <PokemonContainer id={props.id} className='pokemon-container'>
                <Link to={`/pokemon/${props.name}`}></Link>
                <div className='upper' style={{background: bg}}>
                    <span>#{props.id}</span>
                    <div className='upper__content'>
                        <img src={img} alt={props.name}/>
                        <h2>{props.name}</h2>
                    </div>
                </div>
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