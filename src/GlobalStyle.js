import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  body{
    background-color: #121212;
    color:#fff;
  }
`

export default GlobalStyles;