import ConsentList from "components/ConsentList";
import EditToggle from "components/EditToggle";
import NameTag from "components/NameTag";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`

`

const EditContainer = styled.div`
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
`;

const ConsentViewPage = ({}) => {

    const {data} = useLoaderData();
    const {name, playAge, consents} = data;

    return (
        <Container>
            <NameTag {...{name, playAge}} />
            <ConsentList {...{consents}} />
            <EditContainer>
                <EditToggle edit={false} to='/change' />
            </EditContainer>
        </Container>
    )
}

export default ConsentViewPage;