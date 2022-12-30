import NameTag from "components/NameTag";
import { useState } from "react";
import styled from "styled-components";
import ConsentList from "./ConsentList";
import FilterSortBar from "../FilterSortBar";

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

    const [sortedConsents, setSortedConsents] = useState(consents);

    return (
        <Container id='consent-data' className={className} >
            <NameTag {...{name, playAge, pronouns, audience}} />
            <FilterSortBar {...{
                availableConsents: consents, 
                setConsents: setSortedConsents
            }} />
            <StyledConsentList {...{consents: sortedConsents}} />
        </Container>
    )
}

export default ConsentData;