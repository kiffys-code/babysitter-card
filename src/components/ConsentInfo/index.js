import styled from "styled-components";
import { Icon } from "../Consent";

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

    ${({edit}) => edit ? `
        border: 1px solid #ddd;
        padding: 1rem 1.5rem;
        border-radius: 5px;
    ` : ``}

`
const ConsentInfo = ({level, onClick, edit}) => {

    return (
        <Container onClick={onClick} edit={edit} >
            <Icon level={level}/>
            <div>
                <h2 className="value">{level.value}</h2>
                <p className="explanation">{level.explanation}</p>
            </div>
        </Container>
    );
}

export default ConsentInfo;