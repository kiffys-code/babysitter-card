import styled from "styled-components";
import ConsentListItem from "components/ConsentListItem";
import Button from "components/shared/Button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem;
`

const NewConsentsMessage = styled.p`
    text-align: center;
    font-style: italic;
    font-size: 1rem;
`

const ConsentList = ({consents}) => {

    const renderedConsents = consents && consents.length > 0 ? consents.map((item, index) => 
        <ConsentListItem 
            consent={item} 
        />
    ) : <NewConsentsMessage>Click the Edit Icon to Begin!</NewConsentsMessage>;

    return (
        <Container>
            {renderedConsents}
        </Container>
    );
}

export default ConsentList;