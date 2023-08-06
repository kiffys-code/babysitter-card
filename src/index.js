import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalProvider } from 'styled-react-modal';
import ThemeWrapper from 'components/ThemeWrapper';
import { routeConfig } from 'routes';
import GlobalStyles from 'config/GlobalStyles';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ModalProvider>
      <ThemeWrapper>
        <RouterProvider router={createHashRouter(routeConfig)} />
      </ThemeWrapper>
    </ModalProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();