import styled from "styled-components";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.background};
`;

const Root = () => {

    return (
        <Container id='app' >
            <Outlet />
            <Footer />
        </Container>
    );
}

export default Root;