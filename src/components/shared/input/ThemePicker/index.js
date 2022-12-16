import { useController } from "react-hook-form";
import styled from "styled-components";
import Button from "components/shared/Button";
import themes, { defaultTheme } from "config/themes";

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    align-items: center;
`

const Label = styled.label`
    align-self: flex-end;
`

const ColorButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

const ColorButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    padding: 0 0.5rem;
`

const ColorButtonLabel = styled.span`
    font-size: 0.8rem;
`

const ColorButton = styled(Button)`
    background-color: ${({theme}) => theme.primary};
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
`;

const ThemePicker = ({form}) => {

    const {control} = form;
    const {field} = useController({
        name: 'theme', 
        control, 
        defaultValue: defaultTheme
    });

    const onOptionClick = (val) => {
        field.onChange(val);
    }

    const renderedOptions = Object.keys(themes).map(name => 
        <ColorButtonContainer key={name}>
            <ColorButtonLabel>{name}</ColorButtonLabel>
            <ColorButton 
                theme={themes[name]}
                onClick={() => onOptionClick(name)}
            />
        </ColorButtonContainer>
    );

    return (
        <Container>
            <Label>Color</Label>
            <ColorButtonsContainer>
                {renderedOptions}
            </ColorButtonsContainer>
        </Container>
    );
}

export default ThemePicker;