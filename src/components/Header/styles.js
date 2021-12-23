import styled from "styled-components";

export const HeaderSC = styled.header`
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

    width: 100%;

    padding: 16px;

    font-family: "Poppins", sans-serif;
    font-size: 2em;
    text-align: center;
    letter-spacing: 0.5px;

    color: #fff;
    background-color: #a52424;
    border-radius: 0 0 20px 20px;

    a {
        text-decoration: none;
        color: inherit;

        &:visited {
            color: inherit;
        }
    }
`;
