import { useFieldArray } from "react-hook-form";
import styled from "styled-components";
import ConsentListItem from "./ConsentListItem";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem;
    ${({edit}) => edit ? `
        gap: 1rem;
    ` : `
    `}
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
            delete={() => remove(index)}
        />
    );

    return (
        <Container edit={edit}>
            {renderedConsents}
        </Container>
    );
}

export default ConsentList;