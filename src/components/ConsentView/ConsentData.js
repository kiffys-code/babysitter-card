import NameTag from "components/NameTag";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ConsentList from "./ConsentList";
// import FilterSortBar, { gyrSort } from "../FilterSortBar";
import { gyrSort } from "../FilterSortBar";
// import RoundedButton from "components/shared/RoundedButton";
// import Icon from "components/shared/Icon";
import SortButton, { DIRECTION, directionSortFunction } from "components/FilterSortBar/SortButton";
import { getGyrSort, setGyrSort } from "config/storage";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media print {
        overflow: visible;
    }
`

const StyledConsentList = styled(ConsentList)`
    padding: 0.25rem 0.5rem;
`

const ConsentListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
`

// const FilterButton = styled(RoundedButton)`
//     height: 3em;
//     width: 3em;

//     & img {
//         height: 1.5em;
//         width: 1.5em; 
//     }
// `

// // Instead of not rendering the component, 
// // we hide visually so it keeps its state
// const SortBarContainer = styled.div`
//     padding: 0 0.5rem;
//     display: ${({show}) => show ? 'inherit' : 'none'};
// `

// const StyledFilterSortBar = styled(FilterSortBar)`
//     width: 100%;
// `

const StyledSortButton = styled(SortButton)`
    @media print {
        display: none;
    }
`

const ConsentData = ({data, className}) => {

    const {name, playAge, consents=[], pronouns, audience} = data;

    const [sortedConsents, setSortedConsents] = useState(consents || []);
    // const [showFilterSort, setShowFilterSort] = useState(false);
    const [sortAnswer, setSortAnswer] = useState(getGyrSort() || DIRECTION.ASC);

    const handleSetSortAnswer = (direction) => {
        setSortAnswer(direction);
        setGyrSort(direction);
    }

    useEffect(() => {
        if(consents && consents.length > 0) {
            setSortedConsents(
                [...consents]
                .sort(directionSortFunction(sortAnswer, gyrSort))
            );
        }
    }, [consents, setSortedConsents, sortAnswer])

    const renderedConsents = sortedConsents && sortedConsents.length > 0 ? 
        <>
            <ConsentListHeader>
                    <h2>Consent Guide</h2>
                    <StyledSortButton 
                        direction={ sortAnswer} 
                        setDirection={handleSetSortAnswer} 
                    >
                        Color
                    </StyledSortButton>
                    {/* <FilterButton onClick={() => setShowFilterSort(!showFilterSort)}>
                        <Icon src={require('./filter.png')} alt='sort/filter' />
                    </FilterButton> */}
                </ConsentListHeader>
                {/* <SortBarContainer show={showFilterSort}>
                    <StyledFilterSortBar {...{
                        availableConsents: consents, 
                        setConsents: setSortedConsents
                    }}/>
                </SortBarContainer> */}
                <StyledConsentList {...{consents: sortedConsents}} />
        </> : null;

    return (
        <Container id='consent-data' className={className} >
            <NameTag {...{name, playAge, pronouns, audience}} />
            {renderedConsents}
        </Container>
    )
}

export default ConsentData;