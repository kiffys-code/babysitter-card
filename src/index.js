import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalProvider } from 'styled-react-modal';
import { routeConfig } from 'routes';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import store from './features/store';
import { initializeSw, updateAvailableForSw } from './features/serviceworkers/serviceWorkerSlice';
import { ColorThemeProvider, ReduxProvider } from 'providers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <ColorThemeProvider>
        <ModalProvider>
          <RouterProvider router={createHashRouter(routeConfig)} />
        </ModalProvider>
      </ColorThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
  onSuccess: (registration) => store.dispatch(initializeSw(registration)),
  onUpdate: (registration) => store.dispatch(updateAvailableForSw(registration))
});