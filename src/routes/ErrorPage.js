import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <Container>
            <div>
                <h1>Uh-Oh!</h1>
                <p>Looks like the app hadda' accident!</p>
                <p>
                    <i>{error.status}: {error.statusText}</i>
                </p>
            </div>
        </Container>
    )
}

export default ErrorPage;