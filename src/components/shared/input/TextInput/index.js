import { useController } from "react-hook-form";
import { Container, Input } from "./styled";

const TextInput = ({control, name, label, placeholder, defaultValue='', className}) => {

    const {field} = useController({
        name: name, 
        control: control, 
        defaultValue: defaultValue
    });

    return (
        <Container>
            <label htmlFor={name}>{label}</label>
            <Input type="text" 
                className={className} 
                placeholder={placeholder}
                {...field} 
            />
        </Container>
    )
}

export default TextInput;