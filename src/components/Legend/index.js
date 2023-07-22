import { LEVELS } from "components/Consent";
import ConsentInfo from "components/ConsentInfo";
import styled from "styled-components";

const Container = styled.div`
    h2 {
        font-size: 1.5rem;
    }
`

const StyledConsentInfo = styled(ConsentInfo)`
    & img {
        height: 2rem;
    }

    & .value {
        font-size: 1.2rem;
    }

    & .explanation {
        font-size: 1.2rem;
    }
`

const Legend = ({className}) => {

    const levels = Object.keys(LEVELS).map(level =>
        <StyledConsentInfo key={level + "-legend-item"} level={LEVELS[level]} />  
    );

    return <Container className={className}>
        <h2>Legend:</h2>
        {levels}
    </Container>
}

export default Legend;