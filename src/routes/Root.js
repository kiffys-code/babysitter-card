import styled from "styled-components";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

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
    overflow: hidden;
`

const Root = () => {

    return (
        <App id='app' >
            <Content id='content'>
                <Outlet />
            </Content>
            <Footer id='footer'/>
        </App>
    );
}

export default Root;