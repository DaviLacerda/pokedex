import { ButtonStyled } from "./styles";

function Button(props) {
    return <ButtonStyled id={props.id}>props.children</ButtonStyled>;
}

export default Button;
