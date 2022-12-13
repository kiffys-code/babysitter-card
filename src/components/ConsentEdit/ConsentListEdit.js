import { useFieldArray } from "react-hook-form";
import styled from "styled-components";
import Button from "components/shared/Button";
import ConsentListItemEdit from "./ConsentListItemEdit";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem;
    gap: 1rem;
`

const NewConsentButton = styled(Button)`
    font-size: 1.2rem;
    padding: 1rem 2rem;
    border-radius: 10px;
    background-color: #5cb3ed;
    color: #fff;
`

const NewConsentsMessage = styled.p`
    text-align: center;
    font-style: italic;
    font-size: 1rem;
`

const DEFAULT_CONSENT = {
    ask: '', 
    answer: 'yellow'
}

const ConsentListEdit = ({form}) => {

    const {control} = form;
    const {fields, remove, append} = useFieldArray({
        name: 'consents',
        control: control,
        keyName: '_id',
    });

    const renderedConsents = fields && fields.length > 0 ? fields.map((item, index) => 
        <ConsentListItemEdit
            key={item._id} 
            control={control}
            name={`consents[${index}]`}
            consent={item} 
            deleteConsent={() => remove(index)}
        />
    ) : <NewConsentsMessage>Click the Edit Icon to Begin!</NewConsentsMessage>

    return (
        <Container>
            {renderedConsents}
            <NewConsentButton
                onClick={() => append(DEFAULT_CONSENT)}
            >
                New Consent
            </NewConsentButton>
        </Container>
    );
}

export default ConsentListEdit;