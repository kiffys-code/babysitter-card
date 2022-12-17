import { Icon, LEVELS } from "components/Consent";
import IconSelect from 'components/shared/input/IconSelect';
import styled from "styled-components";

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 5rem;
`

const IconLabel = styled.label`

`

const StyledIcon = styled(Icon)`
    height: 2rem;
`

const AnswerPicker = ({control, name}) => {

    const options = Object.keys(LEVELS).map(key => ({
        value: key,
        label:  <IconContainer>
                    <IconLabel>{LEVELS[key].value}</IconLabel>
                    <StyledIcon level={LEVELS[key]}/>
                </IconContainer>
    }))

    return (
        <IconSelect
            control={control} 
            name={name}
            label='Answer'
            defaultValue={LEVELS.yellow}
            options={options}
        />
    )
}

export default AnswerPicker;