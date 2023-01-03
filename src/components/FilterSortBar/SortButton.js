import { StyledButton } from "./styles";
import Icon from 'components/shared/Icon';
import styled from "styled-components";

const StyledIcon = styled(Icon)`
    height: 1rem;
    width: 1rem;
    padding: 0;
    opacity: ${({active}) => active 
        ? '1' 
        : '0.3'
    };
`

const IconStack = styled.div`
    display: flex;
    flex-direction: column;
`

export const directionSortFunction = (direction, ascFunc) => {
    if(direction === DIRECTION.ASC) {
        return ascFunc;
    } else if (direction === DIRECTION.DESC) {
        return (a, b) => ascFunc(a, b) * -1;
    } else {
        return (a, b) => 0;
    }
}
export const DIRECTION = {
    'ASC': 'ASC',
    'DESC': 'DESC',
    'NONE': 'NONE'
}

const SortButton = ({direction, setDirection, children, className}) => {

    const handleClick = () => {
        const directions = Object.keys(DIRECTION); 
        const currIndex = directions.indexOf(direction);
        const nextDirection = directions[currIndex + 1] 
            ? directions[currIndex + 1] 
            : directions[0]; 
        setDirection(nextDirection)
    }

    return (
        <StyledButton onClick={handleClick} className={className} >
            <IconStack>
                <StyledIcon src={require('./caret-up.png')} alt='up' active={direction === DIRECTION.ASC} />
                <StyledIcon src={require('./caret-down.png')} alt='descending' active={direction === DIRECTION.DESC} />
            </IconStack>
            {children}
        </StyledButton>
    )
}

export default SortButton;