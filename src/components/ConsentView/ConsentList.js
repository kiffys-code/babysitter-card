import styled from "styled-components";
import ConsentListItem from "components/ConsentView/ConsentListItem";

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

const ConsentList = ({consents, className}) => {

    const renderedConsents = consents && consents.length > 0 ? consents.map((item, index) => 
        <ConsentListItem 
            consent={item}
            key={index}
        />
    ) : <NewConsentsMessage>Click the Edit Icon to Begin!</NewConsentsMessage>;

    return (
        <Container className={className}>
            {renderedConsents}
        </Container>
    );
}

export default ConsentList;