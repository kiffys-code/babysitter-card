import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import App from './components/App';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a, a:visited {
    color: inherit;
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
      <App />
    </ModalProvider>
  </React.StrictMode>
);