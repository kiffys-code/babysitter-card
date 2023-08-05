import ThemeWrapper from 'components/ThemeWrapper';
import GlobalStyles from 'config/GlobalStyles';
import { RouterProvider, createMemoryRouter } from 'react-router';
import { routeConfig } from 'routes';
import { ModalProvider } from 'styled-react-modal';

export const AppHarness = ({children}) => (
    <>
        <GlobalStyles />
        <ModalProvider>
            <ThemeWrapper>
                {children}
            </ThemeWrapper>
        </ModalProvider>
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