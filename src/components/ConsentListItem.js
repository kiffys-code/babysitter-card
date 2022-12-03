import styled from "styled-components";
import TextInput from "./input/TextInput";
import * as Consent from "./Consent"
import { useState } from "react";
import StyledModal from "./StyledModal";
import ConsentInfo from "./ConsentInfo";
import ModalSelect from "./input/ModalSelect";
import Button from "./input/Button";

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: ${({edit}) => edit ? '0' : '1rem'};
    width: 100%;
`

const Ask = styled(TextInput)`
    font-size: 1.4rem;
    text-align: left !important;
    width: ${({edit}) => edit ? '90%' : '100%'};
    
`
const AnswerIcon = styled(Consent.Icon)`
    height: 2rem;
`

const ModalContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const DeleteIcon = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
    // border: 1px solid white;
    // box-shadow: 1px 1px 2px black;
`

const DeleteButton = styled(Button)`
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
`

const ConsentListItem = ({control, name, edit, consent, deleteConsent}) => {

    const [showAnswerModal, setShowAnswerModal] = useState(false);

    const renderedAnswer = (() => {
        if(edit) {
            return <ModalSelect 
                control={control}
                name={`${name}.answer`}
                label={consent.ask}
                defaultValue={Consent.LEVELS.yellow}
                options={Object.keys(Consent.LEVELS).map(key => ({
                    label: <ConsentInfo 
                                level={Consent.LEVELS[key]} 
                                edit={edit} 
                            />,
                    value: key
                }))}
                edit={edit}
            />
        } else {

            return <AnswerIcon 
                onClick={() => setShowAnswerModal(true)} 
                level={Consent.LEVELS[consent.answer]} 
            />
        }
    })();

    const deleteButton = edit ?
        <DeleteButton onClick={() => deleteConsent()} >
            <DeleteIcon 
                src={require('./trash-bin.png')}
                alt='Delete'
            />
        </DeleteButton>
        : null;

    return (
        <>
            <Container edit={edit}>
                {renderedAnswer}
                <Ask 
                    control={control}
                    name={`${name}.ask`}
                    defaultValue='' 
                    edit={edit}
                />
                {deleteButton}
            </Container>
            <StyledModal
                isOpen={showAnswerModal}
                title={consent.ask}
                closeModal={() => setShowAnswerModal(false)}
            >
                <ModalContentContainer>
                    <ConsentInfo 
                        level={Consent.LEVELS[consent.answer]}
                        edit={edit}
                    />
                </ModalContentContainer>
            </StyledModal>
        </>
    )
}

export default ConsentListItem;