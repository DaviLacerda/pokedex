import styled from "styled-components";

export const Container = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

    min-width: 100%;
    width: 100%;

    height: 100%;

    padding: 8px;

    font-family: "Poppins", sans-serif;
    font-size: 1em;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 900px) {
        min-height: 100vh;
    }
`;

export const PokemonContainer = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

    position: relative;
    display: flex;
    flex-direction: row;

    width: 75%;
    max-width: 1200px;

    height: 50%;
    min-height: 500px;

    padding: 16px;

    background-color: #a52424;

    border-radius: 20px;

    font-family: "Poppins", sans-serif;

    @media (max-width: 900px) {
        flex-direction: column;
    }

    a.back {
        position: absolute;
        top: -30px;
        transition: 0.5s;
        text-decoration: none;

        color: ${(props) => props.theme.fontColor};

        span {
            &:visited {
                color: inherit;
                text-decoration: none;
            }
        }

        @media (min-width: 1200px) {
            &:hover {
                transform: translateY(-12px);
            }
        }
    }

    .left {
        display: flex;
        flex-direction: column;
        gap: 20px;

        width: 100%;
        max-width: 300px;

        height: 100%;
        text-align: left;
        word-wrap: break-word;

        padding: 16px;

        @media (max-width: 600px) {
            text-align: center;
        }

        h1 {
            text-transform: uppercase;
        }

        #pokemonId {
            position: absolute;
            top: 8px;
            left: 8px;

            font-size: 0.9em;
        }

        .left__circlePokemon {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 8px;

            width: 100%;
            height: 100%;

            .left__types {
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 8px;

                width: 100%;
                text-transform: uppercase;
            }

            .circle {
                position: relative;
                width: 40vw;
                height: 40vw;

                max-width: 250px;
                max-height: 250px;
                border-radius: 50%;
                display: inline-block;
            }

            img {
                position: absolute;
                top: 0;
                left: 0;

                max-height: 300px;

                object-fit: contain;
                transition: transform 0.5s;

                @media (min-width: 1200px) {
                    &:hover {
                        transform: scale(1.1);
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .right {
        .generation {
            text-transform: uppercase;
        }

        .right__infos {
            display: flex;
            flex-direction: column;
            justify-content: center;

            width: 100%;

            .right__infos__content {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                h1 {
                    width: 50%;
                }

                p {
                    width: 50%;
                }
            }
        }

        .right__infos__evolutions__container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;

            width: 100%;

            @media (min-width: 900px) {
                flex-direction: row;
            }

            .evolution {
                display: flex;
                flex-direction: column;
                justify-content: center;

                width: 100%;
                max-width: 100px;

                a {
                    width: fit-content;
                    height: 100px;
                    transition: transform 0.5s;

                    @media (min-width: 1200px) {
                        &:hover {
                            transform: scale(1.2);
                        }
                    }
                }

                p {
                    text-align: center;
                }
            }
        }
    }
`;
