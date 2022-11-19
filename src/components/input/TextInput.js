import { useController } from "react-hook-form";
import styled from "styled-components";

const Input = styled.input`
    
    border: none;
    padding: 1rem 0rem;
    font-size: 1.2rem;
    text-align: center;
    ${({edit}) => edit ? `
        border: solid 1px #333;
        border-radius: 10px;
    ` : `
        
    `}

    &:disabled {
        background-color: inherit;
        color: inherit;
    }

`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TextInput = ({control, name, label, defaultValue='', className, edit}) => {

    const {field} = useController({
        name: name, 
        control: control, 
        defaultValue: defaultValue
    });

    return (
        <Container>
            {edit && <label htmlFor={name}>{label}</label>}
            <Input type="text" className={className} disabled={!edit} edit={edit} {...field} />
        </Container>
    )
}

export default TextInput;