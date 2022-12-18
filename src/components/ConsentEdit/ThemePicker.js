import styled from "styled-components";
import Button from "components/shared/Button";
import themes, { defaultTheme } from "config/themes";
import IconSelect from "../shared/input/IconSelect";

const ColorButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    padding: 0 0.5rem;
    padding-bottom: 0.5rem;
    width: 3.8rem;
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

const ThemePicker = ({control}) => {

    const options = Object.keys(themes).map(name => ({
        value: name,
        label: <ColorButtonContainer>
            <ColorButtonLabel>{name}</ColorButtonLabel>
            <ColorButton theme={themes[name]} />
        </ColorButtonContainer> 
    }));

    return (
        <IconSelect
            control={control} 
            name='theme'
            label='Color'
            defaultValue={defaultTheme}
            options={options}
        />
    )
}

export default ThemePicker;