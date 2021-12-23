import { InputStyled } from "./styles.js";
import Icon from "../../assets/search.png";

function Input({ type, placeholder, onchange }) {
    return (
        <InputStyled>
            <img src={Icon} alt="Search Icon"></img>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onchange}
            ></input>
        </InputStyled>
    );
}

export default Input;
