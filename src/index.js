import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import ThemeWrapper from './components/ThemeWrapper';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: AyeshaDisplay;
    src: url(${require('./AyeshaDisplay-axnq5.ttf')});
  }
  
  @font-face {
    font-family: OpenDyslexic;
    src: url(${require('./OpenDyslexic-Regular.otf')});
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #fff;
    text-shadow: black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px;
    font-family: OpenDyslexic, Verdana, sans-serif;
  }

  a, a:visited {
    color: none;
  }

  h1, h2, h3 {
    font-weight: normal;
  }

  body {
    height: 100vh;
    width: 100vw;
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