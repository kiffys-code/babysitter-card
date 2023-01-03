import styled from "styled-components";
import { ConsentIcon } from "components/Consent";

const Container = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 100%;

    & img {
        height: 3rem;
    }

    & .value {
        font-size: 1.4rem;
        font-weight: bold;
    }

    & .explanation {
        font-size: 1.2rem;
        font-style: italic;
    }

`
const ConsentInfo = ({level, onClick}) => {

    return (
        <Container onClick={onClick} >
            <ConsentIcon level={level}/>
            <div>
                <h2 className="value">{level.value}</h2>
                <p className="explanation">{level.explanation}</p>
            </div>
        </Container>
    );
}

export default ConsentInfo;