import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    body{
        width:100%;
        min-height:100vh;
        height:fit-content;

        background-color:#191919;
    }

    #root{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:30px;
    }

    ::-webkit-scrollbar {
        width: 0px;
    }
`;