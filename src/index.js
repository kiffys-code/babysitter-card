import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalProvider } from 'styled-react-modal';
import ThemeWrapper from 'components/ThemeWrapper';
import AppRoutes from 'routes';
import GlobalStyles from 'config/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ModalProvider>
      <ThemeWrapper>
        <AppRoutes />
      </ThemeWrapper>
    </ModalProvider>
  </React.StrictMode>
);