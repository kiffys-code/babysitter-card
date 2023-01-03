import { ConsentIcon, LEVELS } from "components/Consent";
import IconSelect from 'components/shared/input/IconSelect';
import styled from "styled-components";

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 5rem;
    padding-bottom: 0.4rem;
`

const IconLabel = styled.label`
    font-style: italic;
`

const StyledIcon = styled(ConsentIcon)`
    height: 2rem;
`

const StyledIconSelect = styled(IconSelect)`
    justify-content: space-between;
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
        <StyledIconSelect
            control={control} 
            name={name}
            label='Answer'
            defaultValue={LEVELS.yellow}
            options={options}
        />
    )
}

export default AnswerPicker;