import React from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router';
import { routeConfig } from 'routes';
import { ModalProvider } from 'styled-react-modal';
import { ReduxProvider, ColorThemeProvider } from "../../src/providers";

export const AppHarness = ({children}) => (
    <>
        <ReduxProvider>
            <ColorThemeProvider>
                <ModalProvider>
                    {children}
                </ModalProvider>
            </ColorThemeProvider>
        </ReduxProvider>
    </>
)

export const createAppAtRoute = (route) => {

    const router = createMemoryRouter(routeConfig, {initialEntries: route ? [route] : ['/'] });
    return (
        <AppHarness>
            <RouterProvider router={router} />
        </AppHarness>
    );
}