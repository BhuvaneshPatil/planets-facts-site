import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
	padding: 0;
	margin: 0;
	font-family: "Antonio";
	width: 100vw;
	height: 100vh;
	background: rgb(7, 7, 36) url("/images/background-stars.svg") repeat scroll 0% 0%;
}

* {
	box-sizing: border-box;
    padding: 0;
    margin: 0;
}

`;

export default GlobalStyles;
