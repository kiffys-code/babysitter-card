import React, {useEffect} from "react";
import styled from "styled-components";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";
import Legend from "components/Legend";
import HamburgerMenu from "components/HamburgerMenu";
import MenuContainer from "components/shared/MenuContainer";
import { useLocation } from "react-router-dom";
import withOfflineFunctionality from "hooks/withOfflineFunctionality";
import Button from "components/shared/Button";
import env from "config/env";

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

const StyledMenuContainer = styled(MenuContainer)`
    @media print {
        display: none;
    }
`

const Root = ({appUpdatePending, doAppUpdate, message}) => {

    const location = useLocation();
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then((registration) => {
                registration.update();
            });
        }
    }, [location]);

    console.log("App loaded with environment:");
    console.log(env);
    console.log({appUpdatePending});
    console.log({message})

    return (
        <App id='app' >
            <StyledMenuContainer>
                <HamburgerMenu />
            </StyledMenuContainer>
            <Content id='content'>
                <Outlet />
            </Content>
            <FooterContent>
                <Footer id='footer'/>
                { appUpdatePending ? <Button onClick={doAppUpdate}>Update Available! Click to install</Button> : null}
            </FooterContent>
            <StyledLegend />
        </App>
    );
}

export default withOfflineFunctionality(Root);