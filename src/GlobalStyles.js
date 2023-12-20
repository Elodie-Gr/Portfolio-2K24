// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Libre Caslon Text';
    src: url('./fonts/LibreCaslonText-Regular.woff') format('woff'),
         url('./fonts/LibreCaslonText-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Libre Caslon Text', serif;
    margin: 0;
    padding: 0;
  }
  
`;

export default GlobalStyles;
