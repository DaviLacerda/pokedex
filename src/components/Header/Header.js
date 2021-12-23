import { HeaderSC } from "./styles";

function Header(props) {
    return (
        <HeaderSC>
            <a href={props.link}>{props.children}</a>
        </HeaderSC>
    );
}

export default Header;
