import styled from 'styled-components';


export const PokemonContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    width: 100%;
    max-width: 300px;

    height: 250px;

    position: relative;
    font-family:'Poppins',sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    border-radius: 20px;
    background-color: ${props => props.theme.cardColor};
    padding: 16px;

    .upper{
        width:100%;
        height:60%;

        position:absolute;
        top:0;

        border-radius:5px 5px 70px 70px;
        pointer-events:none;

        .upper__content{
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:20px;

            position:relative;
            top:25px;

            color: ${props => props.theme.fontColor}
        }

        h2{
            text-align:center;
            text-transform:uppercase;
        }

        img{
            height:48px;
            width:48px;
        }
    }

    span{
        position:absolute;
        top:20px;
        right:20px;

        color: ${props => props.theme.fontColor}
    }

    button{
        padding: 8px;
        color: ${props => props.theme.color};
        border: none;

        text-transform: uppercase;
        font-weight:bold;

        pointer-events:none;
    }

    .types{
        display:flex;
        flex-direction:row;
        gap:4px;

        position:absolute;
        bottom:40px;
    }

    a{
        position:absolute;

        width:100%;
        height:100%;

        text-decoration:none;
        color:inherit;

        &:visited{
            color:inherit;
        }
    }

    @media(min-width:1200px){
        transition: transform .5s;

        &:hover{
            cursor:pointer;
            transform:translateY(-10px);
        }
    }
`;