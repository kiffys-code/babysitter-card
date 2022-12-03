import { useController } from "react-hook-form";
import styled from "styled-components";
import Button from "../input/Button";
import themes, { defaultTheme } from "../themes";

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    align-items: center;
`

const Label = styled.label`
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

const ThemePicker = ({form, edit}) => {

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
        <ColorButtonContainer>
            <ColorButtonLabel>{name}</ColorButtonLabel>
            <ColorButton 
                theme={themes[name]}
                onClick={() => onOptionClick(name)}
            />
        </ColorButtonContainer>
    );

    return edit ? 
        <Container>
            <Label>Color Theme</Label>
            <ColorButtonsContainer>
                {renderedOptions}
            </ColorButtonsContainer>
        </Container>
    : null;
}

export default ThemePicker;