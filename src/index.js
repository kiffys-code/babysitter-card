import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalProvider } from 'styled-react-modal';
import ThemeWrapper from 'components/ThemeWrapper';
import { routeConfig } from 'routes';
import GlobalStyles from 'config/GlobalStyles';
import { createHashRouter, RouterProvider } from 'react-router-dom';

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