import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import App from './components/App';
import ThemeWrapper from './components/ThemeWrapper';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: AyeshaDisplay;
    src: url(${require('./AyeshaDisplay-axnq5.ttf')});
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    // color: black;
    color: #fff;
    text-shadow: black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px;
    font-family: "Comic Sans", cursive;
  }

  a, a:visited {
    color: none;
  }

  h1, h2, h3 {
    font-weight: normal;
  }

`;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ModalProvider>
      <ThemeWrapper />
    </ModalProvider>
  </React.StrictMode>
);