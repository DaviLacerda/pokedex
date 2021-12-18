import styled from 'styled-components';

export const PokemonContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    width: 100%;
    max-width: 300px;

    height: 200px;

    position: relative;
    font-family:'Poppins',sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    

    border: 1px solid #a52424;
    border-radius: 20px;
    background-color: #a52424;
    padding: 16px;

    transition: transform .5s;

    h2{
        text-align:center;
        text-transform:uppercase;
    }

    img{
        height:48px;
        width:48px;
    }

    span{
        position:absolute;
        top:20px;
        right:20px;
    }

    button{
        padding: 8px;
        color: #fff;
        border: none;
        text-transform: uppercase;
        pointer-events:none;
    }

    .types{
        display:flex;
        flex-direction:row;
        gap:4px;
    }

    &:hover{
        cursor:pointer;
        transform:translateY(-10px);
    }
`;