import styled from "styled-components";

export const InputStyled = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    width: 100%;
    max-width: 230px;
    height: 40px;

    margin: 0 20px;
    padding: 8px;

    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 20px;

    img {
        width: 16px;
        height: 16px;
    }

    input {
        width: 100%;
        padding: 8px;

        font-family: "Poppins", sans-serif;

        background-color: #fff;
        color: #000;
        border: none;
        outline: none;

        &::placeholder {
            text-align: left;
            color: #000;
        }
    }
`;
