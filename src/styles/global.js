import { createGlobalStyle } from "styled-components"

const colors = {
  primary: "#ECE5DD",
  secondary: "#075E54",
}

const GlobalStyles = createGlobalStyle`
* {
    margin:0;
    padding:0;
    border:0;
    box-sizing: border-box;
    font-family: sans-serif;
}
body{
    background: ${colors.primary};
}
`

export default GlobalStyles
