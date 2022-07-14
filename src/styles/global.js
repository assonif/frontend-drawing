import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "Virgil"; 
  src: local("Virgil"),
    url("./fonts/Virgil.woff2") format("woff2");
}

body {
  background: #ffffff;
  -webkit-font-smoothing: antialiased;
}

body,
input,
button {
  font: 16px Roboto, sans-serif;
}

#root {
  margin: 0 auto;
}
button {
  cursor: pointer;
}

*::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: #f4f3ee;
}

*::-webkit-scrollbar
{
  width: 12px;
  background-color: #f4f3ee;
}

*::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: 0 0 6px rgba(0,0,0,.5);
  background-color: #ea526f;
}
`;
