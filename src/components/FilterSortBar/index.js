import { LEVELS } from "components/Consent"
import { useState } from "react"
import { useEffect } from "react"
import SortButton, { directionSortFunction, DIRECTION } from "./SortButton"

const { default: styled } = require("styled-components")

const Container = styled.div`

`

const gyrDefault = Object.keys(LEVELS);
const gyrSort = (a, b) => {
    if(a.answer === b.answer) {
        return 0;
    } else {
        return gyrDefault.indexOf(b.answer) > gyrDefault.indexOf(a.answer)  ? -1 : 1; 
    }
}

const FilterSortBar = ({availableConsents, setConsents, className}) => {

    const [sortAnswer, setSortAnswer] = useState(DIRECTION.NONE);

    useEffect(() => {
        setConsents(
            [...availableConsents]
            .sort(directionSortFunction(sortAnswer, gyrSort))
        );
    }, [availableConsents, setConsents, sortAnswer])
    
    return (
        <Container className={className}>
            <div>sort/filter</div>
            <SortButton direction={sortAnswer} setDirection={setSortAnswer} >Answer</SortButton>
        </Container>
    )
}

export default FilterSortBar;