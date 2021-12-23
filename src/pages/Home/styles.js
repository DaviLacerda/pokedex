import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;
    gap:20px;

    width:75%;
    max-width:100vw;

    height: auto;

    padding:32px;
    background-color: transparent;

    @media(max-width:900px){
        flex-direction:column;
    }
`;