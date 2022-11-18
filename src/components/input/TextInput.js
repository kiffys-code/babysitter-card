import { useController } from "react-hook-form";
import styled from "styled-components";

const Input = styled.input`
    
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    text-align: center;

    &:active, &:focus {
        border: solid 1px black;
        background: #ccc;
    }

`;

const TextInput = ({control, name, defaultValue=''}) => {

    const {field} = useController({
        name: name, 
        control: control, 
        defaultValue: defaultValue
    });

    return (
        <Input type="text" {...field} />
    )
}

export default TextInput;