import styled from 'styled-components';

export const Header = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    
    width:100%;

    padding:16px;

    font-family:'Poppins', sans-serif;
    font-size:2em;
    text-align:center;
    letter-spacing:.5px;

    color:#fff;
    background-color:#a52424;
    border-radius:0 0 20px 20px;
`;

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;
    gap:8px;

    width:75%;
    max-width:1300px;

    min-height:100vh;
    height: auto;

    margin:32px;
    padding:32px;
    background-color: transparent;
`;