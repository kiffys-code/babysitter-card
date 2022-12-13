import styled from "styled-components";
import TextInput from "components/shared/input/TextInput";
import * as Consent from "components/Consent"
import ConsentInfo from "components/ConsentInfo";
import ModalSelect from "components/shared/input/ModalSelect";
import Button from "components/shared/Button";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const Ask = styled(TextInput)`
    font-size: 1.4rem;
    text-align: left !important;
    width: 90%;
`

const DeleteIcon = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
`

const DeleteButton = styled(Button)`
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
`
const ConsentListItemEdit = ({control, name, consent, deleteConsent}) => {

    return (
        <>
            <Container>
                <ModalSelect 
                    control={control}
                    name={`${name}.answer`}
                    label={consent.ask}
                    defaultValue={Consent.LEVELS.yellow}
                    options={Object.keys(Consent.LEVELS).map(key => ({
                        label: <ConsentInfo 
                                    level={Consent.LEVELS[key]}
                                />,
                        value: key
                    }))}
                />
                <Ask 
                    control={control}
                    name={`${name}.ask`}
                    defaultValue='' 
                />
                <DeleteButton onClick={() => deleteConsent()} >
                    <DeleteIcon 
                        src={require('./trash-bin.png')}
                        alt='Delete'
                    />
                </DeleteButton>
            </Container>
        </>
    )
}

export default ConsentListItemEdit;