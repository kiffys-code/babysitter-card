import EditToggle from "components/EditToggle";
import NameTag from "components/NameTag";
import Export from "components/Share/Export";
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

    const {name, playAge, consents, pronouns, audience} = data;

    return (
        <Container>
            <NameTag {...{name, playAge, pronouns, audience}} />
            <ConsentList {...{consents}} />
            <Export {...{data}} />
            <FloatContainer>
                <EditToggle edit={false} to='/change' />
            </FloatContainer>
        </Container>
    )
}

export default ConsentView;