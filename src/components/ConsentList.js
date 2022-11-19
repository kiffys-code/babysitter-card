import { useFieldArray } from "react-hook-form";
import styled from "styled-components";
import { Levels } from "./Consent";
import ConsentListItem from "./ConsentListItem";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem;
    ${({edit}) => edit ? `
        gap: 1rem;
    ` : `
    `}
    width: 100%;
`

const NewConsentButton = styled.button`
    font-size: 1.2rem;
    padding: 1rem 2rem;
    border-radius: 10px;
    background-color: #5cb3ed;
    color: #fff;
`

const ConsentList = ({form, edit}) => {

    const {control} = form;
    const {fields, update, remove, append} = useFieldArray({
        name: 'consents',
        control: control,
        keyName: '_id'
    });

    const renderedConsents = fields.map((item, index) => 
        <ConsentListItem 
            key={item._id} 
            control={control} 
            edit={edit} 
            consent={item} 
            prefix={`consents[${index}]`}
            updateAnswer={(val) => update(index, val)}
            deleteConsent={() => remove(index)}
        />
    );

    return (
        <Container edit={edit}>
            {renderedConsents}
            {edit &&
                <NewConsentButton
                    onClick={() => append({ask: '', answer: Levels.yellow})}
                >
                    New Consent
                </NewConsentButton>
            }
        </Container>
    );
}

export default ConsentList;