import { render } from '@testing-library/react';
import ThemeWrapper from 'components/ThemeWrapper';
import GlobalStyles from 'config/globalStyles';
import { ModalProvider } from 'styled-react-modal';

const Wrapper = ({children}) => (
    <>
        <GlobalStyles />
        <ModalProvider>
            <ThemeWrapper>
                {children}
            </ThemeWrapper>
        </ModalProvider>
    </>
)

const customRender = (ui, options) => {
    return render(ui, {
        wrapper: Wrapper, 
        ...options
    });
}

export * from '@testing-library/react';

export {customRender as render};
