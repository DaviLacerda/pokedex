import styled from "styled-components";

export const ButtonStyled = styled.button`
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

    width: 108px;
    padding: 10px;

    font-family: "Poppins", sans-serif;
    font-weight: bold;

    background-color: #fff;
    color: #000;

    margin-bottom: 32px;

    border: 1px solid #000;
    border-radius: 20px;
    transition: 0.3s;

    &:active {
        background-color: #801d1d;
    }

    @media (min-width: 1200px) {
        &:hover {
            cursor: pointer;
            background-color: #a52424;
            color: #fff;
        }
    }
`;
