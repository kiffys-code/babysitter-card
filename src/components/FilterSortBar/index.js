import { LEVELS } from "components/Consent"
import Icon from "components/shared/Icon"
import { useState } from "react"
import { useEffect } from "react"
import SortButton, { directionSortFunction, DIRECTION } from "./SortButton"
import { StyledButton } from "./styles"
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 5px;
`

const ClearButton = styled(StyledButton)`
    & img {
        height: 1em;
        width: 1em;
    }
`

const gyrDefault = Object.keys(LEVELS);
const gyrSort = (a, b) => {
    if(a.answer === b.answer) {
        return 0;
    } else {
        return gyrDefault.indexOf(b.answer) > gyrDefault.indexOf(a.answer)  ? -1 : 1; 
    }
}

const FilterSortBar = ({availableConsents=[], setConsents, className}) => {

    const [sortAnswer, setSortAnswer] = useState(DIRECTION.ASC);

    useEffect(() => {
        setConsents(
            [...availableConsents]
            .sort(directionSortFunction(sortAnswer, gyrSort))
        );
    }, [availableConsents, setConsents, sortAnswer])

    const handleClear = () => {
        setSortAnswer(DIRECTION.NONE);
    }
    
    return (
        <Container className={className}>
            <SortButton 
                direction={sortAnswer} 
                setDirection={setSortAnswer} 
            >
                Answer
            </SortButton>
            <ClearButton onClick={handleClear}>
                Clear <Icon src={require('assets/img/close.png')} alt='close' />
            </ClearButton>
        </Container>
    )
}

export default FilterSortBar;