import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0;
    font-family: sans-serif;
    font-size: 1.5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default GlobalStyle