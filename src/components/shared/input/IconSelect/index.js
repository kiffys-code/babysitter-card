import { useController } from "react-hook-form";

const { default: styled } = require("styled-components");

const Container = styled.div`
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
`

const Label = styled.label`
    
`

const Options = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
`

const Option = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({active}) => active 
        ? 'rgba(0, 0, 0, 0.10)' 
        : 'rgba(255, 255, 255, 0.10)'
    };
    border-radius: 10px;
`

const FlatSelect = ({control, name, label, defaultValue, options, className}) => {
    const {field} = useController({name, control, defaultValue});

    const onOptionClick = (val) => {
        field.onChange(val);
    }

    const renderedOptions = options.map(it =>
        <Option 
            onClick={() => onOptionClick(it.value)} 
            active={it.value===field.value}
        >
            {it.label}
        </Option>
    );

    return (
        <Container className={className}>
            <Label>{label}</Label>
            <Options>{renderedOptions}</Options>
        </Container>
    );

}

export default FlatSelect;