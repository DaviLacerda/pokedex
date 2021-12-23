import { createGlobalStyle } from "styled-components"

export const dark = {
    body:'#161616',
    fontColor:'#fff',
    cardColor:'#0f0f0f',
    color:'#000',
}

export const light = {
    body:'#E0E0E0',
    fontColor:'#000',
    cardColor:'#fff',
    color:'#fff',
}

export const GlobalStyles = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        width:100%;
        min-height:100vh;
        height:fit-content;

        background-color: ${props => props.theme.body}
    }

    #root{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:30px;

        color: ${props => props.theme.fontColor}
    }

    .theme__switch{
        position:absolute;
        top:16px;
        right:16px;
    }

    ::-webkit-scrollbar {
        width: 0px;
    }
`