import { useController } from "react-hook-form";
import { Container, Input } from "./styled";

const TextInput = ({control, name, label, defaultValue='', className, edit}) => {

    const {field} = useController({
        name: name, 
        control: control, 
        defaultValue: defaultValue
    });

    return (
        <Container>
            {edit && <label htmlFor={name}>{label}</label>}
            <Input type="text" 
                className={className} 
                disabled={!edit} 
                edit={edit} 
                {...field} 
            />
        </Container>
    )
}

export default TextInput;