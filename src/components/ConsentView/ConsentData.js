import NameTag from "components/NameTag";
import styled from "styled-components";
import ConsentList from "./ConsentList";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const StyledConsentList = styled(ConsentList)`
    overflow: auto;
`

const ConsentData = ({data, className}) => {

    const {name, playAge, consents, pronouns, audience} = data;

    return (
        <Container id='consent-data' className={className} >
            <NameTag {...{name, playAge, pronouns, audience}} />
            <StyledConsentList {...{consents}} />
        </Container>
    )
}

export default ConsentData;