import { useFieldArray } from "react-hook-form";
import styled from "styled-components";
import ConsentListItem from "components/ConsentListItem";
import Button from "components/shared/Button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem;
    ${({edit}) => edit ? `
        gap: 1rem;
    ` : `
    `}
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

const ConsentList = ({form, edit}) => {

    const {control} = form;
    const {fields, remove, append} = useFieldArray({
        name: 'consents',
        control: control,
        keyName: '_id',
    });

    const renderedConsents = fields && fields.length > 0 ? fields.map((item, index) => 
        <ConsentListItem 
            key={item._id} 
            control={control}
            name={`consents[${index}]`}
            edit={edit} 
            consent={item} 
            deleteConsent={() => remove(index)}
        />
    ) : ( !edit ? <NewConsentsMessage>Click the Edit Icon to Begin!</NewConsentsMessage> : null)

    return (
        <Container edit={edit}>
            {renderedConsents}
            {edit &&
                <NewConsentButton
                    onClick={() => append(DEFAULT_CONSENT)}
                >
                    New Consent
                </NewConsentButton>
            }
        </Container>
    );
}

export default ConsentList;