import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${props => props.theme.background}; 
        --webkit-font-smoothing: antialised;
    }

    border-style, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    .container {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
    }

`