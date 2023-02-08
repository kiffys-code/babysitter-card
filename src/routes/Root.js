import styled from "styled-components";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";
import Legend from "components/Legend";

const App = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.background};
    padding-top: 1rem;    
`;

const Content = styled.div`
    flex: 1 0 0;
    padding: 1.5rem 1rem;
    padding-bottom: 0;

    @media print {
        overflow: visible;
    }
`

const FooterContent = styled.div`
    padding: 0.5rem 0;

    @media print {
        display: none;
    }
`

const StyledLegend = styled(Legend)`
    display: none;

    @media print {
        display: block;
        padding-top: 5rem;
    }
`

const Root = () => {

    return (
        <App id='app' >
            <Content id='content'>
                <Outlet />
            </Content>
            <FooterContent>
                <Footer id='footer'/>
            </FooterContent>
            <StyledLegend />
        </App>
    );
}

export default Root;