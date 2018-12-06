import { createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.css";

const GlobalStyle = createGlobalStyle` 

* {

    margin: 0;
    padding: 0;

    /* O box Sizing serve para quando colocarmos um padding
    em um elemento ele não fique maior mas só ocupe o espaço dentro dele */
    box-sizing: border-box;
    outline: 0;

}

body {

    background-color: #F5F5F5;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
}

`;

export default GlobalStyle;
