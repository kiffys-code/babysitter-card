import EditToggle from "components/EditToggle";
import NameTag from "components/NameTag";
import styled from "styled-components";
import ConsentList from "./ConsentList";

const Container = styled.div`

`

const FloatContainer = styled.div`
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
`;

const ConsentView = ({data}) => {

    const {name, playAge, consents, pronouns} = data;

    return (
        <Container>
            <NameTag {...{name, playAge, pronouns}} />
            <ConsentList {...{consents}} />
            <FloatContainer>
                <EditToggle edit={false} to='/change' />
            </FloatContainer>
        </Container>
    )
}

export default ConsentView;